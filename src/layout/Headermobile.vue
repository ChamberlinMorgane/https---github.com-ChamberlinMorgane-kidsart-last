<template>
  <header class="z-50 flex h-8 w-screen">
    <a href="/"><Logokidsart class="mx-7 my-5 mt-5 h-12 w-auto" /></a>

    <MenuAlt1Icon class="right-5 z-50 ml-auto mt-5 h-8 w-8" @click="MenuOpen = !MenuOpen" v-if="!MenuOpen" />
    <XIcon class="right-5 z-50 ml-auto mt-5 h-8 w-8" @click="MenuOpen = !MenuOpen" v-if="MenuOpen" />
    <nav
      class="
        from-degrade-1
        via-degrade-2
        to-degrade-3
        absolute
        left-0
        top-0
        bottom-0
        right-0
        z-50
        h-screen
        -translate-x-full
        bg-gradient-to-r
        opacity-0
      "
      :class="MenuOpen && 'translate-x-0 bg-gray-200 opacity-100'"
    >
      <ul class="text-1lg flex h-full flex-col items-center justify-center gap-5 text-left font-bold">
        <li>
          <RouterLink to="/" @click="MenuOpen = !MenuOpen" class="font-acme text-6xl">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="/nosartistes" @click="MenuOpen = !MenuOpen">Nos artistes</RouterLink>
        </li>
        <li>
          <RouterLink to="/noscoloriages" @click="MenuOpen = !MenuOpen">Nos coloriages</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" @click="MenuOpen = !MenuOpen">Contact</RouterLink>
        </li>
        <li>
          <RouterLink to="/apropos" @click="MenuOpen = !MenuOpen">À propos</RouterLink>
        </li>
        <li>
          <RouterLink to="/inscriptions" @click="MenuOpen = !MenuOpen">S'inscrire</RouterLink>
        </li>
        <li>
          <RouterLink to="/connexion" @click="MenuOpen = !MenuOpen">Se connecter</RouterLink>
        </li>

        <div class="flex justify-center hover:border-b-4 hover:border-b-white">
          <RouterLink class="block py-2 px-4" to="moncompte">
            <div class="grid">
              <span v-if="avatar != null" class="mr-3">
                <img class="avatar h-10 w-auto" :src="avatar" />
                <RouterLink to="/" class="text-xs">{{ name }}</RouterLink>
              </span>
            </div>
            <div v-if="avatar != null" class="hidden pt-9">
              <Users class="text-Noirr"></Users>
            </div>
            <div v-else>
              <Users class="text-Noirr"></Users>
            </div>
          </RouterLink>
        </div>
        <button type="button" class="mt-3" @click="onDcnx()">
          <LogoutView />
        </button>
      </ul>
    </nav>
  </header>
</template>

<script>
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/outline";
import Logokidsart from "../../public/icons/IconLogo.vue";
import LogoutView from "../components/LogoutView.vue";

import Users from "../components/Users.vue";
import IconLogo from "/public/icons/IconLogo.vue";

// Fonctions Firestore
import { getFirestore, collection, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonctions Storage
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Import emetteur de main.js
import { emitter } from "../main";

export default {
  name: "App",
  components: { Users, IconLogo, MenuAlt1Icon, XIcon, Logokidsart, LogoutView },
  data() {
    return {
      MenuOpen: false,
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté
      name: "Vidéo", // Titre de l'application ou nom du user
      avatar: null, // Avatar / image du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
    };
  },

  onDcnx() {
    // Se déconnecter
    signOut(getAuth())
      .then((response) => {
        // Mise à jour du message
        this.message = "User non connecté";
        // Ré initialisation des champs
        this.user = {
          email: null,
          password: null,
        };
        // Emission évènement de déconnexion
        emitter.emit("deConnectUser", { user: this.user });
      })
      .catch((error) => {
        console.log("erreur deconnexion ", error);
      });
  },

  mounted() {
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();

    // Ecoute de l'évènement de connexion
    emitter.on("connectUser", (e) => {
      // Récupération du user
      this.user = e.user;
      console.log("App => Reception user connecté", this.user);
      // Recherche infos complémentaires du user
      this.getUserInfo(this.user);
    });

    // Ecoute de l'évènement de deconnexion
    emitter.on("deConnectUser", (e) => {
      // Récupération user
      this.user = e.user;
      console.log("App => Reception user deconnecté", this.user);
      // Réinitialisation infos complémentaires user
      this.userInfo = null;
      this.name = "Vidéo";
      this.avatar = null;
      this.isAdmin = false;
    });
  },
  methods: {
    // Obtenir les informations du user connecté
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },

    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        // Recherche de l'image du user sur le Storage
        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.avatar = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },
  },
};
</script>
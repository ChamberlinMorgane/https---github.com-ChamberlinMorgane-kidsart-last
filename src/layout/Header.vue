  <template>
  <header class="h-24 bg-gray-200 pb-20">
    <nav class="flex">
      <div>
        <RouterLink to="/"><Logo class="mx-7 my-5 h-11 w-12" /></RouterLink>
      </div>

      <div class="mx-6 mt-8 flex space-x-8 font-light text-black">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/apropos">A propos</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/nosartistes">Nos artistes</RouterLink>
        <RouterLink to="/coloriage">Nos Coloriages</RouterLink>
      </div>
    </nav>

    <div class="ml-auto mr-7 flex gap-x-4">
      <RouterLink to="/commande1"><img src="/icons/commande.svg" class="mt-11 h-8 w-8" /></RouterLink>
      <div class="flex flex-col justify-center hover:border-b-4 hover:border-b-white">
        <RouterLink class="block py-2 px-4" to="/">
          <div class="mt-14 grid">
            <span v-if="avatar != null" class="mr-3">
              <img class="avatar h-10 w-auto" :src="avatar" />
              <RouterLink to="/" class="text-xs">{{ name }}</RouterLink>
            </span>
          </div>
          <div v-if="avatar != null" class="hidden pt-9">
            <Users class="text-Noirr"></Users>
          </div>
          <div v-else class="pt-9">
            <Users class="text-Noirr"></Users>
          </div>
        </RouterLink>
      </div>
    </div>
  </header>
</template>


<script>
import Users from "../components/Users.vue";
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
  components: { Users },
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





<template>
  <img class="mt-48" src="/images/hero_artistes.jpg" alt="hero page nos artistes" />

  <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
    <RouterLink to="/artiste" v-for="art in Dessinateur" :key="art"><Card :nom="art.nom" :image="art.image" /></RouterLink>

    <RouterLink to="/artiste" v-for="art in Peintre" :key="art"><Card :nom="art.nom" :image="art.image" /></RouterLink>

    <RouterLink to="/artiste" v-for="art in Animateur" :key="art"><Card :nom="art.nom" :image="art.image" /></RouterLink>

    <RouterLink to="/artiste" v-for="art in DessinateurGraphique" :key="art"><Card :nom="art.nom" :image="art.image" /></RouterLink>
  </div>

  <input class="w-auto text-black" type="text" placeholder="Nom de l'artiste" v-model="nom" required />

  <button type="button" @click.prevent="createArtistes()"><PlusSmIcon class="ml-auto w-7" /></button>
  <h3 class="font-source-sans-pro m-auto w-4/5 text-base">Ajoutée son profil d'artiste</h3>
  <div class="mx-auto grid w-4/5 grid-cols-3" v-for="art in listeArtistes" :key="art">
    <div class="flex h-10 rounded-l-sm">
      <div class="flex items-center justify-center border-[1px] bg-gray-400 px-5 text-black">Nom</div>
      <input class="w-auto text-black" type="text" placeholder="Nom du l'artiste" v-model="art.nom" required />
    </div>

    <div class="flex gap-5 px-3 text-right text-black">
      <button type="button" @click.prevent="updateArtistes(art)"><SaveIcon class="float-right w-7 text-white" /></button>
      <button type="button" @click.prevent="deleteArtistes(art)"><MinusIcon class="float-right w-7 text-white" /></button>
    </div>
  </div>
</template>

 
   
 

<script>
import Card from "../components/Card.vue";
import { SaveIcon, MinusIcon, PlusSmIcon } from "@heroicons/vue/outline";
import {
  getFirestore,
  collection,
  doc,
  query,
  orderBy,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default {
  name: "ListeView",
  components: {
    Card,
    SaveIcon,
    MinusIcon,
    PlusSmIcon,
  },
  data() {
    return {
      listeArtistes: [],
      qDessinateur: 1,
      qPeintre: 2,
      qDessinateurGraphique: 3,
      qAnimateur: 4,
      nom: null,
      filter: "",
    };
  },
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArt = collection(firestore, "Artistes");
      const q = query(dbArt, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtistes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        this.listeArtistes.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "Artistes/" + personne.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.image = url;
            })
            .catch((error) => {
              console.log("erreur download url", error);
            });
        });
      });
    },
    async createArtistes() {
      const firestore = getFirestore();
      const dbTick = collection(firestore, "Artistes");
      const docRef = await addDoc(dbTick, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },
    async updateArtistes(art) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Artistes", artistes.id);
      await updateDoc(docRef, {
        nom: artistes.nom,
      });
    },
    async deleteArtistes(art) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Artistes", Artistes.id);
      await deleteDoc(docRef);
    },
  },

  computed: {
    Dessinateur() {
      let query = this.qDessinateur;
      return this.listeArtistes.filter(function (art) {
        return art.metier.includes(query);
      });
    },
    Peintre() {
      let query = this.qPeintre;
      return this.listeArtistes.filter(function (art) {
        return art.metier.includes(query);
      });
    },
    Animateur() {
      let query = this.qAnimateur;
      return this.listeArtistes.filter(function (art) {
        return art.metier.includes(query);
      });
    },
    DessinateurGraphique() {
      let query = this.qDessinateurGraphique;
      return this.listeArtistes.filter(function (art) {
        return art.metier.includes(query);
      });
    },
  },
};
</script>
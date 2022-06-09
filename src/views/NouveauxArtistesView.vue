<template>
  <main>
    <div class="mt-20 mb-20">
      <div class="h-1 w-full bg-white"></div>
      <div class="flex items-center justify-between py-8">
        <div class="h-1 w-8 bg-white sm:w-1/3"></div>
        <div class="flex w-8 justify-around md:w-1/3">
          <h2 class="font-staatliches text-3xl">Ajoute ton profil artiste</h2>
        </div>
        <div class="h-1 w-8 bg-white sm:w-1/3"></div>
      </div>
      <div class="h-1 w-full bg-white"></div>
    </div>

    <div class="grid grid-cols-1 gap-8 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div to="/artiste" v-for="art in listeArtistenew" :key="art">
        <card-3 :id="art.id" :nom="art.nom" :image="art.image"> </card-3>
      </div>
      <RouterLink to="createview"
        ><PlusCircleIcon class="m-auto flex w-20 justify-center border-4 border-white align-middle lg:w-40"
      /></RouterLink>
    </div>
  </main>
</template>

<script>
import Card3 from "../components/Card3.vue";
import { PlusCircleIcon, MinusIcon, PencilAltIcon } from "@heroicons/vue/outline";
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
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: {
    Card3,
    PlusCircleIcon,
    MinusIcon,
    PencilAltIcon,
  },
  data() {
    return {
      listeArtistenew: [],
    };
  },
  mounted() {
    this.getArtistenew();
  },
  methods: {
    async getArtistenew() {
      const firestore = getFirestore();
      const dbArt = collection(firestore, "artistenew");
      const q = query(dbArt, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtistenew = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtistenew.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artistenew/" + personne.image);
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
  },
  computed: {
    searchByDay() {
      let query = this.query;
      return this.ListeArtistenew.filter(function (art) {
        return art.jour.includes(query);
      });
    },
  },
};
</script>

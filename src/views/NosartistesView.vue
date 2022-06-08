<template>
  <img class="mt-48" src="/images/hero_artistes.jpg" alt="artistes" />
  <RouterLink to="/artiste" v-for="art in Dessinateur" :key="art"><Card :nom="art.nom" :image="art.image" /></RouterLink>
  <RouterLink to="/artiste" v-for="art in Peintre" :key="art"><Card :nom="art.nom" :image="art.image" /></RouterLink>
  <RouterLink to="/artiste" v-for="art in Animateur" :key="art"><Card :nom="art.nom" :image="art.image" /></RouterLink>
  <RouterLink to="/artiste" v-for="art in DessinateurGraphique" :key="art"><Card :nom="art.nom" :image="art.image" /></RouterLink>
</template>

<script>
import Card from "../components/Card.vue";

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
    Card,
  },
  data() {
    return {
      listeArtistes: [],
      qDessinateur: 1,
      qPeintre: 2,
      qDessinateurGraphique: 3,
      qAnimateur: 4,
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
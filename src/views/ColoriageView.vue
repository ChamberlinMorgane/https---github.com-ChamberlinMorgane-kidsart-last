<template>
  <img class="mt-48" src="src/assets/images/hero_coloriage.jpg" alt="image hero" />
  <p class="mt-20 mb-14 text-center text-lg font-bold uppercase">
    Des feutres, des crayons de couleurs, et c’est parti ! Téléchargez, imprimez puis Coloriez gratuitement des coloriages pour vos enfants
    !
  </p>

  <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
    <RouterLink to="/artiste" v-for="col in listeColoriages" :key="col"><Card2 :image="col.image" /></RouterLink>
  </div>
</template>

<script>
import Card2 from "../components/Card2.vue";

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
  components: {
    Card2,
  },
  data() {
    return {
      listeColoriages: [],
    };
  },
  mounted() {
    this.getColoriages();
  },
  methods: {
    async getColoriages() {
      const firestore = getFirestore();
      const dbCol = collection(firestore, "Coloriages");
      const q = query(dbCol, orderBy("image", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeColoriages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeColoriages.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "Coloriages/" + personne.image);
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

  computed: {},
};
</script>



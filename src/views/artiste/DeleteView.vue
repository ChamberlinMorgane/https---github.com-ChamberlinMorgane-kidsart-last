<template>
  <div class="relative mt-12 flex h-[80vh] flex-col justify-center gap-20 px-5">
    <form @submit.prevent="deleteArtistenew">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="grid place-items-center">
          <img :src="photoActuelle" class="w-1/2" />
        </div>
        <div class="grid grid-cols-1 gap-14">
          <div class="flex h-10 overflow-hidden rounded-sm text-black">
            <div class="flex items-center justify-center border-[1px] bg-cyan-600 px-5">Nom</div>
            <input class="w-full pl-2 text-black" type="text" placeholder="Nom de l'artiste" v-model="artistenew.nom" disabled />
          </div>
        </div>
      </div>
      <div class="grid w-full grid-cols-2 place-items-center">
        <button class="w-fipx-6 py-3 text-black" type="submit">Supprimer</button>
        <button class="w-fit px-6 py-3 text-black" type="button"><RouterLink to="/nouveauxartistes">Annuler</RouterLink></button>
      </div>
    </form>
  </div>
</template>
<script>
import { getFirestore, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
export default {
  data() {
    return {
      artistenew: {
        nom: null,
        image: null,
      },

      refArtistenew: null,
      photoActuelle: null,
    };
  },
  mounted() {
    this.getArtistenew(this.$route.params.id);
  },
  methods: {
    async getArtistenew(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artistenew", id);
      this.refArtistenew = await getDoc(docRef);
      if (this.refArtistenew.exists()) {
        this.artistenew = this.refArtistenew.data();
        this.photoActuelle = this.artistenew.image;
      } else {
        this.console.log("artistenew inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "artistenew/" + this.artistenew.image);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadurl", error);
        });
    },

    async deleteArtistenew() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "artistenew", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "artistenew/" + this.artistenew.image);
      deleteObject(docRef);
      this.$router.push("/nouveauxartistes");
    },
  },
};
</script>

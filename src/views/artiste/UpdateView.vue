<template>
  <div class="relative mt-12 flex h-[80vh] flex-col justify-center gap-20 px-5">
    <form @submit.prevent="updateArtistenew">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="grid place-items-center">
          <img :src="imageData" class="w-1/2" />
        </div>
        <div class="grid grid-cols-1 gap-14">
          <div class="flex h-10 overflow-hidden rounded-sm text-black">
            <div class="flex items-center justify-center border-[1px] bg-cyan-600 px-5">Nom</div>
            <input class="w-full bg-slate-100 pl-2" type="text" placeholder="Nom de l'artiste" v-model="artistenew.nom" required />
          </div>

          <div class="flex h-10 overflow-hidden rounded-sm text-black">
            <div class="flex items-center justify-center border-[1px] bg-cyan-600 px-5">Photo</div>
            <div class="relative w-full">
              <input type="file" class="relative w-full pl-2 text-black" ref="file" id="file" @change="previewImage" />
              <label class="absolute left-0 top-0 bottom-0 flex w-full items-center justify-center bg-slate-100 pl-2" for="file"
                >Sélectionner l'image</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="grid w-full grid-cols-2 place-items-center">
        <button class="w-fit bg-slate-100 px-6 py-3 text-black" type="submit">
          <RouterLink to="/nouveauxartistes">Modifier</RouterLink>
        </button>
        <button class="w-fit bg-slate-100 px-6 py-3 text-black" type="button">
          <RouterLink to="/nouveauxartistes">Annuler</RouterLink>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
export default {
  data() {
    return {
      imageData: null,
      artistenew: {
        nom: null,
        image: null,
      },

      refArtistenew: null,
      imgModifiee: false,
      photoActuelle: null,
    };
  },
  mounted() {
    this.getArtistenew(this.$route.params.id);
  },
  methods: {
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artistenew.image = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadurl", error);
        });
    },

    async updateArtistenew() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "artistenew/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "artistenew/" + this.artistenew.image);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.artistenew.image);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "artistenew", this.$route.params.id), this.artistenew);
      this.$router.push("/nouveauxartistes");
    },
  },
};
</script>

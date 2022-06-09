<template>
  <main class="mt-48">
    <h2 class="m-auto mb-36 flex justify-center text-7xl font-bold text-black">Modifier mon profil</h2>

    <div class="mx-24 mb-20 flex gap-x-72">
      <div class="flex">
        <img src="/images/patricia.png" alt="photo de profil de Patricia" class="h-20" />
        <p class="mt-10 ml-10 text-2xl font-bold">Patricia</p>
      </div>

      <section class="w-2/4 p-1">
        <form enctype="multipart/form-data" @submit.prevent="updateUsers" class="grid grid-cols-[max-content_1fr]">
          <fieldset class="contents">
            <label for="nom d'utilisateur">Nom d'utilisateur</label
            ><input class="mb-10 ml-9 rounded-sm border-2 border-black py-2" name="nom d'utilisateur" id="nom d'utilisateur" type="text" />
            <label for="biographie">Bio</label>
            <input class="mb-10 ml-9 rounded-sm border-2 border-black py-16" name="biographie" id="biographie" type="text" />
          </fieldset>

          <fieldset class="contents">
            <label for="lignes-adresse">Adresse mail</label>
            <input class="mb-10 ml-9 rounded-sm border-2 border-black py-2" name="lignes-adresse" id="lignes-adresse" />
            <label for="numéro de téléphone">Numéro de téléphone</label>
            <input
              class="mb-10 ml-9 w-96 rounded-sm border-2 border-black py-2"
              name="numéro de téléphone"
              id="numéro de téléphone"
              type="number"
              min="0"
              max="99 99 99 99 99"
            />
          </fieldset>
        </form>
      </section>
    </div>

    <div class="ml-44 mr-44 pb-52">
      <button
        class="float-left h-14 w-48 rounded-2xl border-2 border-black bg-red-400 px-6 text-xl text-black"
        type="button"
        @click="onDcnx()"
      >
        Se déconnecter
      </button>

      <button class="float-right mr-10 h-14 w-48 rounded-2xl border-2 border-black bg-green-700 px-6 text-xl text-white" type="submit">
        Valider
      </button>
    </div>
  </main>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
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

// Storage
import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "UpdateView",
  data() {
    return {
      imageData: null, // Image prévisualisée
      listeusers: [], // Liste des pays pour la nationalité du participant
      users: {
        // Le participant à créer
        nom: null, // son nom
        prenom: null, // son prénom
        photo: null, // sa photo (nom du fichier)
        naissance: null, // sa date de naissance
        nationalite: null, // sa nationalité
      },

      refUsers: null, // Référence du participant à modifier
      imgModifiee: false, // Indique si l'image du participant a été modifiée, par défaut : non
      photoActuelle: null, // Photo actuelle du participant
    };
  },
  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id users", this.$route.params.id);
    // Recherche participant concerné
    this.getUsers(this.$route.params.id);
    // Appel de la liste des pays
    this.getUsers();
  },

  methods: {
    async getUsers() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document Users
      const dbUsers = collection(firestore, "users");
      // Liste des participants triés
      const q = query(dbUsers, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeusers = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },

    async getUsers(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      // Récupération sur Firestore du participant via son id
      const docRef = doc(firestore, "users", id);
      // Référence du participant concerné
      this.refUsers = await getDoc(docRef);
      // Test si le participant demandé existe
      if (this.refUsers.exists()) {
        // Si oui on récupère ses données
        this.users = this.refUsers.data();
        // Mémorisation photoActuelle
        this.photoActuelle = this.users.photo;
      } else {
        // Sinon simple message d'erreur
        this.console.log("Users inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du participant
      const spaceRef = ref(storage, "users/" + this.users.photo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.users.photo = this.file.name;
      // Si cette fonction s'exécute, c'est que l'image est modifiée
      this.imgModifiee = true;
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async updateUsers() {
      // Si l'image a été modifiée
      if (this.imgModifiee) {
        // On supprime l'ancienne
        const storage = getStorage();
        // Référence du fichier
        let docRef = ref(storage, "users/" + this.photoActuelle);
        // Suppression photo actuelle
        deleteObject(docRef);
        // création nouvelle photo
        // Référence de l'image à uploader
        docRef = ref(storage, "users/" + this.users.photo);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.users.photo);
        });
      }
      // Dans tous les cas on met à jour le participant dans Firestore
      const firestore = getFirestore();
      // Modification du participant à partir de son id
      await updateDoc(doc(firestore, "users", this.$route.params.id), this.users);
      // redirection sur la liste des participants
      this.$router.push("/users");
    },
  },
};
</script>

<style scoped>
a {
  color: white;
}
a:hover {
  text-decoration: none;
}
</style>



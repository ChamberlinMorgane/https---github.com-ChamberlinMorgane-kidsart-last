<template>
  <main>
    <body class="container mx-auto mt-20 flex max-w-sm flex-1 flex-col items-center justify-center">
      <h2 class="pt-20 text-3xl font-bold">Connexion</h2>
      <form @submit.prevent="onCnx" class="text-Primaire z-10 mt-20 mb-96 content-center align-middle">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button class="btn btn-dark"></button>
          </div>
          <input
            class="form-control rounded-14xl rounded-10xl z-30 ml-16 h-10 w-96 border-2 bg-yellow-100"
            placeholder="E-mail"
            type="email"
            v-model="user.email"
            required
          />
        </div>
        <div class="input-group mb-3 ml-16">
          <div class="input-group-prepend">
            <button class="btn btn-dark"></button>
          </div>
          <input
            class="form-control rounded-14xl rounded-10xl h-10 w-96 border-2 bg-yellow-100"
            placeholder="Mot de passe"
            :type="type"
            v-model="user.password"
            required
          />
        </div>
        <div>
          <button @click.prevent="affiche()">
            <i></i>
          </button>
        </div>
        <div class="alert alert-warning mb-3 text-center">
          {{ message }}
        </div>
        <div class="mt-6 flex items-center justify-center gap-x-9">
          <button class="h-14 w-48 rounded-2xl border-2 border-white bg-black px-6 align-middle text-xl text-white" type="submit">
            Se connecter
          </button>
          <button
            class="h-14 w-48 rounded-2xl border-2 border-black bg-red-400 px-6 align-middle text-xl text-black"
            type="button"
            @click="onDcnx()"
          >
            Se déconnecter
          </button>
        </div>
      </form>
    </body>
  </main>
</template>



<script>
import { EyeIcon } from "@heroicons/vue/outline";

// Import des fonction d'authentification
import {
  getAuth, // Fonction générale d'authentification
  signInWithEmailAndPassword, // Se connecter avec un email + mot de passe
  signOut, // Se deconnecter
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

//Import de l'emetteur depuis main.js
import { emitter } from "../main.js";

export default {
  name: "Connexion",
  components: {
    EyeIcon,
  },
  data() {
    return {
      user: {
        // Utilisateur : email + mot de passe
        email: "",
        password: "",
      },
      message: null, // Message de connexion
      view: false, // Afficher / cacher le mot de passe
      type: "password", // Type de champs pour le password : password / text pour l'afficher
      imageData: null, // Image prévisualisée pour création compte
    };
  },
  mounted() {
    // Montage de la vue
    this.message = "User non connecté";
  },
  methods: {
    onCnx() {
      // Se connecter avec user et mot de passe
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          // Connexion OK - mise à jour du user
          this.user = response.user;
          // Emission evenement de connexion
          emitter.emit("connectUser", { user: this.user });
          console.log("user", this.user);
          // Mise à jour du message
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          // Erreur de connexion
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },

    // Se deconnecter
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

    // Affiche/masque le champs password
    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
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
  },
};
</script>

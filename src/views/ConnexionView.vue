<template>
  <main>
    <body class="mt-48">
      <form @submit.prevent="onCnx">
        class="text-Primaire absolute z-10 mt-64 content-center align-middle">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button class="btn btn-dark"></button>
          </div>
          <input
            class="form-control bg-Primaire text-Secondaire rounded-14xl z-30 ml-16 h-10 w-56 border-2 align-middle"
            placeholder="E-mail"
            type="text"
            v-model="user.email"
            required
          />
        </div>
        <div class="input-group mb-3 ml-16">
          <div class="input-group-prepend">
            <button class="btn btn-dark"></button>
          </div>
          <input
            class="form-control rounded-14xl bg-Primaire text-Secondaire h-10 w-56"
            placeholder="Mot de passe"
            :type="password"
            v-model="user.password"
            required
          />
        </div>
        <div>
          <div class="input-group-after">
            <button class="btn btn-light" @click.prevent="affiche()"><EyeIcon /></button>
          </div>
        </div>
        <div class="alert alert-warning mb-3 text-center">
          {{ message }}
        </div>
        <div>
          <button
            class="float-right h-14 w-48 rounded-2xl border-2 border-white bg-black px-6 align-middle text-xl text-white"
            type="submit"
          >
            Se connecter
          </button>
          <button
            class="float-right h-14 w-48 rounded-2xl border-2 border-black bg-red-400 px-6 align-middle text-xl text-black"
            type="button"
            @click="onDcnx()"
          >
            Se déconnecter
          </button>
        </div>
      </form>

      <h5 class="text-black">S'inscrire</h5>

      <form>
        <div class="card-body">
          <div class="row">
            <div class="">
              <div class="">
                <span class="">Login</span>
              </div>
              <input class="" placeholder="Login" required />
            </div>

            <div class="" v-if="imageData">
              <img class="" :src="imageData" />
            </div>

            <div class="">
              <div class="">
                <span class="">Photo</span>
              </div>
              <div class="">
                <input type="file" class="" ref="file" id="file" @change="previewImage" />
                <label class="" for="file">Sélectionner l'image</label>
              </div>
            </div>
            <div class="">
              <div class="">
                <span class="">Email</span>
              </div>
              <input class="" placeholder="Adresse mail" type="email" required />
            </div>

            <div class="">
              <div class="">
                <span class="">Mot de passe</span>
              </div>
              <input class="" placeholder="Mot de passe" required />
            </div>
          </div>
        </div>

        <div class="">
          <button type="submit" class="">Créer Compte</button>
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
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

//Import de l'emetteur depuis main.js
import { emitter } from "../main.js";

export default {
  name: "Connexion",
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
  components: {
    EyeIcon,
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

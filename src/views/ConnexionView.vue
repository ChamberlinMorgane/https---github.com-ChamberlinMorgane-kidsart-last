<template>
  <main>
    <body class="mt-48">
      <form @submit.prevent="onCnx" class="text-Primaire absolute z-10 mt-64 content-center align-middle">
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
      <router link to="/">
        <img src="../../public/icon/logo-final-w.png" class="relative z-20 -mt-44 ml-3 w-40" alt="" />
      </router>

      <img class="relative -mt-48 mb-32 pt-20" src="../../public/img/sign.jpg" alt="" />
    </body>
  </main>
</template>

<script>
// Bibliothèques Firebase  : import des fonctions
//  signInWithEmailAndPassword : Authentification avec email et mot de passe
//  getAuth : Fonction générale d'authentification
//  signOut : Se deconnecter
//  onAuthStateChanged : connaitre le statut de l'utilisateur (connecté ou non)
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

export default {
  name: "Connexion",
  data() {
    // Données de la vue
    return {
      user: {
        // user se connectant
        email: "",
        password: "",
      },
      message: null, //message de connexion
      view: false, //Pour afficher ou cacher le mdp
      type: "password", //type de champ
      imageData: null, //image prévisualisée pour le compte
    };
  },

  mounted() {
    // Montage de la vue
    // Rechercher si un user est déjà connecté
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "User déjà connecté : " + this.user.email;
    } else {
      this.message = "User non connecté : " + this.user.email;
    }
  },

  methods: {
    onCnx() {
      // Se connecter avec user et mot de passe
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          // Connexion OK
          this.user = response.user;
          console.log("user", this.user);
          //mise a jour du message
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
          //mise a jour du message
          this.message = "User non connecté";

          this.user = {
            email: null,
            password: null,
          };
        })
        .catch((error) => {
          console.log("erreur deconnexion ", error);
        });
    },
    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>

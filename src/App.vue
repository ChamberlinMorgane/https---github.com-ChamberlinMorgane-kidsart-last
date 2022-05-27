<template>
  <header class="mb-7 flex bg-gray-100">
    <nav class="flex">
      <IconLogo class="mx-8 my-5 h-10 w-12" />

      <div class="mx-6 mt-7 flex space-x-8 font-roboto">
        <a href="accueil"><h3 class="block">Acceuil</h3></a>
        <a href="apropos"><h3 class="block">À propos</h3></a>
        <a href="contact"><h3 class="block">Contact</h3></a>
        <a href="nosartistes"><h3 class="block">Nos artistes</h3></a>
        <a href="coloriage"><h3 class="block">Nos coloriages</h3></a>
      </div>
    </nav>
  </header>

  <RouterView />
  <footer class="h-72 bg-black text-white">
    <div class="bg-gris-footer h-56">
      <nav class="flex">
        <ul class="mx-12 mt-9">
          <h5 class="mb-5">Kid’sArt</h5>
          <li>Accueil</li>
          <li>Contact</li>
          <li>À propos</li>
          <li>S'inscrire</li>
          <li>Me connecter</li>
          <li>Mon compte</li>
        </ul>

        <ul class="mx-12 mt-9">
          <h5 class="mb-5">A propos</h5>
          <li>Qui sommes-nous ?</li>
          <li>Pourquoi cette inovation ?</li>
          <li>Pour nos utilisateurs</li>
        </ul>

        <ul class="mx-12 mt-9">
          <h5 class="mb-5">Contact</h5>
          <li>Nous contacter</li>
          <li>Nos artistes</li>
          <li>Portection de la vie privée</li>
        </ul>

        <ul class="mx-12 mt-9">
          <h5 class="mb-5">Remboursement</h5>
          <li>Achats en ligne</li>
          <li>Remboursement</li>
          <li>Mode de paiement</li>
        </ul>
      </nav>

      <div class="mr- float-right -mt-36 mr-32 flex w-20 gap-4">
        <img src="./assets/images/visa.jpg" />
        <img src="./assets/images/cb.jpg" />
      </div>

      <div class="float-right -mt-20 mr-32 flex w-20 gap-4">
        <img src="./assets/images/paypal-logo.jpg" />
        <img src="./assets/images/mastercard-logo.jpg" />
      </div>
      <ul class="float-right mr-5 flex w-48 flex-row gap-7">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100009306961064" aria-label="Facebook">
            <img src="./assets/icons/facebook.svg" alt="icone facebook"
          /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/bdemmi_mtb/" aria-label="Instagram">
            <img src="./assets/icons/instagram.svg" alt="icone instagram"
          /></a>
        </li>
        <li>
          <a href="https://twitter.com/1820Tc" aria-label="Twitter"> <img src="./assets/icons/twitter.svg" alt="icone twitter" /></a>
        </li>
        <li>
          <a href="http://mmimontbeliard.com/" aria-label="MMI Montbéliard"> <img src="./assets/icons/mmi.svg" alt="icone mmi" /></a>
        </li>
      </ul>
    </div>
    <div class="bg-gris-fonce-footer mt-5 h-3">
      <nav class="flex">
        <div class="mx-6 mt-3 flex space-x-8 font-roboto">
          <h3 class="block"><a href="mentionslegales">Mentions légales</a></h3>
          <h3 class="block">Cookies</h3>
          <h3 class="block">Politique de protection des données personnelles</h3>
          <h3 class="block">Plan du site</h3>
          <h3 class="block">©️ Kid’sArt FRANCE 2022 Crée par Marion Gillot et Morgane Chamberlin</h3>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
import IconLogo from "./assets/icons/IconLogo.vue";

export default {
  components: { IconLogo },
};
</script>
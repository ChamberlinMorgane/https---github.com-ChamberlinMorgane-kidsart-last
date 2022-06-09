<template>
  <footer class="h-auto bg-fond1footer">
    <div class="grid grid-cols-2 justify-items-center">
      <ul class="mt-9 mr-16 text-xs">
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
        <li><RouterLink to="/apropos">À propos</RouterLink></li>
        <li><RouterLink to="/inscriptions">S'inscrire</RouterLink></li>
        <li><RouterLink to="/connexion">Se connecter</RouterLink></li>
        <li><RouterLink to="/moncompte">Mon compte</RouterLink></li>
      </ul>

      <ul class="mt-9 text-xs">
        <li><RouterLink to="/apropos">Qui sommes-nous ?</RouterLink></li>
        <li><RouterLink to="/apropos">Pourquoi cette inovation ?</RouterLink></li>
        <li><RouterLink to="/apropos">Pour nos utilisateurs</RouterLink></li>
      </ul>

      <ul class="mt-5 text-xs">
        <li><RouterLink to="/contact">Contact</RouterLink></li>
        <li><RouterLink to="/contact">Nous contacter</RouterLink></li>
        <li>Portection de la vie privée</li>
        <li>Nos artistes</li>
        <li>Portection de la vie privée</li>
      </ul>

      <ul class="mt-5 text-xs">
        <li>Vente et remboursement</li>
        <li>Achat en ligne</li>
        <li>Mode de paiement</li>
      </ul>
    </div>
    <div class="m-auto mt-10 flex w-80 justify-center space-x-20">
      <a href="https://www.facebook.com/profile.php?id=100009306961064" aria-label="Facebook">
        <img src="/icons/facebook.svg" alt="icon facebook"
      /></a>

      <a href="https://www.linkedin.com/in/marion-gillot-8133a7224/" aria-label="Instagram">
        <img src="/icons/instagram.svg" alt="icon instagram"
      /></a>

      <a href="https://twitter.com/1820Tc" aria-label="Twitter"> <img src="/icons/twitter.svg" alt="icon twitter" /></a>

      <a href="https://www.linkedin.com/in/marion-gillot-8133a7224/" aria-label="Linlkedin"> <img src="/icons/mmi.svg" alt="icon mmi" /></a>
    </div>

    <div class="mt-7 h-auto bg-fond2footer">
      <nav class="flex">
        <div class="font-regular mx-6 flex space-x-8 p-3 text-xs">
          <h3 class="block"><a href="mentionslegales">Mentions légales</a></h3>
          <h3 class="block">Cookies</h3>
          <h3 class="block">Politique de protection des données personnelles</h3>
          <h3 class="block">Plan du site</h3>
          <h3 class="block">© Kid’sArt FRANCE 2022 Crée par Marion Gillot et Morgane Chamberlin</h3>
          <h3 class="block"><a href="guidestyle">Guide de style </a></h3>
        </div>
      </nav>
    </div>
  </footer>
</template>
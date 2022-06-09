<template>
  <main class="mt-48">
    <h2 class="md:text-1xl m-auto mb-36 flex justify-center font-bold text-black sm:text-3xl lg:text-4xl">MON COMPTE</h2>
    <div class="grid grid-cols-4 justify-items-center gap-x-20">
      <div class="flex flex-col">
        <img class="w-40" src="images/patricia.png" alt="image daniel curtice" />
        <p class="m-auto mt-4 mb-32 h-8 w-24 justify-center bg-blue-200 pl-5 pt-1">Famille</p>
      </div>

      <div class="flex flex-col gap-y-3">
        <p class="text-xl font-bold">Patricia</p>
        <p>Évaluation : Aucune</p>
        <a href="modifiermonprofil"><p class="h-8 w-auto bg-yellow-600 pr-3 pl-3 pt-1">Modifier mon profil</p></a>
      </div>

      <div class="flex flex-col gap-y-4">
        <div class="flex gap-x-6">
          <p>Email:</p>
          <p>patriciadu75@gmail.com</p>
        </div>
        <div class="flex gap-x-6">
          <div class="flex gap-x-2">
            <p>Mes</p>
            <p>réseaux</p>
            <p>sociaux</p>
          </div>
          <a href="https://www.facebook.com/"><img class="h-auto w-10" src="icons/facebook-app.png" alt="icone instagram" /></a>
          <a href="https://www.instagram.com/"><img class="h-auto w-10" src="icons/instagram.png" alt="icone facebook" /></a>
        </div>
      </div>
    </div>

    <div class="mb-12 grid grid-cols-2 gap-x-32">
      <div class="ml-9">
        <h6 class="mb-8 text-2xl font-bold">Biographie</h6>

        <p>Bonjour, moi c'est Patricia, j'ai 47 ans et je suis mère d'une petite fille.</p>
        <p>Je recherche un artiste peintre pour refaire le dessin de ma fille pour son aniversaire</p>

        <p>Veuillez me contacter pour plus d'informations</p>
      </div>
      <div class="">
        <h6 class="text-2xl font-bold">Ma petite famille :</h6>
        <div class="mt-8 w-36">
          <img src="images/famille.jpg" alt="famille de patricia " />
        </div>
      </div>
    </div>
  </main>
</template>
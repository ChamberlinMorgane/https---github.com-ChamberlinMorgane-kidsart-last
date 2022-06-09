<template>
  <main class="mt-48">
    <div class="grid grid-cols-4 justify-items-center gap-x-20">
      <div class="flex flex-col">
        <img class="w-40" src="images/danielcurtice.jpg" alt="image daniel curtice" />
        <p class="m-auto mt-4 mb-32 h-8 w-24 justify-center bg-blue-200 pl-5 pt-1">Artiste</p>
      </div>

      <div class="flex flex-col gap-y-3">
        <p class="text-xl font-bold">Daniel Curtice</p>
        <p>Évaluation : Aucune</p>
        <a href="messagerie"><p class="h-8 w-24 bg-yellow-600 pl-3 pt-1">Contacter</p></a>
      </div>

      <div class="flex flex-col gap-y-4">
        <div class="flex gap-x-6">
          <p>Email:</p>
          <p>Lucie.gorda@gmail.com</p>
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

        <p>Bonjour, moi c'est Daniel, j'ai 25 ans et je suis artiste peintre.</p>
        <p>
          Mes prix dépendent de vos éxigences. Vous pourrez voir un tableau récapitulant mes prix pour certaines exigencent
          <a href="">Voir tableaux</a>
        </p>

        <p>Veuillez me contacter pour plus d'informations</p>
      </div>
      <div class="">
        <h6 class="text-2xl font-bold">Mes oeuvres :</h6>
        <div class="mt-8 flex w-36 gap-x-10">
          <img src="images/image.jpg" alt="oeuvre numéro 1" />
          <img src="images/image-1.jpg" alt="oeuvre numéro 2" />
        </div>
      </div>
    </div>
  </main>
</template>
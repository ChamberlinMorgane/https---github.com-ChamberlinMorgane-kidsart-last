<template>
  <h1 class="mb-11 text-center text-2xl font-bold">CONNEXION</h1>

  <div class="mb-10 flex w-full justify-center">
    <div class="mb-4 flex flex-col rounded bg-white px-8 pt-6 pb-8 shadow-md">
      <div class="mb-4">
        <label class="text-grey-darker mb-2 block text-sm font-bold" for="username"> Adresse mail ou nom d'utilisateur </label>
        <input
          class="bg-jaune text-grey-darker w-full appearance-none rounded border py-2 px-3 shadow"
          id="Écrivez-ici"
          type="text"
          placeholder="Écrivez-ici"
        />
      </div>
      <div class="mb-6">
        <label class="text-grey-darker mb-2 block text-sm font-bold" for="password"> Mot de passe </label>
        <input
          class="bg-jaune border-red text-grey-darker mb-3 w-full appearance-none rounded border py-2 px-3 shadow"
          id="password"
          type="password"
          placeholder="**********"
        />
        <p class="text-red text-xs italic">Veuillez entrer un mot de passe</p>
      </div>

      <a class="text-1xl mb-9 text-center text-blue-400" href="#"> Mot de passe oublié ? </a>
      <div class="flex flex-col items-center justify-center">
        <button type="button" class="bg-jaune mx-4 mr-2 mb-2 rounded-lg border-2 border-black px-9 py-2.5 text-sm font-medium text-black">
          Se connecter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
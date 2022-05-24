<template>
  <h1 class="mb-3 text-center text-2xl font-bold">INSCRIPTION</h1>

  <div class="bg-grey-lighter flex flex-col">
    <div class="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
      <div class="w-full rounded bg-white px-6 py-8 text-black shadow-md">
        <input
          type="text"
          class="bg-jaune border-grey-light mb-4 block w-full rounded border p-3"
          name="Nom d’utilisateur"
          placeholder="Nom d’utilisateur"
        />

        <input type="text" class="bg-jaune border-grey-light mb-4 block w-full rounded border p-3" name="Nom" placeholder="Nom" />

        <input type="text" class="bg-jaune border-grey-light mb-4 block w-full rounded border p-3" name="Prénom" placeholder="Prénom" />

        <input
          type="text"
          class="bg-jaune border-grey-light mb-4 block w-full rounded border p-3"
          name="Adresse mail"
          placeholder="Adresse mail"
        />

        <input
          type="text"
          class="bg-jaune border-grey-light mb-4 block w-full rounded border p-3"
          name="Téléphone"
          placeholder="Téléphone"
        />

        <input
          type="text"
          class="bg-jaune border-grey-light mb-4 block w-full rounded border p-3"
          name="Date de naissace"
          placeholder="Date de naissance"
        />

        <input
          type="password"
          class="bg-jaune border-grey-light mb-4 block w-full rounded border p-3"
          name="Mot de passe"
          placeholder="Mot de passe"
        />

        <input
          type="password"
          class="bg-jaune border-grey-light block w-full rounded border p-3"
          name="Confirmer le mot de passe"
          placeholder="Confirmer le mot de passe"
        />

        <button type="submit" class="bg-green hover:bg-green-dark my-1 w-full rounded py-3 text-center text-white focus:outline-none">
          Create Account
        </button>

        <div class="flex flex-col items-center justify-center">
          <button type="button" class="bg-jaune mx-4 mr-2 mb-2 rounded-lg border-2 border-black px-9 py-2.5 text-sm font-medium text-black">
            Rejoignez-nous
          </button>
        </div>
      </div>

      <div class="text-grey-dark mt-6 mb-10">
        Vous avez déjà un compte ?
        <a class="border-blue text-blue border-b no-underline" href="../login/"> Connectez-vous </a>
      </div>
    </div>
  </div>
</template>


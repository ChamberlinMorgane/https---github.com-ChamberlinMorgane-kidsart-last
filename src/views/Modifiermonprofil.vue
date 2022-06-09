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
</script>

<style scoped>
a {
  color: white;
}
a:hover {
  text-decoration: none;
}
</style>



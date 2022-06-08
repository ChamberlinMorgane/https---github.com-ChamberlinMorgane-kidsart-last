<template>
  <div class="mx-36 pt-20">
    <div class="font-dark text-5xl font-bold">404</div>
    <p class="text-2xl font-light leading-normal md:text-3xl">Désolé, cette page n'existe pas.</p>
    <p class="mb-8">Retournez à la page d'accueil !</p>
    <RouterLink to="/">
      <button
        class="
          focus:shadow-outline-blue
          mb-10
          inline
          rounded-lg
          border border-transparent
          bg-orange-clair
          px-4
          py-2
          text-sm
          font-medium
          leading-5
          text-black
          shadow
          transition-colors
          duration-150
        "
      >
        retour à l'accueil
      </button>

      <form
        action="https://duckduckgo.com/"
        method="GET"
        x-data="{ q:'', }"
        x-on:submit="q = q + ' site:mmimontbeliard.com'"
        class="mb-20 space-x-4"
      >
        <label for="q">Veillez parcourir :</label>
        <input type="text" id="q" name="q" x-model="q" class="bg-gray-200 px-20 py-3" />
        <button
          type="submit"
          class="focus:shadow-outline rounded-10xl mt-24 border-2 border-black py-2 px-20 font-bold text-black shadow focus:outline-none"
        >
          Rechercher
        </button>
      </form>
    </RouterLink>
  </div>
</template>

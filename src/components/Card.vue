<template>
  <div class="flex">
    <img class="rounded-sm" :src="image" alt="artiste" />
    <div class="mt-3 mr-20 grid grid-cols-1 justify-items-center">
      <p>{{ nom }}</p>
      <button type="button" class="m-auto rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white focus:outline-none">
        En savoir plus
      </button>
    </div>
  </div>
</template>

<script>
export default {
  /* Les "props" servent à définir les "attributs" qui seront passés a l'instance du composant pour le personnalisé.
  Chaque "props" a un nom et un type */
  props: {
    nom: String,
    image: String,
  },
  components: {},
};
</script>

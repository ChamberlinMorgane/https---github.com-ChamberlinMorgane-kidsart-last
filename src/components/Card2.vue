<template>
  <div class="mt-10 mb-20 h-56 w-48 border-8 border-formulaire-promo-final bg-formulaire-promo-final">
    <img class="rounded-sm" :src="image" alt="coloriage" />
    <div class="mt-2 flex h-5 w-5 flex-row gap-7">
      <img src="/icons/crayon.png" alt="icones crayon" />
      <p class="text-xs">colorier gratuitement</p>
      <img src="/icons/contour-en-forme-de-coeur.png" alt="icone de coeur" />
    </div>
  </div>
</template>

<script>
export default {
  /* Les "props" servent à définir les "attributs" qui seront passés a l'instance du composant pour le personnalisé.
  Chaque "props" a un nom et un type */
  props: {
    image: String,
  },
  components: {},
};
</script>

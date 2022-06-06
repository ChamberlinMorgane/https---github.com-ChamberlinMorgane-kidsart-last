<template>
  <div class="mt-10 mb-20 h-56 w-48 border-8 border-orange-fonce bg-orange-fonce">
    <img class="rounded-sm" :src="image" alt="coloriage" />>
    <div class="mt-2 flex h-5 w-5 flex-row gap-7">
      <PencilAltIcon />
      <p class="text-xs">colorier gratuitement</p>
      <HeartIcone />
    </div>
    <a href="src/assets/images/images-2.pdf" download rel="noopener noreferrer" target="_blank"
      ><img class="float-right mt-5 h-5 w-5" src="src/assets/icons/telecharger.png" alt="#"
    /></a>
  </div>
</template>

<script>
import { PencilAltIcon, HeartIcon } from "@heroicons/vue/outline";
export default {
  /* Les "props" servent à définir les "attributs" qui seront passés a l'instance du composant pour le personnalisé.
  Chaque "props" a un nom et un type */
  props: {
    image: String,
  },
  components: {
    PencilAltIcon,
    HeartIcon,
  },
};
</script>

<template>
  <div class="border-orange-fonce bg-orange-fonce mt-10 mb-20 h-56 w-48 border-8">
    <img class="rounded-sm" :src="image" alt="coloriage" />>
    <div class="mt-2 flex h-5 w-5 flex-row gap-7">
      <PencilAltIcon />
      <p class="text-xs">colorier gratuitement</p>
      <HeartIcone />
    </div>
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

<template>
  <div class="flex flex-col">
    <img class="w-56 rounded-sm" :src="image" alt="artiste" />
    <div class="m-auto mb-10 mt-3 grid grid-cols-1 justify-items-center">
      <p>{{ nom }}</p>
      <button type="button" class="m-auto rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white focus:outline-none">
        En savoir plus
      </button>
      <a :href="'update/' + id"><PencilAltIcon class="h-auto w-5 rounded-l-sm lg:w-11" /></a>
      <a :href="'delete/' + id"><TrashIcon class="h-auto w-5 rounded-r-sm lg:w-11" /></a>
    </div>
  </div>
</template>

<script>
import { PencilAltIcon, TrashIcon } from "@heroicons/vue/outline";
export default {
  /* Les "props" servent à définir les "attributs" qui seront passés a l'instance du composant pour le personnalisé.
  Chaque "props" a un nom et un type */
  props: {
    nom: String,
    image: String,
    id: String,
  },
  components: {
    PencilAltIcon,
    TrashIcon,
  },
};
</script>

<template>
  <header class="flex bg-gray-100 mb-7">
  <nav class="flex">
  
  <IconLogo class="w-12 h-10 mx-8 my-5" />
   
  <div class="flex mt-7 space-x-8 mx-6 font-roboto">
    <h3 class="block">Acceuil</h3>
    <h3 class="block">À propos</h3>
    <h3 class="block">Contact</h3>
    <h3 class="block">Nos artistes</h3>
    <h3 class="block">Nos coloriages</h3>
    </div>
  </nav>
  </header>

  <RouterView />
</template>

<script>
import IconLogo from "./assets/icons/IconLogo.vue";

export default {
  components: { IconLogo },
};
</script>
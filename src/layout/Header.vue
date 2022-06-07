<template>
  <header class="bg-gray-200 h-24 pb-20">
  <nav class="flex">
  <div>
     <RouterLink to="/"><Logo class="w-12 h-11 mx-7 my-5" /></RouterLink>
  </div>
  
  <div class="flex mt-8 space-x-8 font-light text-black mx-14">
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/apropos">A propos</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/nosartistes">Nos artistes</RouterLink>
    <RouterLink to="/coloriage">Nos Coloriages</RouterLink>
    </div>
  </nav>
  </header>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  components: { Logo },
};
</script>





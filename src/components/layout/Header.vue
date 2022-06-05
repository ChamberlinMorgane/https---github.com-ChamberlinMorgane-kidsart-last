<template>
  <div class="my-auto grid h-28 w-full grid-cols-6 gap-10 bg-gray-200 pt-8 text-2xl text-black">
    <a href="/"><Logo class="mr-28 pr-4" /></a>
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/apropos">A propos</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/nosartistes">Nos artistes</RouterLink>
    <RouterLink to="/coloriage">Nos Coloriage</RouterLink>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  components: { Logo },
};
</script>





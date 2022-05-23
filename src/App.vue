<template>
  <header class="mb-7 flex bg-gray-100">
    <nav class="flex">
      <IconLogo class="mx-8 my-5 h-10 w-12" />

      <div class="mx-6 mt-7 flex space-x-8 font-roboto">
        <a href="AccueilView.vue"><h3 class="block">Acceuil</h3></a>
        <a href="apropos"><h3 class="block">À propos</h3></a>
        <a href="contact"><h3 class="block">Contact</h3></a>
        <a href="nosartistes"><h3 class="block">Nos artistes</h3></a>
        <a href="coloriages"><h3 class="block">Nos coloriages</h3></a>
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
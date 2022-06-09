<template>
  <header class="z-50 flex h-8 w-screen">
    <a href="/"><Logokidsart class="mx-7 my-5 mt-5 h-12 w-auto" /></a>
    <MenuAlt1Icon class="right-5 z-50 ml-auto mt-5 h-8 w-8" @click="MenuOpen = !MenuOpen" v-if="!MenuOpen" />
    <XIcon class="right-5 z-50 ml-auto mt-5 h-8 w-8" @click="MenuOpen = !MenuOpen" v-if="MenuOpen" />
    <nav
      class="
        from-degrade-1
        via-degrade-2
        to-degrade-3
        absolute
        left-0
        top-0
        bottom-0
        right-0
        h-screen
        -translate-x-full
        bg-gradient-to-r
        opacity-0
      "
      :class="MenuOpen && 'translate-x-0 bg-gray-200 opacity-100'"
    >
      <ul class="text-1lg flex h-full flex-col items-center justify-center gap-5 text-left font-bold">
        <li>
          <RouterLink to="/" @click="MenuOpen = !MenuOpen" class="font-acme text-6xl">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="/nosartistes" @click="MenuOpen = !MenuOpen">Nos artistes</RouterLink>
        </li>
        <li>
          <RouterLink to="/noscoloriages" @click="MenuOpen = !MenuOpen">Nos coloriages</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" @click="MenuOpen = !MenuOpen">Contact</RouterLink>
        </li>
        <li>
          <RouterLink to="/apropos" @click="MenuOpen = !MenuOpen">À propos</RouterLink>
        </li>
        <li>
          <RouterLink to="/inscriptions" @click="MenuOpen = !MenuOpen">S'inscrire</RouterLink>
        </li>
        <li>
          <RouterLink to="/connexion" @click="MenuOpen = !MenuOpen">Se connecter</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/outline";
import Logokidsart from "../../public/icons/IconLogo.vue";

export default {
  data() {
    return {
      MenuOpen: false,
    };
  },
  components: { MenuAlt1Icon, XIcon, Logokidsart },
};
</script>
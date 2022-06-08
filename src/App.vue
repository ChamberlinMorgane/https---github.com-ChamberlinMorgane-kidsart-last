

<template>
  <header class="bg-fondsite mb-10 h-3">
    <Header class="hidden lg:flex" />
    <Headermobile class="lg:hidden" />
  </header>

  <RouterView />

  <footer class="h-64 bg-fond1footer text-white">
    <Footer class="hidden lg:block" />
    <Footermobile class="lg:hidden" />
  </footer>
</template>;


<script>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./layout/Footer.vue";
import Footermobile from "./layout/Footermobile.vue";
import Header from "./layout/Header.vue";
import Headermobile from "./layout/Headermobile.vue";

export default {
  components: { Headermobile, Header, Footer, Footermobile },
};
</script>


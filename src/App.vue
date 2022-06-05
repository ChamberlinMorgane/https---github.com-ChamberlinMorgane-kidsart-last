<template>
  <header class="bg-fondsite mb-10 h-3">
    <Header class="hidden lg:flex" />
    <Headermobile class="lg:hidden" />
  </header>

  <RouterView />

  <footer class="bg-fondsite h-64 text-white">
    <Footer class="hidden lg:block" />
    <Footermobile class="lg:hidden" />
  </footer>
</template>;


<script>
import Header from "./components/layout/Header.vue";
import Headermobile from "./components/layout/Headermobile.vue";
import Footer from "./components/layout/Footer.vue";
import Footermobile from "./components/layout/Footermobile.vue";

export default {
  components: { Headermobile, Header, Footer, Footermobile },
};
</script>

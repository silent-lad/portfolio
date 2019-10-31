<template>
  <div class="home">
    <!-- <Navbar /> -->
    <HeroSection />
    <!-- <WhoAmI /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/HeroSection.vue";
import Gist from "@/components/Gist.vue";
import WhoAmI from "@/components/WhoAmI.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "home",
  components: {
    HeroSection,
    WhoAmI,
    Navbar
  }
};
</script>
<style lang="scss">
body {
  background: #232323;
}
</style>

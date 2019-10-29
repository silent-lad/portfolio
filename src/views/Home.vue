<template>
  <div class="home">
    <HeroSection />
    <!-- <Tilt /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/HeroSection.vue";
import Tilt from "@/components/Tilt.vue";
import Gist from "@/components/Gist.vue";
export default {
  name: "home",
  components: {
    HeroSection,
    Tilt
  }
};
</script>
<style lang="scss">
body {
  background: #232323;
}
</style>

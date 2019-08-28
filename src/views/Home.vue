<template>
  <div class="home">
    <HeroSection />
    <Gist />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/HeroSection.vue";
import Gist from "@/components/Gist.vue";
export default {
  name: "home",
  components: {
    HeroSection,
    Gist
  }
};
</script>
<style lang="scss">
.home {
  background: #232323;
}
</style>

<template>
  <div class="home">
    <HeroSection />
    <Navbar />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection/Index.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "home",
  components: {
    HeroSection,
    Navbar
  }
};
</script>
<style lang="scss"></style>

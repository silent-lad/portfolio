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
  },
  mounted() {
    import("aos").then(AOS =>
      AOS.init({
        duration: 500,
        easing: "ease-out-quart",
        once: true
      })
    );
  }
};
</script>
<style lang="scss"></style>

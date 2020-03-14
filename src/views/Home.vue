<template>
  <div class="home">
    <Navbar />
    <HeroSection />
    <div class="gap" style="height:100vh;"></div>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection/Index.vue";
import Navbar from "@/components/Common/Navbar.vue";
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

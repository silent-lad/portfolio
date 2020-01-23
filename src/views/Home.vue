<template>
  <div class="home">
    <HeroSection />
    <Navbar />
    <div class="" style="height:100vh;width:100vw;">
      <div class="reveal-holder" data-aos="reveal-item">
        <div class="reveal-block gradient top" data-aos="reveal-top"></div>
        <h1>Reveal Effects</h1>
      </div>
    </div>
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

<template>
  <div class="home">
    <span id="navComponent"><Navbar /></span>
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
    var heroLength = window.innerHeight;
    console.log(heroLength);

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos <= heroLength) {
        var opacity = currentScrollPos / heroLength;
        document.getElementById("navComponent").style.opacity = `${opacity *
          2}`;
      }
    };

    // import("aos").then(AOS =>
    //   AOS.init({
    //     duration: 500,
    //     easing: "ease-out-quart",
    //     once: true
    //   })
    // );
  }
};
</script>
<style lang="scss"></style>

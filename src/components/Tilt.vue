<template>
  <div
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    class="tilt"
    :style="{
      'background-image':
        'url(' + require('../assets/img/2_' + faceIndex + '.png') + ')'
    }"
  >
    <div class="tiltImageWrapper">
      <img
        id="tiltImage"
        :src="require('../assets/img/1_' + XIndex + '.png')"
        alt="silentlad"
      />
    </div>
  </div>
</template>
<script>
import VanillaTilt from "vanilla-tilt";
export default {
  name: "TiltHero",
  data() {
    return {
      XIndex: 1,
      faceIndex: 2,
      hover: false
    };
  },
  components: {},
  mounted() {
    VanillaTilt.init(document.querySelector(".tilt"), {
      max: 10,
      speed: 900,
      scale: 1.1
      // "full-page-listening": true
    });
    setInterval(() => {
      if (!this.hover) {
        this.XIndex = Math.ceil(Math.random() * 3);
        // this.faceIndex = Math.ceil(Math.random() * 2);
      }
    }, 150);
  }
};
</script>
<style lang="scss">
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.tilt {
  transform-style: preserve-3d;
  transform: perspective(2000px);
  /* width: 100vw; */
  /* height: 100vh; */
  /* background-image: url("../assets/img/1_3.png"); */
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
}
.tiltImageWrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
#tiltImage {
  // z-index: -3;
  transform: translateZ(30px);
}
</style>
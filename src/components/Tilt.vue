<template>
  <div
    class="tilt"
    :style="{
      'background-image':
        'url(' + require('../assets/img/2_' + faceIndex + '.png') + ')'
    }"
  >
    <div class="tiltImageWrapper">
      <img
        @mouseenter="hover = true"
        @mouseleave="hover = false"
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
  watch: {
    // hover(val) {
    //   if (val) {
    //     if (this.XIndex < 3) this.XIndex++;
    //     else this.XIndex = 1;
    //   }
    // }
  },
  mounted() {
    VanillaTilt.init(document.querySelector(".tilt"), {
      max: 10,
      speed: 900,
      scale: 1.15
      // "full-page-listening": true
    });
    setInterval(() => {
      if (this.hover) {
        if (this.XIndex < 3) this.XIndex++;
        else this.XIndex = 1;
      }
    }, 450);
  }
};
</script>
<style lang="scss">
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
  transform: translateZ(25px);
}
</style>
<template>
  <div
    class="tilt"
    :style="{
      'background-image':
        'url(' + require('../../assets/img/2_' + faceIndex + '.png') + ')'
    }"
  >
    <div class="tiltImageWrapper">
      <img
        id="tiltImage"
        :src="require('../../assets/img/1_' + XIndex + '.png')"
        alt="silentlad"
        rel="preload"
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
  watch: {},
  mounted() {
    VanillaTilt.init(document.querySelector(".tilt"), {
      max: 15,
      speed: 400,
      reverse: true,
      scale: 1.05,
      "full-page-listening": true
    });
    setInterval(() => {
      // if (this.hover) {
      // if (this.XIndex < 2) this.XIndex++;
      this.XIndex = 1;
      setTimeout(() => {
        this.Xindex = 2;
      }, 100);
      // }
    }, 550);
  }
};
</script>
<style lang="scss">
.tilt {
  transform-style: preserve-3d;
  transform: perspective(2000px);
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
  transform: translateZ(25px);
}
</style>

<template>
  <div
    class="tilt data-tilt data-tilt-full-page-listening"
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
      faceIndex: 2
    };
  },
  components: {},
  mounted() {
    VanillaTilt.init(document.querySelector(".tilt"), {
      // reverse: true,
      max: 10,
      speed: 900,
      scale: 1.1,
      "full-page-listening": true
    });
    setInterval(() => {
      if (this.XIndex < 4) this.XIndex++;
      else this.XIndex = 1;
      // if (this.faceIndex < 3) this.faceIndex++;
      // else this.faceIndex = 1;
    }, 2500);
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
  transform: translateZ(30px);
}
</style>
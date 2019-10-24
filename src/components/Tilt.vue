<template>
  <div class="tilt">
    <div class="tiltImageWrapper">
      <img id="tiltImage" src="../assets/img/2.png" alt="silentlad" />
    </div>
  </div>
</template>
<script>
import VanillaTilt from "vanilla-tilt";
export default {
  name: "TiltHero",
  components: {},
  mounted() {
    VanillaTilt.init(document.querySelector(".tilt"), {
      reverse: true,
      max: 20,
      speed: 900,
      scale: 1.07
    });
  }
};
</script>
<style>
.tilt {
  transform-style: preserve-3d;
  transform: perspective(2000px);
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/1.png");
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
  z-index: -3;
  transform: translateZ(-30px);
}
</style>
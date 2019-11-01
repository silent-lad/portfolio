<template>
  <div id="heroSection">
    <div class="description">
      <p id="heroText">
        Hi, I am <span class="realName">Divyansh Tripathi</span>
        <br />
        <span class="name">Silentlad</span>
        <!-- <br />
        Welcome to my Site. -->
        <br />
        Find my
        <a target="_blank" href="https://medium.com/@silentlad" class="blogs"
          >&#128220; Blogs</a
        >,
        <a target="_blank" href="https://github.com/silent-lad" class="projects"
          >&#9935; Projects</a
        >
        <br />
        and

        <a href="mailto:hi@silentlad.com" class="contact"
          >&#128752;Ways to reach me</a
        >.
        <!-- <Lottie :options="defaultOptions" :height="400" :width="400" /> -->
      </p>
      <div class="imgWrapper">
        <img id="heroImage" src="../assets/img/heroLogo.png" alt="silentlad" />
        <Tilt class="tiltEffect" />
      </div>
    </div>
  </div>
</template>

<script>
import VanillaTilt from "vanilla-tilt";
// import LottieAnimation from "lottie-vuejs";
import * as animationData from "../assets/scrolldown.json";
import Tilt from "./Tilt";
import Lottie from "vue-lottie";

export default {
  name: "HeroSection",
  data() {
    return {
      defaultOptions: { animationData: animationData }
    };
  },
  components: {
    Tilt,
    Lottie
  },
  mounted() {
    // VanillaTilt.init(document.querySelector("#heroImage"), {
    //   max: 10,
    //   speed: 900,
    //   scale: 1.1
    // });
  }
};
</script>

<style lang="scss">
#heroSection {
  // height: 100%;
  width: 100vw;
  .description {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5%;
    @media screen and (max-width: 1000px) {
      padding: 0;
    }
    .imgWrapper {
      height: 90vh;
      img {
        height: 100%;
      }
      .tiltEffect {
        // margin-left: vw;
        padding: 0 5vw;
        display: block;
        @media screen and (max-width: 1000px) {
          display: none;
        }
      }
      #heroImage {
        display: none;
        @media screen and (max-width: 1000px) {
          display: block;
        }
      }

      @media screen and (max-width: 1000px) {
        position: absolute;
        height: 10vh;
        top: 20px;

        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
    #heroText {
      // margin-left: 20vh;
      // text-align: right;
      @media screen and (max-width: 1000px) {
        padding: 5%;
        font-size: 45px;
        margin-top: 15vh;

        .blogs {
          color: rgb(177, 38, 3);
        }
        .projects {
          color: rgb(52, 100, 255);
        }
        .contact {
          color: rgb(0, 179, 211);
        }
      }
      .realName {
        text-decoration: line-through;
      }
      .name {
        // filter: drop-shadow(0 0 10px rgba(4, 117, 229, 0.6));
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.418));
        font-size: 120px;
        // color: rgb(4, 117, 229);
        color: white;
        font-style: normal;
        font-weight: 700;
        // filter: drop-shadow(7px 7px 5px rgba(255, 255, 255, 0.733));
      }
      color: #efefef;
      font-size: 60px;
      font-family: "Josefin Sans", sans-serif;
      font-style: italic;
      font-weight: 200;
      line-height: 1.3;
      a {
        text-decoration: none;
        color: white;
        transition: all 0.3s;
      }
      .blogs {
        color: rgb(177, 38, 3);
      }
      .projects {
        color: rgb(52, 100, 255);
      }
      .contact {
        color: rgb(0, 179, 211);
      }
      .blogs:hover {
        background: rgb(17, 17, 17);
      }
      .projects:hover {
        background: rgb(17, 17, 17);
      }
      .contact:hover {
        background: rgb(17, 17, 17);
      }
    }
  }
}
</style>

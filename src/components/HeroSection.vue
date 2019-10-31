<template>
  <div id="heroSection">
    <!-- <div class="navbar"></div> -->
    <div class="description">
      <p id="heroText">
        Hi, I am
        <!-- <span class="realName">Divyansh Tripathi</span> -->
        <br />
        <span class="name">Silentlad</span>
      </p>
      <!-- <p id="heroText">
        Hi, I am <span class="name">Silentlad</span>
        <br />
        Welcome to my Site.
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
      </p> -->
      <div class="imgWrapper">
        <img id="heroImage" src="../assets/img/heroLogo.png" alt="silentlad" />
        <Tilt class="tiltEffect" />
      </div>
    </div>
  </div>
</template>

<script>
import VanillaTilt from "vanilla-tilt";
import Tilt from "./Tilt";
export default {
  name: "HeroSection",
  components: {
    Tilt
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
    justify-content: space-around;
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
      text-align: left;
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
        font-size: 125px;
        font-weight: 400;
        font-style: normal;
      }
      color: #efefef;
      font-size: 105px;
      font-family: "Josefin Sans", sans-serif;
      font-style: italic;
      font-weight: 100;
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

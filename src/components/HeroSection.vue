<template>
  <div id="heroSection">
    <div class="navbar"></div>
    <div class="description">
      <p id="whoami">
        Hi, I am <span class="name">Silentlad</span>
        <br />
        Welcome to my Portfolio.
        <br />
        Find my
        <a target="_blank" href="https://medium.com/@silentlad" class="blogs"
          >&#128220; Blogs</a
        >,
        <a target="_blank" href="https://github.com/silent-lad" class="projects"
          >&#9935; Projects</a
        >
        and
        <br />
        <a href="mailto:hi@silentlad.com" class="contact"
          >&#128752;Ways to reach me</a
        >.
      </p>
      <div class="imgWrapper">
        <img id="heroImage" src="../assets/img/heroLogo.png" alt="silentlad" />
      </div>
    </div>
  </div>
</template>

<script>
import VanillaTilt from "vanilla-tilt";
export default {
  name: "HeroSection",
  components: {},
  mounted() {
    VanillaTilt.init(document.querySelector("#heroImage"), {
      max: 10,
      speed: 900,
      scale: 1.05
    });
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans:100i");
#heroSection {
  background: #232323;
  height: 100vh;
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
      height: 80vh;
      img {
        height: 100%;
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
    #whoami {
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
      .name {
        filter: drop-shadow(7px 7px 5px rgba(255, 255, 255, 0.733));
      }
      color: #efefef;
      font-size: 60px;
      font-family: "Josefin Sans", sans-serif;
      line-height: 1.3;
      a {
        text-decoration: none;
        color: white;
        transition: all 0.3s;
      }
      .blogs:hover {
        color: rgb(177, 38, 3);
      }
      .projects:hover {
        color: rgb(52, 100, 255);
      }
      .contact:hover {
        color: rgb(0, 179, 211);
      }
    }
  }
}
</style>

<template>
  <div id="heroSection">
    <div class="navbar"></div>
    <div class="description">
      <p id="whoami">
        Hi, I am Silentlad
        <br />
        Welcome to my Portfolio.
        <br />
        Find my
        <a href="https://medium.com/@silentlad" class="blogs">&#128220; Blogs</a
        >,
        <a href="https://github.com/silent-lad" class="projects"
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
export default {
  name: "HeroSection",
  components: {}
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
    #whoami {
      //   padding: 10px;
      //   border: 0px solid red;
      //   border-radius: 10px;
      //   background: #ffffff21;
      //   box-shadow: 10px 10px 50px #ffffff0c;
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
    .imgWrapper {
      height: 80vh;
      img {
        height: 100%;
      }
    }
  }
}
</style>

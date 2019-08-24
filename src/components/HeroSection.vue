<template>
  <div id="heroSection">
    <div class="navbar"></div>
    <div class="description">
      <p id="whoami">
        Hi, I am Silentlad
        <br />
        Welcome to my Portfolio.
        <br />
        Find my &#128220; Blogs, &#9935; Projects and
        <br />
        &#128752;Ways to reach me.
      </p>
      <img id="heroImage" src="../assets/img/heroLogo.png" alt="silentlad" />
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
      color: #efefef;
      font-size: 60px;
      font-family: "Josefin Sans", sans-serif;
      line-height: 1.3;
    }
    #heroImage {
      display: block;
      width: 28vw;
    }
  }
}
</style>

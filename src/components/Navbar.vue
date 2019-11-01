<template>
  <div class="navbar">
    <router-link
      :class="{ active: activePageId === '/' }"
      :to="{ path: '/' }"
      class="links"
      >Home</router-link
    >
    <router-link
      :class="{ active: activePageId === '/blogs' }"
      :to="{ path: '/blogs' }"
      class="links"
      >Blogs</router-link
    >
    <router-link
      :class="{ active: activePageId === '/portfolio' }"
      :to="{ path: '/portfolio' }"
      class="links"
      >Portfolio</router-link
    >
  </div>
</template>
<script>
export default {
  computed: {
    activePageId() {
      return this.$route.path;
    }
  }
};
</script>
<style lang="scss">
.navbar {
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: "Josefin Sans", sans-serif;
  background: #111111;
  box-shadow: 0px 10px 10px #111111;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  // z-index: 1;

  .links {
    margin: 7px;
    font-size: 22px;
    text-decoration: none;
    color: white;
    padding: 30px 20px;
    &:first-of-type {
      margin-left: 5%;
    }
    &.active {
      color: rgb(255, 255, 255);
      text-decoration: line-through;
      font-style: italic;
      &:hover {
        transform: scale(1.05);
        color: rgb(255, 255, 255);
        font-style: italic;
      }
    }
  }
  .links:hover {
    transform: scale(1.05);
    color: rgb(0, 88, 219);
    // text-decoration: line-through;
    font-style: italic;
  }
}
</style>
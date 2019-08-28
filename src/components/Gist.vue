<template>
  <div class="gist">
    <div class="gist-card-red"></div>
    <!-- <div class="gist-card-blue"></div> -->
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.gist {
  padding: 3%;

  .gist-card-red {
    height: 300px;
    border-radius: 10px;
    width: 400px;
    box-shadow: 5px 5px 30px -10px #bd180678;
    background: linear-gradient(#ed213a, #93291e);
    &:hover {
      box-shadow: 15px 15px 30px -10px #bd1806ab;
    }
    transition: all 0.3s linear;
  }
  .gist-card-blue {
    height: 300px;
    border-radius: 10px;
    width: 400px;
    box-shadow: 10px 10px 50px #021b79;
    background: linear-gradient(#0575e6, #0228af);
  }
}
</style>
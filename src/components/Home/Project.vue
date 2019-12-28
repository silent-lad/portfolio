<template>
  <div class="project">
    <h3>{{ project.name }}</h3>
    <img
      :src="require('@/assets/images/projectImages/' + project.imageURL)"
      alt=""
      class="projectImage"
    />
    <p>{{ project.description | trunc }}</p>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["project"],
  filters: {
    trunc(para) {
      var truncatedPara = para.splice(50);
      return truncatedPara + "... ";
    }
  }
};
</script>

<style>
</style>
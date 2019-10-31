import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Blogs from "./views/Blogs.vue";
import Portfolio from "./views/Portfolio.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/blogs",
      name: "blogs",
      component: Blogs
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    }
  ]
});

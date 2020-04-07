import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    component: Home
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/page1",
    name: "Page1",
    // route level code-splitting
    // this generates a separate chunk (page1.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "page1" */ "../views/Page1.vue")
  },
  {
    path: "/page2",
    name: "Page2",
    component: () =>
      import(/* webpackChunkName: "page2" */ "../views/Page2.vue")
  },
  {
    path: "/page3",
    name: "Page3",
    component: () =>
      import(/* webpackChunkName: "page3" */ "../views/Page3.vue")
  },
  {
    path: "/page4",
    name: "Page4",
    component: () =>
      import(/* webpackChunkName: "page4" */ "../views/Page4.vue")
  },
  {
    path: "/page5",
    name: "Page5",
    component: () =>
      import(/* webpackChunkName: "page5" */ "../views/Page5.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

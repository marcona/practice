import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    alias: "/carroussel",
    name: "carroussel",
    component: () => import("../components/CarrousselSample.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../components/CalendarSample.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/competition/:id/teams",
    name: "competition-teams",
    component: () => import("../views/CompetitionTeams.vue"),
  },
  {
    path: "/competition/:id/calendar",
    name: "competition-calendar",
    component: () => import("../views/CompetitionCalendar.vue"),
  },
  {
    path: "/team/:id/calendar",
    name: "team-calendar",
    component: () => import("../views/TeamCalendar.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cardstoomany",
      name: "cardstoomany",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "releasenotes" */ "./pages/CardsTooMany.vue")
    },
    {
      path: "/readabilitylinewidth",
      name: "readabilitylinewidth",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "releasenotes" */ "./pages/ReadabilityLineWidth.vue")
    },
    {
      path: "/gestaltproximity",
      name: "gestaltproximity",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "releasenotes" */ "./pages/GestaltProximity.vue")
    },
    {
      path: "/heuristic",
      name: "heuristic",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "releasenotes" */ "./pages/Heuristic.vue")
    },
    {
      path: "/releasenotes",
      name: "releasenotes",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "releasenotes" */ "./pages/ReleaseNotes.vue")
    },
    {
      path: "/colors",
      name: "colors",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "colors" */ "./pages/Colors.vue")
    }
  ]
});

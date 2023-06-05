import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const history = true
  ? //   process.env.VITE_ROUTER_MODE === 'hash'
    createWebHashHistory()
  : createWebHistory();

export default createRouter({
  history,
  routes: [
    {
      path: "/:pathMatch(.*)",
      name: "404",
      component: () => import("../pages/404.vue"),
    },
    {
      path: '/',
      name: 'Play',
      component: () => import("../pages/index.vue"),
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import("../pages/_test.vue"),
    }
  ],
});
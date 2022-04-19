import { createRouter,createWebHashHistory  } from "vue-router";
// createWebHashHistory, RouteRecordRaw
const routes = [
    {
      path: "/setUp",
      component: () => import("@/views/set-up.vue"),
    },

    // {
    //   path: "/tsx",
    //   component: () => import("../views/todo-define-tsx.vue"),
    // },
    // {
    //   path: "/tmpl",
    //   component: () => import("@/views/todo-script-tmpl.vue"),
    // },
    // {
    //   path: "/script-tsx",
    //   component: () => import("@/views/todo-script-tsx.vue"),
    // },
  ];
  
  export default createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
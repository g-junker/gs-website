import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import VueMeta from "vue-meta";

Vue.use(VueMeta);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/quem-somos",
    name: "WhoWeAre",
    component: () => import("@/views/WhoWeAre.vue")
  },
  {
    path: "/empreendimentos",
    name: "OurProjects",
    component: () => import("@/views/OurProjects.vue")
  },
  {
    path: "/empreendimentos/parque-da-lagoa",
    name: "ParqueDaLagoa",
    component: () => import("@/views/ParqueDaLagoa.vue")
  },
  {
    path: "/empreendimentos/jardim-europa",
    name: "JardimEuropa",
    component: () => import("@/views/JardimEuropa.vue")
  },
  {
    path: "/fale-conosco",
    name: "ContactUs",
    component: () => import("@/views/ContactUs.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("@/views/Blog.vue")
  },
  {
    path: "/blog/:id",
    name: "BlogPost",
    component: () => import("@/views/BlogPost.vue")
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () => import("@/views/PageNotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes,

  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;

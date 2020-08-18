import AOS from "aos";
import "aos/dist/aos.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  created() {
    AOS.init();
  },
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount("#app");

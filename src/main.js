import AOS from "aos";
import "aos/dist/aos.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

Vue.use(CoolLightBox);

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;

new Vue({
  router,
  render: h => h(App),
  created() {
    AOS.init();
  },
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount("#app");

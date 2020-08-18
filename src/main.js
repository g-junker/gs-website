import AOS from "aos";
import "aos/dist/aos.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSilentbox from "vue-silentbox";
import Axios from "axios";

Vue.use(VueSilentbox);

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

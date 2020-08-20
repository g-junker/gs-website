import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App.vue";
import Axios from "axios";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import router from "./router";
import Vue from "vue";
import Vuelidate from "vuelidate";

Vue.use(CoolLightBox);
Vue.use(require("vue-moment"));
Vue.use(Vuelidate);

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

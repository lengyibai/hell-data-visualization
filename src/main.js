import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import "@/style/clear.css";
import "@/utils/flexible.js";
import "@/style/css-variable.css";

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");

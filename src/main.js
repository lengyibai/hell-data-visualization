import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import "@/style/clear.css";
import "@/utils/flexible.js";
import "@/style/css-variable.css";
import "@/components/index.js";

import * as echarts from "echarts";

Vue.prototype.$echarts = echarts;
Vue.prototype.$width = 1920;
Vue.prototype.$height = 1080;

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");

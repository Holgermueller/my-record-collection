import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
//import firebase from "firebase/app";
import "./firebase/firebaseInit";
import { store } from "./store";
import AlertCmp from "./components/shared/alert.vue";

Vue.config.productionTip = false;

Vue.component("app-alert", AlertCmp);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

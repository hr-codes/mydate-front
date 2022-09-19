import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import axios from "axios";

const axiosSystem = axios.create({
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
});

const app = createApp(App);

app.provide("$http", axiosSystem);

app.use(createPinia());
app.use(router);

app.mount("#app");

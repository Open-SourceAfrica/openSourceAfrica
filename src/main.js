import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// views

import Landing from './views/Landing.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";

// mouting point for the whole app

import App from "@/App.vue";

import AOS from 'aos';
import 'aos/dist/aos.css';

// routes

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
   {
    path: "/landing",
    component: Landing,
  },
  { path: "/:pathMatch(.*)*", redirect: "/landing" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(AOS.init()).mount("#app");

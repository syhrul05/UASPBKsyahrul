// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Weather from "../views/Weather.vue";

const routes = [
  {
    path: "/",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/assignment/1",
    name: "Assignment1",
    beforeEnter(to, from, next) {
      window.open("https://syahrul-project-cv.netlify.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/2",
    name: "Assignment2",
    beforeEnter(to, from, next) {
      window.open("https://syahrulllle.netlify.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/3",
    name: "Assignment3",
    beforeEnter(to, from, next) {
      window.open("https://syhrulprakpbk.netlify.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/4",
    name: "Assignment4",
    beforeEnter(to, from, next) {
      window.open("https://syahrultugas4pbk.netlify.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/5",
    name: "Assignment5",
    beforeEnter(to, from, next) {
      window.open("https://syahrulpbk5tugas.netlify.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/6",
    name: "Assignment6",
    beforeEnter(to, from, next) {
      window.open("https://syahrulprak6pbk.netlify.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/7",
    name: "Assignment7",
    beforeEnter(to, from, next) {
      window.open("https://syahrultugas7pbk.netlify.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

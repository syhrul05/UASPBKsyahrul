import { createRouter, createWebHistory } from 'vue-router';
import konten from '../components/Container.vue'; // Example import

const routes = [
  { path: '/konten', component: konten } // Example route
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

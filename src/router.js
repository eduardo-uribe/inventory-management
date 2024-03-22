import { createMemoryHistory, createRouter } from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Dashboard from './components/Dashboard.vue';
import Contact from './components/Contact.vue';
import Pricing from './components/Pricing.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/pricing', component: Pricing },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

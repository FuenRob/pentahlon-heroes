import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ListSuperhero from '../views/ListSuperhero.vue';
import CreateSuperhero from '../views/CreateSuperhero.vue';
import EditSuperhero from '../views/EditSuperhero.vue';
import Pentathlon from '../views/Pentathlon.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'pentathlon',
    component: Pentathlon
  },
  {
    path: '/list',
    name: 'ListSuperhero',
    component: ListSuperhero
  },
  {
    path: '/create',
    name: 'CreateSuperhero',
    component: CreateSuperhero
  },
  {
    path: '/edit/:id',
    name: 'EditSuperhero',
    component: EditSuperhero
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

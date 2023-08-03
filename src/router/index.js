import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilterById from '../views/FilterById.vue'
import FilterByHair from '../views/FilterByHair.vue'
import FilterByGender from '../views/FilterByGender.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/filterById',
    name: 'filterById',
    component: FilterById
  },
  {
    path: '/filterByHair',
    name: 'filterByHair',
    component: FilterByHair
  },
  {
    path: '/filterByGender',
    name: 'filterByGender',
    component: FilterByGender
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

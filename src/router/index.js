import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilterById from '../views/FilterById.vue'
import FilterByHair from '../views/FilterByHair.vue'
import FilterByGender from '../views/FilterByGender.vue'
import LoginView from '../views/LoginView.vue'
import SingupView from '../views/SingnupView.vue'
import AllView from '../views/AllView.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SingupView
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView, 
    children: [
      {
        path: 'allView',
        component: AllView
      },
      {
        path: 'filterById',
        component: FilterById
      },
      {
        path: 'filterByHair',
        component: FilterByHair
      },
      {
        path: 'filterByGender',
        component: FilterByGender
      }
    ]
  }
];


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

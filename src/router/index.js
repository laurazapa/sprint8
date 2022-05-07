import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/starships',
    name: 'starships',
    beforeEnter: (to, from, next) => {
      console.log(store.getters.getLoggedin);
      if (store.getters.getLoggedin){
        next();
      } 
      else next({ name: 'login' });
    },
    component: function () {
      return import(/* webpackChunkName: "starships" */ '../views/StarshipsView.vue')
    }
  },
  {
    path: '/ship/:id',
    name: 'ship',
    beforeEnter: (to, from, next) => {
      if (store.getters.getLoggedin){
        next();
      } 
      else next({ name: 'login' });
    },
    component: function () {
      return import(/* webpackChunkName: "ship" */ '../views/ShipView.vue')
    }
  },
  ,
  {
    path: '/characters',
    name: 'characters',
    beforeEnter: (to, from, next) => {
      console.log(store.getters.getLoggedin);
      if (store.getters.getLoggedin){
        next();
      } 
      else next({ name: 'login' });
    },
    component: function () {
      return import(/* webpackChunkName: "characters" */ '../views/CharactersView.vue')
    }
  },
  {
    path: '/character/:id',
    name: 'character',
    beforeEnter: (to, from, next) => {
      if (store.getters.getLoggedin){
        next();
      } 
      else next({ name: 'login' });
    },
    component: function () {
      return import(/* webpackChunkName: "character" */ '../views/CharacterView.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

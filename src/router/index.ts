import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'
import Register from '../views/register/index.vue'
import Article from '../views/article/index.vue'
import AddArticle from '../views/addArticle/index.vue'
import PrivacyPolicy from '../views/privacy-policy/index.vue'

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/all',
      children: []
    },
    {
      path: '/:type',
      name: 'home all',
      component: Home
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/article/add',
      name: 'add article',
      component: AddArticle
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    }
  ]
})

export default router

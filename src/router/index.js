import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorComponent from '../components/AuthorComponent.vue'
import FormComponent from '../components/FormComponent.vue'
import PostInfoComponent from '../components/PostInfoComponent.vue'
//import PostsComponent from '../components/PostsComponent.vue'
//import LandingPage from '../components/LandingPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/author',
    name: 'author',
    component: AuthorComponent,
  },
  {
    path: '/post',
    name: 'post',
    component: PostInfoComponent,
  },
  {
    path: '/postsForm',
    name: 'form',
    component: FormComponent,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

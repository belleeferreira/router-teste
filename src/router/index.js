import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PrincipalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    }
  ],
})

  // router.beforeEach(async (to, from, next) => {
  //   const token = localStorage.getItem('access_token')
  //   if (!token && to.name !== 'login') {
  //     // redirect the user to the login page
  //     next('/login')
  //   } else {
  //     next()
  //   }
  // })


export default router

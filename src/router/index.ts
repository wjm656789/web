import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import test1 from '../views/test1.vue'
import test2 from '../views/test2.vue'
import test3 from '../views/test3.vue'
import test4 from '../views/test4.vue'
import test5 from '../views/test5.vue'
import test6 from '../views/test6.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'test5',
    component: test5
  },
  {
    path: '/about/:id',
    name: 'About',
    // redirect: '/',
    // alias: '/wei',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log('xxxxx')
//   next()
// })

export default router

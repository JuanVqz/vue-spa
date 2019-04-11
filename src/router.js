import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Login from './views/auth/Login'
import DashboardIndex from './views/dashboard/Index'
import HomeIndex from './views/dashboard/children/homes/Index'
import CategoriesIndex from './views/dashboard/children/categories/Index'
import CategoriesNew from './views/dashboard/children/categories/New'
import CategoriesShow from './views/dashboard/children/categories/Show'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', name: 'login_path', component: Login, meta: { requiresAuth: false } },
    {
      path: '/', component: DashboardIndex, meta: { requiresAuth: true },
      children: [
        { path: '/', name: 'home_path', component: HomeIndex },
        { path: '/categories', name: 'categories_path', component: CategoriesIndex },
        { path: '/categories/new', name: 'new_category_path', component: CategoriesNew },
        { path: '/categories/:id', name: 'category_path', component: CategoriesShow }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.token) { next() }
    else { next({ path: '/login' }) }
  } else {
    if (store.state.token) { next({ path: '/' }) }
    else { next() }
  }
})

export default router

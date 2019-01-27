import Vue from 'vue'
import Router from 'vue-router'

import DashboardIndex from './views/dashboard/Index'
import HomeIndex from './views/dashboard/children/homes/Index'
import CategoriesIndex from './views/dashboard/children/categories/Index'
import CategoriesShow from './views/dashboard/children/categories/Show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', component: DashboardIndex,
      children: [
        { path: '/', name: 'home_path', component: HomeIndex },
        { path: '/categories', name: 'categories_path', component: CategoriesIndex },
        { path: '/categories/:id', name: 'category_path', component: CategoriesShow }
      ]
    }
  ]
})

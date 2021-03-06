import Vue from 'vue'
import Router from 'vue-router'
import RegisterForm from '@/components/RegisterForm'
import Login from '@/components/Login'
import about from '@/components/about'
import product from '@/components/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/RegisterForm',
      name: 'RegisterForm',
      component: RegisterForm
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/product',
      name: 'product',
      component: product
    }

  ]
})

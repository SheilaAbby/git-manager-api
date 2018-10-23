import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Login'
import CreateRepo from '@/components/CreateRepo'
import EditRepo from '@/components/EditRepo'
import ViewThisRepo from '@/components/ViewThisRepo'
import CreateBranch from '@/components/CreateBranch'
import ViewBranch from '@/components/ViewBranch'
import Repositories from '@/components/Repositories'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/create-repo',
      name: 'CreateRepo',
      component: CreateRepo
    },
    {
      path: '/edit-repo',
      name: 'EditRepo',
      component: EditRepo
    },
    {
      path: '/view-repo',
      name: 'ViewThisRepo',
      component: ViewThisRepo
    },
    {
      path: '/create-branch',
      name: 'CreateBranch',
      component: CreateBranch
    },
    {
      path: '/view-branch',
      name: 'ViewBranch',
      component: ViewBranch
    },
    {
      path: '/repos',
      name: 'Repositories',
      component: Repositories
    },

  ]
})

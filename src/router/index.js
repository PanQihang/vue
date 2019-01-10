import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demoLogin from '@/components/demoLogin'
import index from '@/components/index'
import menuhead from '@/components/menuhead'
import guahao from '@/components/guahao'
import message from '@/components/message'
import search from '@/components/search'
import update from '@/components/update'
import firstpage from '@/components/firstpage'
import demo from '@/components/demo'
import doctor from '@/components/doctor'
import updatedoctor from '@/components/updatedoctor'
import insertDoctor from '@/components/insertDoctor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,
    {
      path: '/',
      name: 'demoLogin',
      component: demoLogin
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/menuhead',
      name: 'menuhead',
      component: menuhead
    },
    {
      path: '/guahao',
      name: 'guahao',
      component: guahao
    }
    ,
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/update',
      name: 'update',
      component: update
    },
    {
      path: '/firstpage',
      name: 'firstpage',
      component: firstpage
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: doctor
    },
    {
      path: '/updatedoctor',
      name: 'updatedoctor',
      component: updatedoctor
    },
    {
      path: '/insertDoctor',
      name: 'insertDoctor',
      component: insertDoctor
    }
  ]
})

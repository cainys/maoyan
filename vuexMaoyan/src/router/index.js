import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['@/views/home/Index'], resolve)
const City = resolve => require(['@/views/city/City'], resolve)
const Film = resolve => require(['@/views/film/Film'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/city',
      name: 'city',
      component: City
    }, {
      path: '/film',
      name: 'film',
      component: Film
    }
  ]
})

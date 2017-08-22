import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['@/views/home/Index'], resolve)
const City = resolve => require(['@/views/city/City'], resolve)
const FilmDetail = resolve => require(['@/views/film/FilmDetail'], resolve)
const FilmList = resolve => require(['@/views/film/FilmList'], resolve)
const NowPlaying = resolve => require(['@/views/film/NowPlaying'], resolve)
const ComingSoon = resolve => require(['@/views/film/ComingSoon'], resolve)

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
      path: '/filmDetail/:id',
      name: 'filmDetail',
      component: FilmDetail
    }, {
      path: '/filmList',
      name: 'filmList',
      redirect: '/FilmList/nowPlaying',
      component: FilmList,
      children: [
        {
          path: 'nowPlaying',
          name: 'nowPlaying',
          component: NowPlaying
        }, {
          path: 'coming-soon',
          component: ComingSoon
        }
      ]
    }
  ]
})

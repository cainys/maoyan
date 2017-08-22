import fetch from '@/utils/fetch'

export function getSlider () {
  // http://m.maizuo.com/v4/api/billboard/home?__t=1503035600664
  return fetch({
    url: '/billboard/home?',
    method: 'get'
  })
}

export function getNowFilm (page, count) {
  // http://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
  // http://m.maizuo.com/v4/api/film/now-playing?__t=1503286872815&page=1&count=5
  return fetch({
    url: '/film/now-playing?page=' + page + '&count=' + count,
    method: 'get'
  })
}

export function getSoonFilm (page, count) {
  // http://m.maizuo.com/v4/api/film/coming-soon?page=2&count=7
  return fetch({
    url: 'film/coming-soon?page=' + page + '&count=' + count,
    method: 'get'
  })
}

export function getFilmDetail (id) {
  // http://m.maizuo.com/v4/api/film/3591?__t=1503295950836
  return fetch({
    url: '/film/' + id,
    method: 'get'
  })
}

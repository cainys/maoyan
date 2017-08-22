import fetch from '@/utils/fetch'

export function getSlider () {
  // http://m.maizuo.com/v4/api/billboard/home?__t=1503035600664
  return fetch({
    url: '/billboard/home?__t=1503035600664',
    method: 'get'
  })
}

export function getNowFilm () {
  // http://m.maizuo.com/v4/api/film/now-playing?__t=1503286872815&page=1&count=5
  return fetch({
    url: '/film/now-playing?__t=1503286872815&page=1&count=5',
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

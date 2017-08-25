import fetch from '@/utils/fetch'

export function getCity () {
  return fetch({
    url: '/city?__t=1502947486521',
    method: 'get'
  })
}

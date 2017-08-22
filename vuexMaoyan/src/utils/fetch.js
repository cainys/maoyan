import axios from 'axios'

const service = axios.create({
  // https://bird.ioliu.cn/v1?url=http://m.maizuo.com/v4/api/billboard/home
  baseURL: 'https://bird.ioliu.cn/v1?url=http://m.maizuo.com/v4/api',
  timeout: 5000
})

export default service

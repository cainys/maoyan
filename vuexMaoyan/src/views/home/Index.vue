<template>
    <section class="content">
        <div class="slick-slider">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="item in items" :key="item.url">
                    <a v-bind:href="item.url">
                      <!--<img :src="item.imageUrl || 'http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png'" style="width: 100%; transition: all 1.2s ease;" />-->
                      <image-placeholder :src='item.imageUrl' placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"></image-placeholder>
                    </a>
                </swiper-slide>
                <!--<div class="swiper-pagination" slot="pagination"></div>  -->
            </swiper>
        </div>
        <div>
          <div class="movie">
            <ul class="list-unstyled">
              <li v-for="movie in movies" :key="movie.id">
                <router-link :to="{name: 'filmDetail', params: {id: movie.id}}">
                  <movie-item :item="movie" />
                </router-link>
              </li>
            </ul>
          </div>
          <div class="more-buttton">
            更多热映电影
          </div>
        </div>
        <div>
          <div class="dividing-line">
            <div class="upcoming">即将上映</div>
          </div>
          <div class="movie">
            <ul class="list-unstyled">
              <li v-for="movie in comingSoon" :key="movie.id">
                <router-link :to="{name: 'filmDetail', params: {id: movie.id}}">
                  <movie-item :item="movie" />
                </router-link>
              </li>
            </ul>
          </div>
          <div class="more-buttton">
            更多即将上映电影
          </div>
        </div>
    </section>
</template>
<script>
require('swiper/dist/css/swiper.css')
// http://m.maizuo.com/v4/api/billboard/home?__t=1503035600664
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import MovieItem from '@/components/MovieItem'
import {getSlider, getNowFilm, getSoonFilm} from '@/api/index'
// {"id":665,"name":"罐头女友","url":"http://cps.maizuo.com/changeUrl.htm?channelId=372&urlId=1977",
// "imageUrl":"https://pic.maizuo.com/h5PicUpload/af62452085bb3a5ff275feb89c33e134.jpg","weight":9}
export default {
  name: 'index',
  components: {
    swiper, swiperSlide, ImagePlaceholder, MovieItem
  },
  data () {
    return {
      items: [],
      movies: [],
      comingSoon: [],
      swiperOption: {
        autoplay: 1500,
        loop: true,
        setWrapperSize: true,
        // pagination: '.swiper-pagination',
        autoHeight: true
        // paginationClickable: true
      }
    }
  },
   // 定义这个sweiper对象
  // computed: {
  //   swiper () {
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
  mounted () {
    this.getImgData().then(res => { // http://m.maizuo.com/v4/api/billboard/home?__t=1503035600664
      console.log(res.data.data.billboards)
      this.items = res.data.data.billboards
    })
    getNowFilm(1, 5).then((res) => {
      console.log(res)
      this.movies = res.data.data.films
    })
    getSoonFilm(1, 5).then((res) => {
      this.comingSoon = res.data.data.films
    })
  },
  methods: {
    getImgData () {
      return new Promise((resolve, reject) => {
        getSlider().then((res) => {
          if (res.data.msg === 'ok') {
            resolve(res)
          } else {
            resolve(this.getImgData())
          }
        })
      })
    }
  }

}

</script>
<style lang="less">
/*.swiper-wrapper{
  height: 202px !important;
}*/
.content{
  .movie{
    ul{
      padding-top: 18px;
      li{
        margin: 0 17px 17px 17px;
        background-color: #f9f9f9;
        box-shadow: 0.5px 0.5px 1px #a8a8a8;
      }
    }
  }
  .more-buttton{
    width: 160px;
    height: 30px;
    border: 1px solid #aaa;
    margin: 10px auto 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    color: #616161;
    cursor: pointer;
    font-size: 12px;
  }
}
.dividing-line{
  margin: 30px 0;
  position: relative;
  border-bottom: 1px solid #a8a8a8;
}
.upcoming{
  width: 65px;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  margin: 0 auto;
  margin-bottom: -10px;
  text-align: center;
  background-color: #a7a7a7;
  color:#eee;
  border-radius: 5px;
}
</style>

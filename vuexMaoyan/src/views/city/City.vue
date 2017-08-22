<template>
    <section class="content city-view">
        <CityItem v-for="item in items" :key="item.className" :className="item.className" :titleText="item.titleText" :cities="item.cities" />
        <div class="index-city">
            <CityItem v-for="item in indexCity" :key="item.className" :className="item.className" :titleText="item.titleText" :cities="item.cities" />
        </div>
    </section>
</template>
<script>
import {mapState} from 'vuex'
import CityItem from '@/components/CityItem'
// import axios from 'axios'
import { getCity } from '@/api/city'
export default{
  name: 'city',
  data () {
    return {
      citys: ['杭州'],
      items: [
        {className: 'gprs-city', titleText: 'GPS定位你所在的城市', cities: [{id: 16, name: '杭州', pinyin: 'hangzhou'}]},
        {
          className: 'hot-city',
          titleText: '热门城市',
          cities: [
              {id: 16, name: '杭州', pinyin: 'hangzhou'},
              {id: 12, name: '北京', pinyin: 'beijing'},
              {id: 11, name: '上海', pinyin: 'shanghai'},
              {id: 10, name: '深圳', pinyin: 'shenzhou'}
          ]
        }
      ],
      indexCity: [
        {
          className: 'sort',
          titleText: '按字母排序',
          cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        }
      ]
    }
  },
  components: {
    CityItem
  },
  computed: {
    ...mapState({
      city: state => state.app.city
    })
  },
  created () {
    console.log(this.$route.params.id)
    getCity().then((res) => {
      const cities = res.data.data.cities
      this.indexCity[0].cities.forEach((value) => {
        let obj = {}
        let arr = []
        obj.titleText = value
        arr = cities.filter((city) => {
          return city.pinyin.slice(0, 1) === value
        })
        obj.cities = arr
        if (arr.length !== 0) {
          this.indexCity.push(obj)
        }
        // console.log(arr)
      })
      // console.log(res.data.data.cities)
    })
  }
}
</script>
<style lang="less">
.city-view{
    background: #ebebeb;
    .gprs-city{

    }
}
</style>

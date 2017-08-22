<template>
    <div class="movie-item">
        <div class="movie-item-img">
            <image-placeholder :src='item.cover.origin' placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"></image-placeholder>
        </div>
        <div class="row" :class="[item.isNowPlaying ? 'des' : 'upcoming-desc']">
            <div class="left" :class="[item.isNowPlaying ? 'col-xs-10' : 'col-xs-7']">
                <div class="file-name">
                    {{item.name}}
                </div>
                <div class="count" v-if="item.isNowPlaying">
                    {{item.cinemaCount}}家影院上映{{item.watchCount}}人购票
                </div>
            </div>
            <div class="right" :class="[item.isNowPlaying ? 'col-xs-2' : 'col-xs-5']">
                {{item.isNowPlaying ? item.grade : getTime(item.premiereAt)}}
            </div>
        </div>
    </div>
</template>
<script>
import ImagePlaceholder from '@/components/ImagePlaceholder'
import moment from 'moment'
export default {
  name: 'MovieItem',
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  methods: {
    getTime (date) {
      return moment(date).format('M月DD日上映')
    }
  },
  components: {
    ImagePlaceholder
  }
}
</script>
<style lang="less">

    .left{
        height: 50px;
        padding-top: 13px;
        padding-left: 28px;
        padding-right: 0;
        .file-name{
            font-size: 12px;
            line-height: 15px;
            color: #333;
        }
        .count{
            font-size: 8px;
            color: #9a9a9a;
        }
    }
    .right{
        padding-left: 0;
        color: #f78360;
        font-size: 18px;
        line-height: 50px;
    }
.upcoming-desc{
    .left{
        height: 35px;
        padding: 10px 0 0 28px;
    }
    .right{
        height: 35px;
        line-height: 15px;
        font-size: 10px;
        padding: 10px 0 0 28px;
    }
}
</style>

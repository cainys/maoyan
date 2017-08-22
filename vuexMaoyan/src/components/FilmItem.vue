<template>
    <div class="film-item">
        <div class="film-item-img">
            <image-placeholder :src="item.poster.thumbnail" placeholder="http://static.m.maizuo.com/v4/static/app/asset/23568dc30235133ebeec89fbded3863b.png" />
        </div>
        <div class="film-desc">
            <div class="film-next-arrow">
                <i class="iconfont icon-arrow-right film-next-icon"></i>
            </div>
            <div class="film-grade" v-if="item.isNowPlaying">{{item.grade || ''}}</div>
            <div class="film-name">{{item.name}}</div>
            <div class="film-intro">
                {{item.intro}}
            </div>
            <div class="film-counts" v-if="item.isNowPlaying">
                {{item.cinemaCount}}家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.watchCount}}人购票
            </div>
            <div v-else class="film-premiere-date">
                {{getTime(item.premiereAt)}}
            </div>
        </div>
    </div>
</template>
<script>
import ImagePlaceholder from './ImagePlaceholder'
import moment from 'moment'
export default {
  name: 'filmItem',
  components: {
    ImagePlaceholder
  },
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
  }
}
</script>
<style lang="less">
.film-item{
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px dashed #c9c9c9;
    cursor: pointer;
    .film-item-img{
        float: left;
        overflow: hidden;
        width: 60px;
    }
    .film-desc{
        display: inline-block;
        width: 75%;
        padding-left: 15px;
        .film-next-arrow{
            float: right;
            line-height: 29px;
            color: #c6c6c6;
        }
        .film-grade{
            float: right;
            color: #fc7103;
            font-size: 16px;
            line-height: 32px;
        }
        .film-name{
            font-size: 16px;
            line-height: 32px;
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .film-intro, .film-counts{
            height:24px;
            line-height: 24px;
            color: #8e8e8e;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            display: inline-block;
        }
        .film-premiere-date{
            color: #ffb175;
            font-size: 12px;
            line-height: 24px;
            height: 24px;
        }
    }
}
</style>

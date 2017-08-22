<template>
    <div class="movie-item">
        <div class="movie-item-img">
            <image-placeholder :src='item.cover.origin' placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"></image-placeholder>
        </div>
        <div class="row des">
            <div class="col-xs-10 left">
                <div class="file-name">
                    {{item.name}}
                </div>
                <div class="count">
                    {{item.cinemaCount}}家影院上映{{item.watchCount}}人购票
                </div>
            </div>
            <div class="col-xs-2 right">
                {{item.grade}}
            </div>
        </div>
    </div>
</template>
<script>
// http://m.maizuo.com/v4/api/film/now-playing?__t=1503286872815&page=1&count=5
// {"status":0,"data":{"films":[{"id":3828,"name":"杀破狼·贪狼","cover":{"origin":"https://pic.maizuo.com/usr/movie/809169f5f41b838651cda6e4a469283c.jpg"},
// "poster":{"origin":"https://pic.maizuo.com/usr/movie/d9bdf2202373b1a226c233056ee97428.jpg","thumbnail":"https://pic.maizuo.com/usr/movie/d9bdf2202373b1a226c233056ee97428.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"},
// "intro":"三男一台戏 主角还是谜","premiereAt":1502899200000,"grade":"8.3","watchCount":481704,"cinemaCount":195,"scheduleCount":3739,"isPromotion":true,"isNowPlaying":true,"isComingSoon":"","isPresold":""}],"page":{"total":52,"current":1}},"msg":"ok"}
import ImagePlaceholder from '@/components/ImagePlaceholder'
export default {
  name: 'MovieItem',
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  components: {
    ImagePlaceholder
  }
}
</script>
<style lang="less">
.des{
    .left{
        height: 50px;
        padding-top: 13px;
        padding-left: 28px;
        padding-right: 0;
        .file-name{
            font-size: 12px;
            line-height: 15px;
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
}
</style>

<template>
    <div :class="className || 'sort'">
        <div class="city-index-title">
            {{titleText}}
        </div>
        <div class="city-index-detail">
            <ul class="list-unstyled">
                <li class="city-item-detail city-item-detail-gprs" v-for="city in cities">{{city.name || city}}</li>
            </ul>
        </div>
    </div>

</template>
<script>
export default {
  name: 'CityItem',
  props: {
    className: {
      type: String,
      required: false
    },
    titleText: {
      type: String,
      required: true
    },
    cities: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="less">
        .gprs-city{
            .city-item-detail{
                color: #e2941a !important;
            }
        }
        .city-index-title{
            background: #ebebeb;
            padding-left: 15px;
            font-size: 14px;
            line-height: 40px;
            margin-top: -1px;
        }
        .city-index-detail{
            .list-unstyled{
                background: #fff;
                min-width: 320px;
                padding: 0;
                list-style: none;
                .city-item-detail{
                    text-align: center;
                    display: inline-block;
                    cursor: pointer;
                    line-height: 46px;
                    width: 25%;
                    font-size: 16px;
                    color: #838383;
                    border-bottom: 1px solid #ebebeb;
                }
            }
        }
</style>

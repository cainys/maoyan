<template>
    <nav id="toolbar">
        <h1 @click="changeLeftNav">
            <a href="javascropt: void(0)">
                <div class="toolbar-title-icon">
                    <i class="iconfont icon-list"></i>
                </div>
                <div class="toolbar-title">
                    movie
                </div>
            </a>
        </h1>
        <div class="user">
            <router-link to="/city" class="city">
                <span>{{city}}</span>
                <i class="iconfont icon-dropdown"></i>
            </router-link>
            <router-link to="/" class="user-icon">
                <i class="iconfont icon-user"></i>
            </router-link>
        </div>
    </nav>
</template>
<script>
// import {mapActions} from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'navbar',
  computed: {
    ...mapState({
      city: state => state.app.city
    })
  },
  methods: {
    changeLeftNav () {
      this.$store.dispatch('changeLeftNav', true)
    },
    getGpsCity () {
    }
  },
  beforeMount () {

  }
}
</script>
<style lang="less" scoped>
#toolbar{
    position: fixed;
    z-index: 500;
    top: 0;
    left: 0;
    right: 0;
    width: auto;
    overflow: hidden;
    height: 50px;
    line-height: 50px;
    background: #282828;
    h1{
        float: left;
        font-size: 14px;
        padding:0px;
        margin: 0;
        a{
            color: #fff;
            line-height: 50px;
            text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
            .toolbar-title-icon{
                float: left;
                color:#999;
                width: 48px;
                text-align: center;
                border-right: 1px solid #222;
                box-shadow: 1px 0px 1px #363636;
            }
            .toolbar-title{
                float: left;
                padding: 0 1rem;
            }
        }
    }
    .user{
        float: right;
        a{
            display:inline-block;
            width: 48px;
            text-align: center;
            color: #999;
            font-size: 14px;
            .icon-dropdown{
                font-size: 12px;
            }
        }
    }
}
</style>

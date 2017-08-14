<template>
    <nav>
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
            <router-link to="/" class="city">
                <span>杭州</span>
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
export default {
  name: 'navbar',
  methods: {
    changeLeftNav () {
      this.$store.dispatch('changeLeftNav', true)
    }
  }
}
</script>
<style lang="less" scoped>
nav{
    height: 50px;
    line-height: 50px;
    background: #282828;
    h1{
        float: left;
        a{
            color: #fff;
            .toolbar-title-icon{
                color:#999;
                width: 48px;
                text-align: center;
                display: inline-block;
                border-right: 1px solid #222;
                box-shadow: 1px 0px 1px #363636;
            }
            .toolbar-title{
                display: inline-block;
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

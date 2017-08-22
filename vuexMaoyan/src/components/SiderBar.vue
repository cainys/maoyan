<template>
    <aside class="application-sidebar">
        <transition name="sidebar">
            <div class="sidebar-container" @click="hideNav" v-show="getLeftNavState">
                <div class="sidebar-overlay">
                    <transition name="leftNav">
                        <nav v-show="getLeftNavState">
                            <ul>
                                <li v-for="menu in menuList">
                                    <router-link :to="menu.path">
                                        <span>{{menu.name}}</span>
                                        <i class="iconfont icon-arrow-right right"></i>
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                    </transition>
                </div>
            </div>
        </transition>
    </aside>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'sidebar',
  data () {
    let menuList = [
        {name: '首页', path: '/'},
        {name: '影片', path: '/filmList'},
        {name: '影院', path: '/cinema'},
        {name: '商城', path: '/shop'},
        {name: '我的', path: '/login'},
        {name: '卖座卡', path: '/card'}
    ]
    return { menuList: menuList }
  },
  computed: {
    ...mapGetters(['getLeftNavState'])
  },
  methods: {
    hideNav () {
      this.$store.dispatch('changeLeftNav', false)
    }
  }
}
</script>
<style lang="less" scoped>

.application-sidebar{
    /*.sidebar-enter-active{
        animation: nav ease .9;
    }
    @keyframes nav{
        0% {
            opacity: 0;
            left: -300px;
        }
        100% {
            opacity: 1;
            left: 0;
        }
    }*/
    .sidebar-container{
        color: #9a9a9a;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
    }
    .sidebar-overlay{
        position: absolute;
        top: 50px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: rgba(0,0,0,0.5);
        .leftNav-enter-active{
            animation: leftNav ease 1s;
            -webkit-transition: leftNav ease 1s;
        }
        /*.leftNav-enter, .leftNav-leave-active {
            right:380px;
            opacity: 0;
        }*/
        @keyframes leftNav{
            0% {
                left: -200px;
                opacity: 0;
            }
            100% {
                left: 0;
                opacity: 1;
            }
        }
        nav{
            border-top: 1px solid #222;
            box-shadow: 0 1px 1px #363636 inset;
            background: #282828;
            position: absolute;
            top: 0px;
            left: 0px;
            right: 110px;
            bottom: 0px;
            ul{
                li{
                    line-height: 50px;
                    a{
                        color: #9a9a9a;
                        display: block;
                        width: 100%;
                        padding: 0 16px;
                        border-bottom: 1px dotted #333;
                        .right{
                            color: #9a9a9a;
                            font-size: 14px;
                            display: inline-block;
                            float: right;
                        }
                    }
                }
        }
    }
    }
}
</style>
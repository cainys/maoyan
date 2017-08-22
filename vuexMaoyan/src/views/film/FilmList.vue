<template>
    <section class="content film-view">
        <div class="film-list-wrap">
            <div class="film-list-nav">
                <router-link to="nowPlaying">
                    <div class="now-playing" @click="changeTab('now')" :class="{'choosing': currentTab === 'now'}">正在热映</div>
                </router-link>
                <router-link to="coming-soon">
                    <div class="coming-soon" @click="changeTab('soon')" :class="{'choosing': currentTab === 'soon'}">即将上映</div>
                </router-link>
            </div>
            <div class="film-list">
                <router-view></router-view>
            </div>
            <div class="cpn-back-to-top"></div>
        </div>
    </section>
</template>
<script>
import {mapState} from 'vuex'
export default{
  name: 'filmList',
  components: {},
  computed: {
    ...mapState({
      currentTab: state => state.app.currentTab
    })
  },
  methods: {
    changeTab (tab) {
      this.$store.commit('TOGGLETAB', tab)
    }
  }
}
</script>
<style lang="less">
.film-list-wrap{
    padding: 0 15px;
    position: absolute;
    background-color: #f9f9f9;
    width: 100%;
    min-height: 100%;
    .film-list-nav{
        font-size: 16px;
        height: 46px;
        text-align:center;
        margin: 0 auto;
        border-bottom: 1px solid #fe6e00;
        .now-playing, .coming-soon{
            float: left;
            color: #6a6a6a;
            width: 50%;
            height: 100%;
            line-height: 46px;
            cursor: pointer;
        }
        .choosing{
            border-bottom: 3px solid #fe6e00;
        }
    }
}
</style>

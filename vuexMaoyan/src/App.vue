<template>
  <div id="app">
    <NavBar />
    <div class="application-view">
      <router-view></router-view>
    </div>
    <SideBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SiderBar'

export default {
  name: 'app',
  components: {
    NavBar, SideBar
  }
}
</script>

<style>
*{box-sizing: border-box;}
body{
  font-size: 14px;
  font-family: 'Microsoft YaHei', Tahoma, Helvetica, Arial, sans-serif;
}
#app {

}
</style>

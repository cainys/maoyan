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
  background-color: #ebebeb;
  color: #333;
  font-size: 14px;
  font-family: 'Microsoft YaHei', Tahoma, Helvetica, Arial, sans-serif;
}
.content{
  padding: 0px !important;
  margin: 0 auto !important;
  width: 600px;
}
@media screen and (max-width: 768px){
  .content{
    width: auto;
  }
}
#app {

}
.application-view{
  padding: 50px 0 0;
}
</style>

<template>
  <div id="app">
    <div class="header">
        <router-view name="header">KS系统 </router-view>
    </div>

    <div class="warp clearfix">
       <div class="left pull-left" >
            <router-view name="left"></router-view>
       </div>
       <div class="right"> 
          <router-view/>
       </div>
    </div>
   
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  padding: 10px;

}
.left {
    width: 300px;
}
.right {
  border: 1px solid #ddd;
  margin-left: 320px;
}
</style>

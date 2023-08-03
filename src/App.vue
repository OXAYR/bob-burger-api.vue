<template>
  <div>
    <NavBar />
    <div class="flex">
      <SideBar class="top-16"/>
      <router-view class="mt-20 ml-60"/> 
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'

export default{

  components:{
    NavBar,
    SideBar
  }
}

</script>


<style>

</style>

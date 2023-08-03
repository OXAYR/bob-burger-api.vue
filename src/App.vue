<template>
  <div>
    <NavBar />
      <router-view class="mt-20"/> 
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default{

  components:{
    NavBar
  }
}

</script>


<style>

</style>

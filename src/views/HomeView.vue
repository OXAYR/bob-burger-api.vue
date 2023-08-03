<template>
  <div class="home">
    <div class="flex">
      <SideBar class="top-16" />
      <div class="ml-60"> 
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
//import HomeComp from '@/components/Home.vue';
import SideBar from '../components/SideBar.vue';

export default {
  name: 'HomeView',
  components: {
  //  HomeComp,
    SideBar
  }
};
</script>

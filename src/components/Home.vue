<template>
  <div>
  <ul class="divide-y divide-gray-200">
    <li v-for="u in user" :key="u.id">
      <div class="py-4 flex bg-white shadow-md rounded-md">
        <img class="h-20 w-20 rounded-full" :src="u.image" alt="" />
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">{{ u.name }}</p>
          <p class="text-sm text-gray-500">{{ u.gender }}</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'HomeComp',
  
  
  computed:{
    ...mapGetters({user: 'getUser'})
  },

  methods:{
    ...mapActions({createUser:'registerUser'})
  }, 

  created() {
    this.createUser();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

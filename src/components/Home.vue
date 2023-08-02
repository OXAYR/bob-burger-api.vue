<template>
  <div>
  <ul  class="grid gap-4 grid-cols-3 grid-rows-3">
    <li v-for="u in user" :key="u.id" class=" p-4 shadow-lg">
        <img class="w-auto aspect-square"  :src="u.image" :alt="u.name + image"  />
        <div class="py-4 font-serif">
          <p> Name: {{ u.name }}</p>
          <p> Gender: {{ u.gender }}</p>
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

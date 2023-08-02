<template>
  <div>
    
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

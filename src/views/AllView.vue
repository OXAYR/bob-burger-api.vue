<template>
  <div>
    <CardComp :item="user"/>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import CardComp from '../components/Card.vue'
export default {
  name: 'AllView',
  components:{
    CardComp
  },
  
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

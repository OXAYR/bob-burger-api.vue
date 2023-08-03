<template>
  <v-sheet width="300" class="mx-auto">
    <h1 style="margin-bottom: 2rem;">Sign In</h1>
    <v-form >
      <v-text-field
        v-model="formLogin.email"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="formLogin.password"
        label="password"
      ></v-text-field>
    </v-form>
  </v-sheet>
  <ButtonComp text="login"/>
  <v-btn block variant="plain">
    <span class="text-button"> forget password </span>
  </v-btn>
</template>
<script>

import router from '@/router';
import ButtonComp from '@/components/ButtonComp.vue'
export default {
  name: 'LoginForm',
  props: {
      msg: String,
    },
  components:{
    ButtonComp
  },
  data() {
    return {
        validCredential: false,
        formLogin :{
        email: "",
        password: ''    
        },
        error:[],
    }
},
methods:{
  
    toValidate(obj){
      
          if(localStorage.getItem("Email") == obj.email){
           
            if(localStorage.getItem("Password") == obj.password){
            
              router.push('/todos')
            }
          }
      },
    Valid: function(obj) {
        this.error = [];
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"']{8,}$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        
      if (!emailPattern.test(obj.email)) {
        this.error.push("Invalid Email");
      } 
      if (!passwordPattern.test(obj.password)) {
          this.error.push("Invalid Password");
      }
        
      }
    
    }
    }

</script>

<style scoped>

</style>

<template>
  <v-sheet style="max-width: 300px;" class="mx-auto">
    <h1 style="margin-bottom: 2rem;"> Create An Account </h1>
  <form class=" mx-auto" @submit.prevent="submit">

    <v-text-field
      v-model="form.email"
      
      label="E-mail"
    ></v-text-field>
    
    <v-text-field
      v-model="form.password"
      :counter="7"
      
      label="Password"
    ></v-text-field>

    

    <v-text-field     
      v-model="form.confrimPassword"
      
      label="Confirm Password"
    ></v-text-field>


    <ButtonComp text="Create Password"/>

  </form>
</v-sheet>
</template>
  
  <script>
  import router from '@/router'
  import ButtonComp from './ButtonComp.vue'
  export default {
    name: 'SignUpForm',
    props: {
      msg: String,
    },
    components:{
      ButtonComp
    },
    data() {
      return {
        form : { 
        username: '',
        email: '',
        password: '',
        confrimPassword:'',
        },
        error:[]
        
      }
    },
    computed: {
    // shouldNavigate() {
    //   // Compute the condition based on the form data
    //   return this.getForm(this.form) && this.Validate(this.form);
    // },
  },
    methods: {
      toStore(obj){
        if(obj.email !== "" && obj.password !=="" && obj.username !== "" && obj.confrimPassword!==""){
   
          localStorage.setItem("Username",obj.username)
          localStorage.setItem("Password",obj.password)
          localStorage.setItem("Email",obj.email)
          router.push('/')
        }
      },
  // Validate: function(obj) {
  //       this.error = [];
  //       const usernamePattern = /^(?=.*[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"'])\S+$/;
  //       const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"']{8,}$/;
  //       const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //       if (obj.username !== "" && !usernamePattern.test(obj.username)) {
  //         this.error.push("Invalid Name");
  //       } 
  //       if (obj.password !== "" && !passwordPattern.test(obj.password)) {
  //         this.error.push("Invalid Password");
  //       } 
  //       if(obj.password !== obj.confrimPassword){
  //          this.error.push("Password Does not match")
  //       }
  //       if (obj.email !== "" && !emailPattern.test(obj.email)) {
  //       this.error.push("Invalid Email");
  //       }
  //       // } else {
  //       //   alert("Your credentials have been added successfully!");
  //       // }
  //   },

    
    created() {
      // Initialization code javascript load
      console.log('Created');
  
    },
    mounted(){
      // Code that runs when the component is inserted into the DOM html loaded
      console.log('mounted');
    },
    updated() {
      // Code that runs when the component's data or props change
      console.log('updated');
      
    },
    unmounted() {
      // Code that runs when the component is about to be destroyed
      console.log('unmounted');
    },
  }
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  /* h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  } */
  
  fieldset{
    margin-bottom: 2rem;
  }
  .Button{
  
    margin-top: 2rem;
  }
  </style>
  
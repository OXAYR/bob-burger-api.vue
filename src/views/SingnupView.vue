<template>
    <div class="SignUp">
      <SignUp/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SignUp from '../components/SignupForm.vue'
  
  export default {
    name: 'SignUpView',
    components: {
      SignUp
    }
  }
  </script>
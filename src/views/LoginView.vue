<template>
  <div>
    <h1 class="mt-5">Login</h1>
    <form action="" @submit.prevent="login" class="w-25 mx-auto px-3 formlogin">
      <input required type="email" name="email" placeholder="E-mail" v-model="email" class="rounded my-3 p-1 bg-dark text-light">
      <input required type="password" name="password" placeholder="Password *" v-model="password" class="rounded p-1 bg-dark text-light">
      <button class="rounded-pill bg-dark text-light w-50 text-center mx-auto my-5 p-1">Login</button>
    </form>
    <p v-html="message"></p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'LoginView',
  data(){
    return{
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    login(){
      // get registered users to check login
      if(localStorage.getItem("registeredUsers")){
        this.registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
        let correct_login = this.registeredUsers.find( x => x.email == this.email && x.password == this.password);

        if(correct_login){
          this.message = 'Correct login, welcome!';
          this.$store.dispatch('setLoggedinAction');
        }else{
          this.message = 'Incorrect login. Please try again.';
        }
      }else{
        this.message = 'You must register first.'
      }
      
    },
  },
  
}
</script>

<style scoped>
.formlogin input{
  width: 100%;
}

@media (max-width: 1000px) {
  .formlogin {
    width: 80% !important;
  }
}
</style>

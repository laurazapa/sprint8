<template>
  <div>
    <h1 class="mt-5">Register</h1>
    <form action="" @submit.prevent="register" class="w-25 mx-auto px-3 formlogin">
      <input required type="email" name="email" placeholder="E-mail" v-model="email" class="rounded my-3 p-1 bg-dark text-light">
      <input required type="password" name="password" placeholder="Password *" v-model="password" class="rounded p-1 bg-dark text-light">
      <button class="rounded-pill bg-dark text-light w-50 text-center mx-auto my-5 p-1">Register</button>
    </form>
    <p v-html="message"></p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'RegisterView',
  data(){
    return{
      email: '',
      password: '',
      registeredUsers: [],
      message: ''
    }
  },
  methods: {
    register(){
      // get registered users to avoid duplicates
      if(localStorage.getItem("registeredUsers")){
        this.registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
      };
      let user_exists = this.registeredUsers.find( x => x.email == this.email);

      if(user_exists){
        this.message = 'This email already exists! Please choose another email.'
      }else{
        this.registeredUsers.push({
          email: this.email,
          password: this.password
        });
        this.email= '';
        this.password= '';
        this.message = 'Correctly registered :). You can now login.'
      }
    }
  },
  watch: {
    registeredUsers: {
      handler(){
        localStorage.setItem("registeredUsers", JSON.stringify(this.registeredUsers));
      },
      deep: true
    },
  }
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

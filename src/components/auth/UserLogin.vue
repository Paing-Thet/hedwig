<template>
    <div class="login-page">
      <img src="https://dev-paingthet.pantheonsite.io/wp-content/uploads/2024/10/b7777dce980a8abcb421ae488020ccbf.png" alt="">
      <h2 class="text-2xl font-bold">Hedwig</h2>
      <form @submit.prevent="loginUser" class="flex flex-col">
        <input type="email" v-model="email" placeholder="Email" class="input" />
        <input type="password" v-model="password" placeholder="Password" class="input" />
        <button type="submit" class="btn">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { auth } from '../firebase/firebaseConfig';
  import { signInWithEmailAndPassword } from 'firebase/auth';

  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      async loginUser() {
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password);
          alert("Login Success");
          this.$router.push('/dashboard');
        }
        catch(error) {
          this.errorMessage = error.message;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login-page img{
    border-radius: 100px;
    width: 200px;
  }
  .input {
    margin: 10px 0;
    padding: 8px;
    border: 1px solid #ccc;
  }
  .btn {
    background-color: #3490dc;
    color: white;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  
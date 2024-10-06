<template>
    <div class="login-page">
      <h2 class="text-2xl font-bold">Admin/HR Login</h2>
      <form @submit.prevent="loginAdmin">
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
      async loginAdmin() {
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push('/admin/dashboard');
        } 
        catch (error) {
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
  .input {
    margin: 10px 0;
    padding: 8px;
    border: 1px solid #ccc;
  }
  .btn {
    background-color: #e3342f;
    color: white;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  
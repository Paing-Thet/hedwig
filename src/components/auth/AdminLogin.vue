<template>
    <div class="login-page">
      <h2 class="text-2xl font-bold">Admin/HR Login</h2>
      <form @submit.prevent="loginAdmin">
        <input type="email" v-model="email" placeholder="Email" class="input" />
        <input type="password" v-model="password" placeholder="Password" class="input" />
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      loginAdmin() {
        // Placeholder for admin login logic
        console.log("Admin login: ", this.email, this.password);
      }
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
  
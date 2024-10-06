<template>
  <div>
    <h3>Register New User</h3>
    <form @submit.prevent="registerUser">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <select v-model="role">
        <option value="user">User</option>
        <option value="admin">Admin/HR</option>
      </select>
      <button type="submit">Register</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>
  
  <script>
  import { auth } from '../firebase/firebaseConfig';
  import { createUserWithEmailAndPassword } from 'firebase/auth';

  export default {
    data() {
      return {
        email: '',
        password: '',
        role: 'user',
        errorMessage: '',
      };
    },
    methods: {
      async registerUser() {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
          // Here you can add additional code to set role or handle user management logic
          alert(`User ${userCredential.user.email} registered successfully!`);
        } catch (error) {
          this.errorMessage = error.message;
        }
      },
    },
  };
  </script>
  <style scoped>
  .error {
    color: red;
  }
  </style>
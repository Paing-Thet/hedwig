<template>
  <div>
    <h3 class="text-2xl mb-4">Post an Announcement</h3>
    <form @submit.prevent="postAnnouncement">
      <textarea v-model="announcementText" class="w-full mb-4 p-2 border" placeholder="Enter announcement"></textarea>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4">Post</button>
    </form>
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    <p v-if="successMessage" class="text-green-500">{{ successMessage }}</p>
  </div>
</template>

<script>
// import { db } from '../firebase/firebaseConfig'; 
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default {
  data() {
    return {
      announcementText: '',
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    async postAnnouncement() {
      try {
        await addDoc(collection(db, "announcements"), {
          text: this.announcementText,
          createdAt: Timestamp.now()
        });
        this.successMessage = "Announcement posted!";
        this.announcementText = '';
      } catch (error) {
        this.errorMessage = error.message;
      }
    }
  }
};
</script>

<style scoped>
/* Your styles here */
</style>

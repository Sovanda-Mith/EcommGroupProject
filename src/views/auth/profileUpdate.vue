<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-pink-50 p-6">
      <div class="bg-white w-full max-w-3xl rounded-xl shadow-lg p-8">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Update Profile</h1>
        <form @submit.prevent="updateProfile" class="space-y-6">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-600 mb-2">Username</label>
            <input
              type="text"
              id="username"
              v-model="user.username"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              v-model="user.email"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-600 mb-2">Password</label>
            <input
              type="password"
              id="password"
              v-model="user.password"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter a new password"
            />
          </div>
          <div class="flex justify-between space-x-4">
            <button
              type="submit"
              class="w-full bg-purple-600 text-white py-3 rounded-lg font-medium shadow-md hover:bg-purple-700"
            >
              Save Changes
            </button>
            <button
              type="button"
              @click="navigateBack"
              class="w-full bg-gray-300 text-gray-800 py-3 rounded-lg font-medium shadow-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/auth';

  export default defineComponent({
    name: 'ProfileUpdate',
    setup() {
      const user = reactive({
        username: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        password: localStorage.getItem('passwd'),
      });
  
      const router = useRouter();
      const authStore = useAuthStore();

      const updateProfile = () => {
        //save to localStorage in pinia
        if(user.username && user.email && user.password){
          authStore.signup(user.username, user.email, user.password);
          alert(`Profile updated successfully!`);
          router.push({ name: 'profile' });
        }
      };
  
      const navigateBack = () => {
        router.push({ name: 'profile' });
      };
  
      return { user, updateProfile, navigateBack };
    },
  });
  </script>
  
  <style scoped>
  /* Scoped styles for profile update */
  </style>
  
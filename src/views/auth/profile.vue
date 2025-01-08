<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-indigo-50 p-6">
      <div class="bg-white w-full max-w-3xl rounded-xl shadow-lg p-8">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">My Profile</h1>
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <!-- Profile Picture -->
          <div class="flex flex-col items-center">
            <img
              src="../../assets/landPageImg/user-3-svgrepo-com.svg"
              alt="Profile"
              class="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md"
            />
            <!-- <p class="mt-4 text-lg font-semibold text-gray-800">{{ user.username }}</p> -->
          </div>
          <!-- Profile Details -->
          <div class="flex-1 space-y-6">
            <div>
              <p class="text-sm font-medium text-gray-600">Username</p>
              <p class="text-xl text-gray-800 font-semibold">{{ user.username }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-600">Email</p>
              <p class="text-xl text-gray-800 font-semibold">{{ user.email }}</p>
            </div>
          </div>
        </div>
        <div class="mt-16 flex justify-center space-x-4">
          <button
            @click="back"
            class="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-400"
          >
            Back
          </button>
          <button
            @click="navigateToUpdate"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700"
          >
            Update Profile
          </button>
          <button
            @click="logout"
            class="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-400"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/auth';
  
  export default defineComponent({
    name: 'ProfilePage',
    setup() {
      const user = reactive({
        username: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
      });
  
      const router = useRouter();
      const authStore = useAuthStore();
  
      const navigateToUpdate = () => {
        router.push({ name: 'profileUpdate' });
      };
  
      const logout = () => {
        authStore.logout();
        alert('Logged out successfully!');
        router.push({ path: '/auth/login' });
      };
      const back = () => {
        router.push({ path: '/' });
      };
  
      return { user, navigateToUpdate, logout, back };
    },
  });
  </script>
  
  <style scoped>
  /* Scoped styles for profile display */
  </style>
  
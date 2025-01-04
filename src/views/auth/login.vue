<template>
    <div class="bg-gray-100 flex items-center justify-center h-screen">
      <div class="bg-white shadow-md rounded-lg px-10 py-8 max-w-md w-full">
        
        <h2 class="text-2xl font-bold text-center mb-2">Welcome to our computer shop!</h2>
        <img src="../../assets/images/logo_ip.png" alt="logo" class="w-1/5 m-auto ">
        <p class="text-gray-600 text-center mb-6">Login with your email & password</p>
  
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="login-email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="loginForm.email"
              id="login-email"
              type="email"
              placeholder="example@gmail.com"
              class="w-full px-4 py-2 mt-1 border rounded-md text-sm focus:ring-black focus:border-black"
              required
            />
          </div>
          <div class="mb-6">
            <label for="login-password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              v-model="loginForm.password"
              id="login-password"
              type="password"
              placeholder="********"
              class="w-full px-4 py-2 mt-1 border rounded-md text-sm focus:ring-black focus:border-black"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Login
          </button>
        </form>
  
        <p class="text-center text-sm text-gray-600 mt-6">
          Don't have an account? 
          <router-link to="/auth/signup" class="text-blue-600 hover:underline">Sign up</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'LoginPage',
    setup() {
      const router = useRouter();
      const loginForm = reactive({
        email: '',
        password: ''
      });
  
      const handleLogin = () => {
        console.log('Login Data:', loginForm);
        router.push('/');
      };
  
      return {
        loginForm,
        handleLogin
      };
    }
  });
  </script>
  
  <style scoped>
  /* Add any custom styles here if necessary */
  </style>
  
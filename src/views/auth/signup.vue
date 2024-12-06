<template>
    <div class="bg-gray-100 flex items-center justify-center h-screen">
      <div class="bg-white shadow-md rounded-lg px-10 py-8 max-w-lg w-full">
        <h2 class="text-2xl font-bold text-center mb-2">Welcome to our computer shop!</h2>
        <img src="../../assets/images/logo_ip.png" alt="logo" class="w-1/5 m-auto ">
        <p class="text-gray-600 text-center mb-6">Please create your account! enjoy shopping!</p>
  
        <form @submit.prevent="handleSignup">
          <div class="mb-4">
            <label for="signup-name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
              v-model="signupForm.name"
              id="signup-name"
              type="text"
              placeholder="Korb Daven"
              class="w-full px-4 py-2 mt-1 border rounded-md text-sm focus:ring-black focus:border-black"
              required
            />
          </div>
          <div class="mb-4">
            <label for="signup-email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="signupForm.email"
              id="signup-email"
              type="email"
              placeholder="example@gmail.com"
              class="w-full px-4 py-2 mt-1 border rounded-md text-sm focus:ring-black focus:border-black"
              required
            />
          </div>
          <div class="mb-4">
            <label for="signup-password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              v-model="signupForm.password"
              id="signup-password"
              type="password"
              placeholder="********"
              class="w-full px-4 py-2 mt-1 border rounded-md text-sm focus:ring-black focus:border-black"
              required
            />
          </div>
          <div class="mb-6">
            <label for="signup-confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              v-model="signupForm.confirmPassword"
              id="signup-confirm-password"
              type="password"
              placeholder="********"
              class="w-full px-4 py-2 mt-1 border rounded-md text-sm focus:ring-black focus:border-black"
              required
            />
          </div>
          <div class="mb-4 flex items-center">
          <input
            v-model="signupForm.agreeToTerms"
            id="agree-terms"
            type="checkbox"
            class="mr-2"
            required
          />
          <label for="agree-terms" class="text-sm text-gray-700">
            I agree to the <router-link to="/terms" class="text-blue-600 hover:underline">terms and conditions</router-link>
          </label>
        </div>
          <button
            type="submit"
            class="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Sign Up
          </button>
        </form>
  
        <p class="text-center text-sm text-gray-600 mt-6">
          Already have an account? 
          <router-link to="/auth/login" class="text-blue-600 hover:underline">Login</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue';
  
  export default defineComponent({
    name: 'SignupPage',
    setup() {
      const signupForm = reactive({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
      });
  
      const handleSignup = () => {
        if (signupForm.password !== signupForm.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        if (!signupForm.agreeToTerms) {
            alert('You must agree to the terms and conditions!');
            return;
      }
        console.log('Signup Data:', signupForm);
      };
  
      return {
        signupForm,
        handleSignup
      };
    }
  });
  </script>
  
  <style scoped>
  /* Add any custom styles if necessary */
  </style>
  
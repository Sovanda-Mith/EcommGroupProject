<template>
  <footer class="bg-[#606868] px-5 py-5 text-white grid grid-cols-3">
    <div class="text-[18px]">
      <router-link to="/auth/profile">
        <p class="hover:underline">Your Account</p>
      </router-link>
      <router-link to="/orders">
        <p class="hover:underline">Your Orders</p>
      </router-link>
      <router-link to="/wishlist">
        <p class="hover:underline">Your lists</p>
      </router-link>
      <router-link to="/history">
        <p class="hover:underline">Browsing History</p>
      </router-link>
      <router-link to="/seller-register">
        <p class="hover:underline">Sell product on IPB3</p>
      </router-link>
      <router-link to="/customer-service">
        <p class="hover:underline">Customer Service</p>
      </router-link>
    </div>
    <div class="flex flex-col justify-center space-y-4 col-span-2 items-center">
      <h1 class="text-[24px]">Keep Up To Date with Best Selling Products</h1>
      <p>
        30% off for the first purchase, getting norified with our best sales,<br />
        and members-only sales.
      </p>
      <div class="relative">
        <input
          type="text"
          placeholder="Enter your email address"
          class="py-2 rounded-md bg-[#95a1a1] placeholder:text-white pr-48 pl-5 placeholder:text-[14px]"
        />
        <button class="absolute right-0 top-0 pt-2 pr-2.5">SIGN UP</button>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>

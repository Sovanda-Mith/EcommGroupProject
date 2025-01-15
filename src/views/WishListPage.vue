<template>
  <NavBar />
  <div class="flex flex-col justify-center items-center">
    <img
      src="../assets/landPageImg/wishlist.jpg"
      alt="Wish List Icon"
      class="md:w-[750px] md:h-[650px] lg:w-[1000px] lg:h-[700px]"
    />
    <div class="flex flex-col justify-center items-center space-y-2">
      <p class="font-semibold md:text-[32px]">Your Wishlist is Empty</p>
      <router-link to="/category/Hot">
        <Button variant="secondary" class="text-white md:text-[20px] bg-black">Explore</Button>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import NavBar from '@/components/LandingPageComponents/NavBar.vue'
import Button from '@/components/ui/button/Button.vue'
</script>

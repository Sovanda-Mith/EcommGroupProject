<template>
  <PromotionBar />
  <NavBar />
  <div class="flex items-center bg-black">
    <img
      src="../assets/landPageImg/alt-arrow-left-svgrepo-com.svg"
      alt="left icon"
      class="w-[50px] h-[50px]"
    />
    <img
      src="../assets/landPageImg/mechanicalkeyboard1.avif"
      alt="mechanicalkeyboard1"
      class="w-1/2"
    />
    <img
      src="../assets/landPageImg/mechanicalkeyboard2.avif"
      alt="mechanicalkeyboard2"
      class="w-1/2"
    />
    <img
      src="../assets/landPageImg/alt-arrow-right-svgrepo-com.svg"
      alt="right icon"
      class="w-[50px] h-[50px]"
    />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/LandingPageComponents/NavBar.vue'
import PromotionBar from '@/components/LandingPageComponents/PromotionBar.vue'
</script>

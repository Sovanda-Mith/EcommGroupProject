<template>
  <div class="h-[500px] w-fit">
    <img :src="img" :alt="title" class="h-[300px] w-[450px] rounded-t-lg" />
    <div class="flex flex-col items-center bg-[#606868] space-y-5 py-4 rounded-b-lg">
      <p class="text-white text-[32px]">{{ title }}</p>
      <p class="text-white text-[16px]">{{ description }}</p>
      <button class="text-white bg-[#95a1a1] rounded-lg text-[20px] px-3 py-2">Shop Now</button>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  img: String,
  title: String,
  description: String,
})
</script>

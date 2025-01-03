<template>
  <div class="flex flex-col items-center mt-10 space-y-5">
    <h1 class="text-[64px] font-semibold">Featured Products</h1>
    <p class="text-[32px]">Products that we think you need</p>
    <div class="overflow-x-auto">
      <div class="flex space-x-10">
        <FeaturedCard
          v-for="product in products"
          :key="product.description"
          :img="product.img"
          :descrption="product.description"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import FeaturedCard from './FeaturedCard.vue'

const products = [
  {
    img: '../../../src/assets/landPageImg/lenovokeyboard.jpg',
    description: 'Lenovo Wireless Keyboard',
  },
  {
    img: '../../../src/assets/landPageImg/wirelessmouse.jpg',
    description: 'Apple Wireless Mouse',
  },
  {
    img: '../../../src/assets/landPageImg/asusmonitor.jpg',
    description: 'Asus Monitor',
  },
  {
    img: '../../../src/assets/landPageImg/lgmonitor.jpg',
    description: 'LG monitor',
  },
  {
    img: '../../../src/assets/landPageImg/wirelessmicrophone.jpg',
    description: 'Wireless Microphone',
  },
  {
    img: '../../../src/assets/landPageImg/gamingmicrophone.jpg',
    description: 'Gaming Microphone',
  },
  {
    img: '../../../src/assets/landPageImg/appledesktop.jpg',
    description: 'Apple Desktop',
  },
  {
    img: '../../../src/assets/landPageImg/logitechspeaker.jpg',
    description: 'Logitech Speaker',
  },
]
</script>

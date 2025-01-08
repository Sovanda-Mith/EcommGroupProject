<template>
  <div class="grid grid-cols-4 gap-6">
    <div
      v-for="product in products"
      :key="product.productId"
      class="bg-white p-4 border rounded shadow-sm">
      <span v-if="product.tag"
      class="[
          'text-xs px-2 py-1 rounded uppercase font-bold',
          product.tag === 'HOT' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
      ]">
        {{ product.tag }}
      </span>
      <img
        :src="product.image"
        :alt="product.name"
        class="my-4 w-full h-40 object-contain"
      />
      <h3 class="font-semibold text-base">{{ product.name }}</h3>
      <p class="text-yellow-500 text-sm">
        ★★★★☆ ({{ product.reviewsNum }})
      </p>
      <div class="flex justify-between items-center">
        <p class="text-lg font-bold text-gray-800 mt-2">${{ product.price }}</p>
        <button class="w-[200px] h-[50px] bg-[#82C89F] text-white py-2 rounded mt-4 hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {type productState } from '@/stores/product';

defineProps<{
  products: productState[];
}>();
</script>

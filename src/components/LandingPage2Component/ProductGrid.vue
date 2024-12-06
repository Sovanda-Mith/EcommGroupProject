<template>
  <div class="grid grid-cols-3 gap-6">
    <div
      v-for="product in products"
      :key="product.id"
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
        ★★★★☆ ({{ product.reviews }})
      </p>
      <p class="text-lg font-bold text-gray-800 mt-2">${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number | string;
  name: string;
  image: string;
  tag?: string; // Optional property
  reviews: number;
  price: number;
}

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="grid grid-cols-4 gap-6">
    <div
      v-for="product in products"
      :key="product.id"
      class="bg-white p-4 border rounded shadow-sm cursor-pointer hover:shadow-md transition"

      >
      <router-link  :to="`/${product.type}/${product.id}`"
      class="block text-center"
      >
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
      </router-link>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Product {
  type: string;
  id: number | string;
  name: string;
  image: string;
  // New property for product type
  tag?: string; // Optional property
  reviews: number;
  price: number;
}

defineProps<{
  products: Product[];
}>();

const router = useRouter();

const goToProductDetailView = (product: Product) => {
  router.push(`/${product.type}/${product.id}`);
};
</script>

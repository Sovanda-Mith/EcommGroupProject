<template>
  <main class="h-[100vh] overflow-y-auto w-3/4 p-6 bg-gray-200">
    <ProductGrid :products="paginatedProducts" />
    <div class="mt-6 flex justify-between items-center">
      <button
        class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        Previous
      </button>
      <div class="flex gap-2">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'w-8 h-8 rounded-full',
            currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          ]"
        >
          {{ page }}
        </button>
      </div>
      <button
        class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        Next
      </button>
    </div>
    <div class="mt-4 text-center">
      Page {{ currentPage }} of {{ totalPages }}
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: 'AudioPage',
};
</script>

<script setup lang="ts">
import ProductGrid from "@/components/ProductCatalogComponent/ProductGrid.vue";
import { ref, computed } from "vue";

import { useProductStore } from '@/stores/product';
const ProductStore = useProductStore();

//for each category
const keyboardProduct=ProductStore.getProductByCategory('Keyboard');

const currentPage = ref(1);
const itemsPerPage = 8;

const totalPages = computed(() => Math.ceil(keyboardProduct.length / itemsPerPage));

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return keyboardProduct.slice(start, start + itemsPerPage);
});


const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const goToPage = (page: number) => {
  currentPage.value = page;
};

</script>

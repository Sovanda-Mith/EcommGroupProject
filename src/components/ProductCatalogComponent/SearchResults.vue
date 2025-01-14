<template>
  <div class="w-full fixed top-0 left-0 z-10">
    <PromotionBar />
    <NavBar />
  </div>
  <div class="flex mt-[160px]" id="categoryPage">
    <SidebarComponent class="w-1/4"/>
    <div class="search-results w-3/4 p-4">
      <h1 class="text-2xl font-bold mb-4">Search Results for "{{ query }}"</h1>
      <div v-if="filteredProducts.length">
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
      </div>
      <p v-else class="text-red-600 text-lg">No products found for "{{ query }}"</p>
    </div>
  </div>
  <PopupComp :img="cartImg" header="item has been added to your cart" subtext="Click here to continue shopping" blurContainer="categoryPage" blurClass="categoryPage-blur" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '@/components/LandingPageComponents/NavBar.vue';
import PromotionBar from '@/components/LandingPageComponents/PromotionBar.vue';
import SidebarComponent from '@/components/ProductCatalogComponent/SidebarComponent.vue';
import ProductGrid from '@/components/ProductCatalogComponent/ProductGrid.vue';
import { useProductStore } from '@/stores/product';
import PopupComp from '@/components/checkoutComponents/popupComp.vue';
import cartImg from '@/assets/landPage2Img/addToCart.png';

const route = useRoute();
const query = computed<string>(() => (route.query.q as string) || '');
const productStore = useProductStore();

const filteredProducts = computed(() => {
  return productStore.products.filter(product => {
    const lowerCaseQuery = query.value.toLowerCase();
    return product.category.toLowerCase().includes(lowerCaseQuery) || product.name.toLowerCase().includes(lowerCaseQuery);
  });
});

const currentPage = ref(1);
const itemsPerPage = 8;

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredProducts.value.slice(start, start + itemsPerPage);
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

<style scoped>
/* Add any additional styles here */
</style>

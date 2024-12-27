<template>
  <div class="flex">
    <SidebarComponent />

    <main class="w-3/4 p-6 bg-gray-100">
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
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ControllerPage',
};
</script>

<script setup lang="ts">
import SidebarComponent from "@/components/ProductCatalogComponent/SidebarComponent.vue";
import ProductGrid from "@/components/ProductCatalogComponent/ProductGrid.vue";
import { ref, computed } from "vue";

interface Product {
  id: number;
  name: string;
  tag: string;
  image: string;
  reviews: number;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "PS2 Controller",
    tag: "HOT",
    image: "src/assets/landPage2Img/Controller/ps2.jpg",
    reviews: 230,
    price: 30
  },
  {
    id: 2,
    name: "DualSense Fortnite Edition",
    tag: " ",
    image: "src/assets/landPage2Img/Controller/DualSenseFortniteEdition.jpg",
    reviews: 523,
    price: 75
  },
  {
    id: 3,
    name: "Sony DualSense - Blue",
    tag: "",
    image: "src/assets/landPage2Img/Controller/SonyDualSense-Blue.jpg",
    reviews: 401,
    price: 75
  },
  {
    id: 4,
    name: "Sony PS5 DualSense",
    tag: "BEST DEALS",
    image: "src/assets/landPage2Img/Controller/SonyPS5DualSense.jpg",
    reviews: 1006,
    price: 63
  },
  {
    id: 5,
    name: "Razer Wolverine V2",
    tag: "",
    image: "src/assets/landPage2Img/Controller/RazerWolverineV2.jpg",
    reviews: 1761,
    price: 45
  },
  {
    id: 6,
    name: "PDP Xbox REMATCH GLOW",
    tag: "HOT",
    image: "src/assets/landPage2Img/Controller/PDPXboxREMATCHGLOW.jpg",
    reviews: 9021,
    price: 30
  },

];

const currentPage = ref(1);
const itemsPerPage = 12;

const totalPages = computed(() => Math.ceil(products.length / itemsPerPage));

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return products.slice(start, start + itemsPerPage);
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

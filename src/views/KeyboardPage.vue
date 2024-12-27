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
  name: 'KeyboardPage',
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
    name: "AULA F99 Wireless Mechanical Keyboard",
    tag: "HOT",
    image: "src/assets/landPage2Img/Keyboard/AULAF99.jpg",
    reviews: 120,
    price: 83
  },
  {
    id: 2,
    name: "ASUS ROG Azoth",
    tag: "HOT",
    image: "src/assets/landPage2Img/Keyboard/ASUSROGAzoth.jpg",
    reviews: 523,
    price: 210
  },
  {
    id: 3,
    name: "EPOMAKER x Aula F75",
    tag: "",
    image: "src/assets/landPage2Img/Keyboard/EPOMAKERxAulaF75.jpg",
    reviews: 501,
    price: 71
  },
  {
    id: 4,
    name: "nuphy Halo75 V2",
    tag: "BEST DEALS",
    image: "src/assets/landPage2Img/Keyboard/nuphyHalo75-V2.jpg",
    reviews: 1000,
    price: 150
  },
  {
    id: 5,
    name: "Keychron V3 Max",
    tag: "",
    image: "src/assets/landPage2Img/Keyboard/KeychronV3Max.jpg",
    reviews: 761,
    price: 109
  },
  {
    id: 6,
    name: "KEMOVE K87 Wireless",
    tag: "HOT",
    image: "src/assets/landPage2Img/Keyboard/KEMOVEK87Wireless.jpg",
    reviews: 91,
    price: 49
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

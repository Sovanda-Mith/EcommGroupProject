<template>
  <PromotionBar />
  <NavBar />
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
  name: 'MonitorPage',
};
</script>

<script setup lang="ts">
import NavBar from '@/components/LandingPageComponent/NavBar.vue';
import PromotionBar from '@/components/LandingPageComponent/PromotionBar.vue';
import SidebarComponent from "@/components/ProductCatalogComponent/SidebarComponent.vue";
import ProductGrid from "@/components/ProductCatalogComponent/ProductGrid.vue";
import { ref, computed } from "vue";

interface Product {
  id: number;
  name: string;
  tag: string;
  type: string;
  image: string;
  reviews: number;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Amazon Basics 24 Inch",
    tag: "HOT",
    type: "monitor",
    image: "/public/assets/landPage2Img/Monitor/AmazonBasics24Inch.jpg",
    reviews: 420,
    price: 129.99
  },
  {
    id: 2,
    name: "SANSUI 24 Inch Monitor",
    tag: "HOT",
    type: "monitor",
    image: "/public/assets/landPage2Img/Monitor/SANSUI24InchMonitor.jpg",
    reviews: 423,
    price: 179.99
  },
  {
    id: 3,
    name: "KOORUI 24-inch Computer Monitor",
    tag: "",
    type: "monitor",
    image: "/public/assets/landPage2Img/Monitor/KOORUI24-inchComputerMonitor.jpg",
    reviews: 501,
    price: 84.99
  },
  {
    id: 4,
    name: "DELL 24inch PRO P2419H IPS",
    tag: "BEST DEALS",
    type: "monitor",
    image: "/public/assets/landPage2Img/Monitor/DELL24inchPROP2419HIPS.jpg",
    reviews: 800,
    price: 99.99
  },
  {
    id: 5,
    name: "24 Inch Gaming Monitor",
    tag: "",
    type: "monitor",
    image: "/public/assets/landPage2Img/Monitor/24InchGamingMonitor.jpg",
    reviews: 761,
    price: 89.99
  },
  {
    id: 6,
    name: "KTC 24 Gaming Monitor",
    tag: "HOT",
    type: "monitor",
    image: "/public/assets/landPage2Img/Monitor/KTC24GamingMonitor.jpg",
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

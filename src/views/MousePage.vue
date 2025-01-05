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
  name: 'MousePage',
};
</script>

<script setup lang="ts">
import NavBar from '@/components/LandingPageComponents/NavBar.vue';
import PromotionBar from '@/components/LandingPageComponents/PromotionBar.vue';
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
    name: "INPHIC Bluetooth Mouse",
    tag: "HOT",
    image: "src/assets/landPage2Img/Mouse/INPHICBluetoothMouse.jpg",
    reviews: 10,
    price: 19.99
  },
  {
    id: 2,
    name: "Bluetooth Wireless Mouse",
    tag: "HOT",
    image: "src/assets/landPage2Img/Mouse/BluetoothWirelessMouse.jpg",
    reviews: 123,
    price: 16.99
  },
  {
    id: 3,
    name: "Lenovo Bluetooth Silent Mouse",
    tag: "",
    image: "src/assets/landPage2Img/Mouse/LenovoBluetoothSilentMouse.jpg",
    reviews: 501,
    price: 19.99
  },
  {
    id: 4,
    name: "USB Mouse Wireless",
    tag: "BEST DEALS",
    image: "src/assets/landPage2Img/Mouse/USBMouseWireless.jpg",
    reviews: 100,
    price: 9.49
  },
  {
    id: 5,
    name: "Razer Basilisk V3",
    tag: "",
    image: "src/assets/landPage2Img/Mouse/RazerBasiliskV3.jpg",
    reviews: 361,
    price: 39.99
  },
  {
    id: 6,
    name: "ASUS ROG Chakram",
    tag: "HOT",
    image: "src/assets/landPage2Img/Mouse/ASUSROGChakram.jpg",
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

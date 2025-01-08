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
  </main>
</template>

<script lang="ts">
export default {
  name: 'MonitorPage',
};
</script>

<script setup lang="ts">
import ProductGrid from "@/components/ProductCatalogComponent/ProductGrid.vue";
import { ref, computed } from "vue";

import { useProductStore } from '@/stores/product';
const ProductStore = useProductStore();

// const allProducts=[
//   //monitor
//   {
//     productId: 1,
//     name: "Amazon Basics 24 Inch",
//     price: 129.99,
//     category: "Monitor",
//     description: "Amazon Basics 24 Inch Monitor",
//     image: "src/assets/landPage2Img/Monitor/AmazonBasics24Inch.jpg",
//     discount:10,
//     tag: "HOT",
//     reviewsNum: 420,

//   },
//   {
//     productId: 2,
//     name: "KOORUI 24-inch Computer Monitor",
//     price: 84.99,
//     category: "Monitor",
//     description: "KOORUI 26-inch Computer Monitor",
//     image: "src/assets/landPage2Img/Monitor/KOORUI24-inchComputerMonitor.jpg",
//     discount: 10,
//     tag: "",
//     reviewsNum: 501
//   },
//   {
//     productId: 3,
//     name: "DELL 24inch PRO P2419H IPS",
//     price: 99.99,
//     category: "Monitor",
//     description: "DELL 24inch PRO P2419H IPS",
//     image: "src/assets/landPage2Img/Monitor/DELL24inchPROP2419HIPS.jpg",
//     discount: 10,
//     tag: "BEST DEALS",
//     reviewsNum: 800
//   },
//   {
//     productId: 4,
//     name: "24 Inch Gaming Monitor",
//     price: 89.99,
//     category: "Monitor",
//     description: "24 Inch Gaming Monitor",
//     image: "src/assets/landPage2Img/Monitor/24InchGamingMonitor.jpg",
//     discount: 10,
//     tag: "",
//     reviewsNum: 761
//   },
//   {
//     productId: 5,
//     name: "KTC 24 Gaming Monitor",
//     price: 49,
//     category: "Monitor",
//     description: "KTC 24 Gaming Monitor",
//     image: "src/assets/landPage2Img/Monitor/KTC24GamingMonitor.jpg",
//     discount: 10,
//     tag: "HOT",
//     reviewsNum: 91
//   },
//   {
//     productId: 2,
//     name: "KOORUI 24-inch Computer Monitor",
//     price: 84.99,
//     category: "Monitor",
//     description: "KOORUI 26-inch Computer Monitor",
//     image: "src/assets/landPage2Img/Monitor/KOORUI24-inchComputerMonitor.jpg",
//     discount: 10,
//     tag: "",
//     reviewsNum: 501
//   },
//   {
//     productId: 1,
//     name: "Amazon Basics 26 Inch",
//     price: 129.99,
//     category: "Monitor",
//     description: "Amazon Basics 24 Inch Monitor",
//     image: "src/assets/landPage2Img/Monitor/AmazonBasics24Inch.jpg",
//     discount:10,
//     tag: "HOT",
//     reviewsNum: 420,

//   },

//   {
//     productId: 3,
//     name: "DELL 24inch PRO P2419H IPS",
//     price: 99.99,
//     category: "Monitor",
//     description: "DELL 24inch PRO P2419H IPS",
//     image: "src/assets/landPage2Img/Monitor/DELL24inchPROP2419HIPS.jpg",
//     discount: 10,
//     tag: "BEST DEALS",
//     reviewsNum: 800
//   },
//   {
//     productId: 4,
//     name: "24 Inch Gaming Monitor",
//     price: 89.99,
//     category: "Monitor",
//     description: "24 Inch Gaming Monitor",
//     image: "src/assets/landPage2Img/Monitor/24InchGamingMonitor.jpg",
//     discount: 10,
//     tag: "",
//     reviewsNum: 761
//   },
//   {
//     productId: 5,
//     name: "KTC 24 Gaming Monitor",
//     price: 49,
//     category: "Monitor",
//     description: "KTC 24 Gaming Monitor",
//     image: "src/assets/landPage2Img/Monitor/KTC24GamingMonitor.jpg",
//     discount: 10,
//     tag: "HOT",
//     reviewsNum: 91
//   },
//   //audio
//   {
//     productId: 6, // continuing from previous
//     name: "Soundcore Anker Life Q20 Hybrid",
//     price: 50,
//     category: "Audio",
//     description: "Hybrid Active Noise Cancelling Over-Ear Headphones",
//     image: "src/assets/landPage2Img/Audio/SoundcoreAnker.jpg",
//     discount: 10,
//     tag: "HOT",
//     reviewsNum: 520
//   },
//   {
//     productId: 7, // continuing from previous
//     name: "MOVSSOU E7",
//     price: 46.99,
//     category: "Audio",
//     description: "Noise Cancelling Over-Ear Headphones",
//     image: "src/assets/landPage2Img/Audio/MOVSSOUE7.jpg",
//     discount: 10,
//     tag: "HOT",
//     reviewsNum: 123
//   },
//   {
//     productId: 8, // continuing from previous
//     name: "SteelSeries Arctis Nova 7P",
//     price: 149.99,
//     category: "Audio",
//     description: "Premium Wireless Gaming Headset",
//     image: "src/assets/landPage2Img/Audio/SteelSeriesArctisNova7P.jpg",
//     discount: 5,
//     tag: "",
//     reviewsNum: 401
//   },
//   {
//     productId: 9, // continuing from previous
//     name: "Turtle Beach Recon 70",
//     price: 39.99,
//     category: "Audio",
//     description: "Lightweight Over-Ear Gaming Headset",
//     image: "src/assets/landPage2Img/Audio/TurtleBeachRecon70.jpg",
//     discount: 15,
//     tag: "BEST DEALS",
//     reviewsNum: 100
//   },
//   {
//     productId: 10, // continuing from previous
//     name: "ASUS ROG Delta II Wireless",
//     price: 229.99,
//     category: "Audio",
//     description: "High-End Wireless Gaming Headset",
//     image: "src/assets/landPage2Img/Audio/ASUSROGDeltaII.jpg",
//     discount: 5,
//     tag: "",
//     reviewsNum: 761
//   },
//   {
//     productId: 11, // continuing from previous
//     name: "Alienware Pro Wireless",
//     price: 229.99,
//     category: "Audio",
//     description: "Premium Wireless Gaming Headset by Alienware",
//     image: "src/assets/landPage2Img/Audio/AlienwareProWireless.jpg",
//     discount: 10,
//     tag: "HOT",
//     reviewsNum: 91
//   }
// ];

// onMounted(() => {
//   if (ProductStore.products.length === 0) {
//     ProductStore.addMultipleProducts(allProducts);
//   }
// });
//for each category
const mouseProduct = ProductStore.getProductByCategory('Mouse');

const currentPage = ref(1);
const itemsPerPage = 5;

const totalPages = computed(() => Math.ceil(mouseProduct.length / itemsPerPage));

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return mouseProduct.slice(start, start + itemsPerPage);
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

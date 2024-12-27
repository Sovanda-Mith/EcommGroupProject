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
  name: 'AudioPage',
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
    name: "Soundcore Anker Life Q20 Hybrid",
    tag: "HOT",
    image: "src/assets/landPage2Img/Audio/SoundcoreAnker.jpg",
    reviews: 520,
    price: 50
  },
  {
    id: 2,
    name: "MOVSSOU E7",
    tag: "HOT",
    image: "src/assets/landPage2Img/Audio/MOVSSOUE7.jpg",
    reviews: 123,
    price: 46.99
  },
  {
    id: 3,
    name: "SteelSeries Arctis Nova 7P",
    tag: "",
    image: "src/assets/landPage2Img/Audio/SteelSeriesArctisNova7P.jpg",
    reviews: 401,
    price: 149.99
  },
  {
    id: 4,
    name: "Turtle Beach Recon 70",
    tag: "BEST DEALS",
    image: "src/assets/landPage2Img/Audio/TurtleBeachRecon70.jpg",
    reviews: 100,
    price: 39.99
  },
  {
    id: 5,
    name: "ASUS ROG Delta II Wireless",
    tag: "",
    image: "src/assets/landPage2Img/Audio/ASUSROGDeltaII.jpg",
    reviews: 761,
    price: 229.99
  },
  {
    id: 6,
    name: "Alienware Pro Wireless",
    tag: "HOT",
    image: "src/assets/landPage2Img/Audio/AlienwareProWireless.jpg",
    reviews: 91,
    price: 229.99
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

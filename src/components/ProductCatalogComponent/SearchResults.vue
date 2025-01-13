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
        <ProductGrid :products="filteredProducts" />
      </div>
      <p v-else class="text-red-600 text-lg">No products found for "{{ query }}"</p>
    </div>
  </div>
  <PopupComp :img="cartImg" header="item has been added to your cart" subtext="Click here to continue shopping" blurContainer="categoryPage" blurClass="categoryPage-blur" />

</template>

<script setup lang="ts">
import { computed } from 'vue';
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
import { type productState } from '@/stores/product';

type Product = productState;

const allProducts: Product[] = productStore.allProducts;

const filteredProducts = computed<Product[]>(() =>
  allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.value.toLowerCase()) ||
    product.category.toLowerCase().includes(query.value.toLowerCase())
  )
);
</script>


<style scoped>
.search-results {
  padding: 20px;
}
img {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 150px;
}
</style>

<template>
  <PromotionBar />
  <NavBar />
  <div class="flex" id="categoryPage">
    <SidebarComponent />
    <Router-view />
  </div>
  <PopupComp :img="cartImg" header="item has been added to your cart" subtext="Click here to continue shopping" blurContainer="categoryPage" blurClass="categoryPage-blur" />
</template>

<script lang="ts">
export default {
  name: 'MonitorPage',
};
</script>

<script setup lang="ts">

import NavBar from '@/components/LandingPageComponents/NavBar.vue';
import PromotionBar from '@/components/LandingPageComponents/PromotionBar.vue';
import SidebarComponent from "@/components/ProductCatalogComponent/SidebarComponent.vue";
import cartImg from '@/assets/landPage2Img/addToCart.png';
import PopupComp from '@/components/checkoutComponents/popupComp.vue';
</script>
<style>
.categoryPage-blur {
  opacity:35%;
}
</style>

<template>
  <PromotionBar />
  <NavBar />
  <div class="flex">
    <SidebarComponent />
    <Router-view />
  </div>
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



</script>

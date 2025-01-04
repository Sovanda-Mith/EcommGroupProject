<template>
  <PromotionBar />
  <NavBar />
  <!-- Big Panel -->
  <div class="flex items-center bg-black">
    <img
      src="../assets/landPageImg/alt-arrow-left-svgrepo-com.svg"
      alt="left icon"
      class="w-[50px] h-[50px]"
    />
    <img
      src="../assets/landPageImg/mechanicalkeyboard1.avif"
      alt="mechanicalkeyboard1"
      class="w-1/2"
    />
    <img
      src="../assets/landPageImg/mechanicalkeyboard2.avif"
      alt="mechanicalkeyboard2"
      class="w-1/2"
    />
    <img
      src="../assets/landPageImg/alt-arrow-right-svgrepo-com.svg"
      alt="right icon"
      class="w-[50px] h-[50px]"
    />
  </div>
  <!-- Shop Now Card -->
  <div class="flex justify-evenly mt-5">
    <ShopNowCard
      img="../../src/assets/landPageImg/budgetkeyboard.avif"
      title="Best Budget Mouse"
      description="Stylish mouse even in budget"
    />
    <ShopNowCard
      img="../../src/assets/landPageImg/microphone.avif"
      title="Up to 50% Off Markdowns"
      description="Special Deals | Code: IPB3"
    />
    <ShopNowCard
      img="../../src/assets/landPageImg/streamdeck.avif"
      title="Hottest Sell!!!"
      description="A must have product for every streamer"
    />
  </div>
  <!-- Featured Products -->
  <FeaturedProducts />
</template>

<script setup lang="ts">

// import NavBar from '@/components/LandingPageComponent/NavBar.vue';
// import PromotionBar from '@/components/LandingPageComponent/PromotionBar.vue';
import FeaturedProducts from '@/components/LandingPageComponents/FeaturedProducts.vue'
import NavBar from '@/components/LandingPageComponents/NavBar.vue'
import PromotionBar from '@/components/LandingPageComponents/PromotionBar.vue'
import ShopNowCard from '@/components/LandingPageComponents/ShopNowCard.vue'

</script>

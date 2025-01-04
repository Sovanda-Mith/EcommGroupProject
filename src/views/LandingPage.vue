<template>
  <div class="bg-[#cbd7d1] flex flex-col w-full">
    <!-- Header -->
    <div class="w-full fixed">
      <PromotionBar />
      <NavBar />
    </div>
    <!-- Big Panel -->
    <div class="flex items-center bg-black pt-32">
      <img
        src="../assets/landPageImg/alt-arrow-left-svgrepo-com.svg"
        alt="left icon"
        class="w-[50px] h-[50px]"
        @click="handlePanelChange"
      />
      <div class="flex w-full" v-if="togglePanel">
        <img src="../assets/landPageImg/monitorpanel1.avif" alt="Monitor Panel 1" class="w-1/3" />
        <img src="../assets/landPageImg/monitorpanel2.avif" alt="Monitor Panel 2" class="w-1/3" />
        <img src="../assets/landPageImg/monitorpanel3.avif" alt="Monitor Panel 3" class="w-1/3" />
      </div>
      <div class="flex w-full" v-else>
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
      </div>
      <img
        src="../assets/landPageImg/alt-arrow-right-svgrepo-com.svg"
        alt="right icon"
        class="w-[50px] h-[50px]"
        @click="handlePanelChange"
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

    <!--- Shop By Brand -->
    <div class="flex flex-col space-y-4 ml-4 mr-4">
      <h1 class="text-[64px] font-semibold my-4">Shop by Brands</h1>
      <div class="grid grid-cols-3 h-1/2 gap-x-3">
        <img
          src="../assets/landPageImg/applebrand.jpg"
          alt="Apple Brand"
          class="col-span-2 w-full h-[500px] rounded-md"
        />
        <img
          src="../assets/landPageImg/logitechbrand.jpg"
          alt="Logitech Brand"
          class="w-full h-[500px] rounded-md"
        />
      </div>
      <div class="grid grid-cols-2 gap-x-3">
        <img
          src="../assets/landPageImg/samsungbrand.jpg"
          alt="Samsung Brand"
          class="w-full h-[500px] rounded-md"
        />
        <img
          src="../assets/landPageImg/sonybrand.jpg"
          alt="Sony Brand"
          class="w-full h-[500px] rounded-md"
        />
      </div>
    </div>
    <!-- Featured Products -->
    <FeaturedProducts class="mb-5" />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import FeaturedProducts from '@/components/LandingPageComponents/FeaturedProducts.vue'
import NavBar from '@/components/LandingPageComponents/NavBar.vue'
import PromotionBar from '@/components/LandingPageComponents/PromotionBar.vue'
import ShopNowCard from '@/components/LandingPageComponents/ShopNowCard.vue'
import Footer from '@/components/LandingPageComponents/FooterBar.vue'
import { ref } from 'vue'
const togglePanel = ref(false)
const handlePanelChange = () => {
  togglePanel.value = !togglePanel.value
}
</script>

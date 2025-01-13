<script setup lang="ts">

import NavBar from '@/components/LandingPageComponents/NavBar.vue';
import PromotionBar from '@/components/LandingPageComponents/PromotionBar.vue';
import PopupComp from '@/components/checkoutComponents/popupComp.vue';
import '@/assets/main.css';
import completeImg from '@/assets/cartImg/completeImg.jpeg';

const hidePopup = () => {
  const popup = document.getElementById('couponPopup')
  const blurPage=document.getElementById('paymentPage')

  blurPage?.classList.remove('paymentPage-blur')
  popup?.classList.remove('open-popup')
}
</script>

<template>
  <PromotionBar/>
  <NavBar/>
  <div class="w-100% min-h-screen bg-[#A1A1A1] flex flex-col justify-center items-center">
    <div class="relative cartContainer w-[1292.2px] h-[880px] rounded-[50px] bg-white" id="paymentPage">
      <router-view></router-view>
    </div>

  </div>
  <PopupComp :img="completeImg" header="Thanks you for your purchase" subtext="Your order has been placed successfully." blurContainer="paymentPage" blurClass="paymentPage-blur"></PopupComp>

  <div
    id="couponPopup"
    class="popup bg-white w-[500px] h-[400px] gap-4 border-solid border-[1px] border-black rounded-[30px] flex flex-col justify-center items-center"
    style="font-family: 'SF-Pro', sans-serif; font-weight: 300"
  >
    <img src="@/assets/cartImg/coupon.png" alt="coupon" class="w-[150px]">
    <h2 class="text-[28px] font-bold">Coupon has been applied</h2>
    <p class="text-[20px]">You got a great deal</p>
    <button
      id="closePopup"
      class="w-[150px] h-[50px] border-solid border-[1px] border-black rounded-[30px] font-bold text-[20px]"
      @click="hidePopup()"
    >
      Okay, Got it
    </button>
  </div>

</template>
<style scoped>
/* font import */

/* Import the font using @import */
/* Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
/* Kdam Thmor Pro */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kdam+Thmor+Pro&display=swap');


.cartTitle{
    font-family: 'SF-Pro', sans-serif;
    font-weight: 500;
    font-size: 24px;
}

</style>

<script lang="ts">

</script>

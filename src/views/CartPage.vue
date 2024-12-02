<script setup lang="ts">

import productIncart from '../components/checkoutComponents/productIncart.vue';
import backBtnCart from '../components/checkoutComponents/backBtnCart.vue';
import forwardBtnCart from '../components/checkoutComponents/forwardBtnCart.vue';
import headerCart from '../components/checkoutComponents/headerCart.vue';
import NavBar from '../components/LandingPageComponents/NavBar.vue';
import PromotionBar from '../components/LandingPageComponents/PromotionBar.vue';

</script>

<template>
  <PromotionBar/>
  <NavBar/>
  <div class="w-100% h-[1024px] bg-[#A1A1A1] flex flex-col justify-center items-center">
    <div class="relative cartContainer w-[1292.2px] h-[820px] rounded-[50px] bg-white">
        <headerCart title="Your Shopping Cart"></headerCart>
        <div class="w-100% flex gap-[204px] justify-center mt-[25px] pb-[20px]">
            <div class="cartTitle flex gap-1">Product Name <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z" clip-rule="evenodd"/>
                </svg>
            </div>
            <div class="cartTitle">Quantity</div>
            <div class="cartTitle flex gap-1">Discount <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"/>
                </svg>
            </div>
            <div class="cartTitle flex gap-1">Subtotal<svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
                </svg>
            </div>
        </div>

        <!-- itemList -->
        <div class="w-100% max-h-[421px] flex flex-col items-center justify-start overflow-y-scroll scroll-p-2">
            <productIncart v-for="product in products" :key="product.productName" :img="product.img" :productName="product.productName" :discount="product.discount" :finalPrice="product.finalPrice"></productIncart>
        </div>

        <!-- backBtn -->
        <backBtnCart class="absolute bottom-[30px] left-[30px]" btnText="Back To Shopping" gap="8px"></backBtnCart>

        <!-- total&forward -->
        <div class="absolute right-[78px] bottom-[15px] mt-[23px] w-[400px] h-[200px] flex flex-col items-center">
            <div class="flex justify-center items-center gap-[100px]">
                <div class="flex flex-col gap-[17px] w-[220px]">
                    <div class="totalText ">Subtotal</div>
                    <div class="totalText ">Shipping & Handling</div>
                    <div class="totalTextBold font-bold text-[20px] ">Total</div>
                </div>
                <div class="flex flex-col gap-[17px]">
                    <div class="totalText">$97.00</div>
                    <div class="totalText ">$19.99</div>
                    <div class="totalTextBold text-[24px] font-bold">$120.00</div>
                </div>
            </div>
            <div>
                <forwardBtnCart  btnText="Secure Check Out" width="210px" height="40px" gap="15px" padleft="15px" padright="15px"></forwardBtnCart>
                <p class="text-[12px] mt-1">By clicking "Purchase", you accept the terms.</p>
            </div>
        </div>
    </div>
  </div>



</template>
<style scoped>
/* font import */

/* Import the font using @import */
/* Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
/* Kdam Thmor Pro */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kdam+Thmor+Pro&display=swap');

@font-face {
  font-family: 'SF-Pro';
  src: url('../assets/fonts/SF-Pro.ttf') format('SF-Pro');
  font-weight: normal;
  font-style: normal;
}
.totalText{
    font-family: 'SF-Pro', sans-serif;
    font-weight: 400;
    font-size: 24px;

}
.totalTextBold{
    font-family: 'SF-Pro', sans-serif;
    font-weight: 800;
}
.cartTitle{
    font-family: 'SF-Pro', sans-serif;
    font-weight: 500;
    font-size: 24px;
}

</style>

<script lang="ts">
export default {
  name: 'App',
  components: {

    headerCart

  },
  data() {
    return {
      products:[
      {img: "../src/assets/cartImg/headphones.webp", productName: "Bluetooth speakers", discount: "15%", finalPrice: "$ 59"},
      {img: "../src/assets/cartImg/headphones.webp", productName: "portable amplifier", discount: "20%", finalPrice: "$ 89"},
      {img: "../src/assets/cartImg/headphones.webp", productName: "wired earbuds", discount: "12%", finalPrice: "$ 25"},
      {img: "../src/assets/cartImg/headphones.webp", productName: "audio mixer", discount: "18%", finalPrice: "$ 199"},
      {img: "../src/assets/cartImg/headphones.webp", productName: "USB microphone", discount: "25%", finalPrice: "$ 74"},
      {img: "../src/assets/cartImg/headphones.webp", productName: "soundbar", discount: "10%", finalPrice: "$ 149"},
      {img: "../src/assets/cartImg/headphones.webp", productName: "karaoke machine", discount: "22%", finalPrice: "$ 129"},
      {img: "../src/assets/cartImg/headphones.webp", productName: "DJ controller", discount: "30%", finalPrice: "$ 349"},
      {img: "../src/assets/cartImg/headphones.webp", productName: "smart speaker", discount: "15%", finalPrice: "$ 99"},
      {img: "../src/assets/cartImg/headphones.webp", productName: "home theater system", discount: "35%", finalPrice: "$ 499"},
      ],
    }
  }
}
</script>

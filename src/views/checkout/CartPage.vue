<script setup lang="ts">
import productIncart from '@/components/checkoutComponents/productIncart.vue'
import backBtnCart from '@/components/checkoutComponents/backBtnCart.vue'
import forwardBtnCart from '@/components/checkoutComponents/forwardBtnCart.vue'
import headerCart from '@/components/checkoutComponents/headerCart.vue'
import TotalComp from '@/components/checkoutComponents/totalComp.vue'
import '@/assets/main.css'

import { useCartProductStore } from '@/stores/cartProduct'
const cartProductStore = useCartProductStore()
</script>
<template>
  <headerCart title="Your Shopping Cart"></headerCart>
  <div class="w-100% flex gap-[204px] justify-center mt-[25px] pb-[20px]">
    <div class="cartTitle flex gap-1">
      Product Name
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="black"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div class="cartTitle">Quantity</div>
    <div class="cartTitle flex gap-1">
      Discount
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
        />
      </svg>
    </div>
    <div class="cartTitle flex gap-1">
      Subtotal<svg
        class="w-5 h-5 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
        />
      </svg>
    </div>
  </div>

  <!-- itemList -->
  <div
    class="w-100% max-h-[421px] flex flex-col items-center justify-start overflow-y-scroll scroll-p-2"
  >

    <productIncart
      v-for="productCart in cartProductStore.allCartProducts"
      :key="productCart.product.productId"
      :img="productCart.product.image"
      :productName="productCart.product.name"
      :discount="productCart.product.discount"
      :beforeDiscount="cartProductStore.eachProductBeforeDiscount(productCart.product.productId)"
      :finalPrice="cartProductStore.eachProductTotalValue(productCart.product.productId)"
      :quantity="productCart.quantity"
      :product="productCart.product"
    ></productIncart>
  </div>

  <!-- backBtn -->
  <backBtnCart
    class="absolute bottom-[30px] left-[30px]"
    btnText="Back To Shopping"
    gap="8px"
    to="/"
  ></backBtnCart>

  <!-- total&forward -->
  <div
    class="absolute right-[78px] bottom-[15px] mt-[23px] w-[500px] h-[220px] flex flex-col items-center"
  >
    <TotalComp
      :subTotal="cartProductStore.subtotalCartValue"
      :shipping="cartProductStore.getShippingCost"
      :total="cartProductStore.getTotalCost"
    />
    <div class="flex flex-col items-center">
      <forwardBtnCart
        to="/checkout/orderInfo"
        btnText="Secure Check Out"
        width="280px"
        height="50px"
        gap="15px"
        padleft="15px"
        padright="15px"
      ></forwardBtnCart>
      <p class="text-[12px] mt-1">By clicking "Purchase", you accept the terms.</p>
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

.cartTitle {
  font-family: 'SF-Pro', sans-serif;
  font-weight: 500;
  font-size: 24px;
}


</style>

<script lang="ts">
export default {
  name: 'App',
  components: {
    headerCart,
  },
}
</script>

<script setup lang="ts">
import headerCart from '@/components/checkoutComponents/headerCart.vue';
import { useCartProductStore } from '@/stores/cartProduct'
import { usePaymentStore } from '@/stores/payment';
import completeImg from '@/assets/cartImg/completeImg.jpeg';
import BackBtnCart from '@/components/checkoutComponents/backBtnCart.vue';


const cartProductStore = useCartProductStore()
const paymentStore = usePaymentStore()

const clearPaymentInfo =(): void => {
  paymentStore.clearPayment()
}
</script>
<template>
  <headerCart title="Order Placed Successfully"/>
  <div class="flex flex-col justify-start items-center w-full h-full gap-[30px] pt-4">

    <img :src="completeImg" alt="success" class="w-[300px] h-[300px]">
    <h2>Please prepare your cash before hand when the package arrives</h2>
    <div class="totalTextSuccess flex gap-[10px]">
      <div>The Total of your order is</div>
      <div class="font-bold">${{cartProductStore.getTotalCost}}</div>
    </div>
    <BackBtnCart @click="clearPaymentInfo" class="btnText" btnText="Back To Home Page" gap="8px" to="/"/>
  </div>
</template>
<style>
h2{
  font-family: 'SF-Pro', sans-serif;
  font-weight: 400;
  font-size: 34px;
}
.totalTextSuccess{
  font-family: 'SF-Pro', sans-serif;
  font-weight: 400;
  font-size: 34px;
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

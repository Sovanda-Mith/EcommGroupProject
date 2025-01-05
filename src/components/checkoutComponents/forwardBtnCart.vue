<template>
  <button
    :style="{
      width: width,
      height: height,
      paddingLeft: padleft,
      paddingRight: padright,
      gap: gap,
    }"
    @click="navigateTo"
    :onclick="onclick"
    :type="type"
    class="btnForward bg-[#82C89F] rounded-[48px] text-white font-semibold text-[22px] flex justify-center items-center"


  >
    {{ btnText }}
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.40356 12.1285L17.4036 12.1285" stroke="white" stroke-linecap="round" />
      <path
        d="M14.4036 15.1285L17.4036 12.1285L14.4036 9.12854"
        stroke="white"
        stroke-linecap="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.90356 12.1285C2.90356 17.6514 7.38072 22.1285 12.9036 22.1285C18.4264 22.1285 22.9036 17.6514 22.9036 12.1285C22.9036 6.60569 18.4264 2.12854 12.9036 2.12854C7.38072 2.12854 2.90356 6.60569 2.90356 12.1285Z"
        stroke="white"
      />
    </svg>
  </button>
</template>
<script lang="ts">
import { usePaymentStore } from '@/stores/payment';

const paymentStore = usePaymentStore();

export default {
  name: 'forwardBtnCart',
  props: ['btnText', 'width', 'height', 'padleft', 'padright', 'gap',"to","type","onclick"],
  methods: {
    navigateTo() {
      if(this.to){
        this.$router.push(this.to)
      }
      console.log('Payment Store State:', {
        country : paymentStore.country,
        firstname: paymentStore.firstname,
        lastname: paymentStore.lastname,
        address: paymentStore.address,
        city: paymentStore.city,
        postalcode: paymentStore.postalcode,
        email: paymentStore.email,
        phonenumber: paymentStore.phonenumber,
        coupon: paymentStore.coupon,
        payment: paymentStore.payment,

        nameCard: paymentStore.nameCard,
        numberCard: paymentStore.numberCard,
        expDateCard: paymentStore.expDateCard,
        csvCard: paymentStore.csvCard,
      });
    },
  },
}

</script>
<style scoped>

.btnForward {
  font-family: 'SF-Pro', sans-serif;
  font-weight: 600;
}
</style>

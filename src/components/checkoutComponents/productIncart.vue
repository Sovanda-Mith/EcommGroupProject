<template>
    <div class="itemContainer pl-[10px] pr-[30px] pt-[10px] relative hoverEffectcheckout">
        <div class="flex gap-[20px] items-center ">
            <img :src="img" alt="" class="img">
            <div class="interFont text-black text-[20px] font-medium w-[200px]">{{ productName }}</div>
        </div>
        <div class="absolute left-[380px] w-[166.36px] h-[55px] rounded-[70px] flex justify-between items-center bg-[#CBD7D1] pl-[10px] pr-[10px]">
            <button @click="decreaseQuantity()"><svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.25 15.5H8.75" stroke="black" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 28C21.9036 28 27.5 22.4036 27.5 15.5C27.5 8.59644 21.9036 3 15 3C8.09644 3 2.5 8.59644 2.5 15.5C2.5 22.4036 8.09644 28 15 28Z" stroke="black"/>
                </svg>
            </button>
            <span class="interFont text-black text-[24px] font-bold">{{ quantity }}</span>
            <button @click="increaseQuantity()">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.25 15H8.75" stroke="black" stroke-linecap="round"/>
                <path d="M15 21.25V8.75" stroke="black" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="black"/>
                </svg>
            </button>
        </div>
        <div class="interFont absolute left-[710px] w-[100px] h-[55px] bg-[#CBD7D1] flex justify-center items-center text-black rounded-[70px] text-[24px]">{{ discount }}%</div>
        <!-- subtotal -->
        <div v-if="isDiscount">
          <div class="absolute left-[980px] flex gap-[15px]">
            <div class="interFont text-gray-500 text-[24px] line-through">${{ beforeDiscount }}</div>
            <div class="interFont text-black text-[24px]">${{ finalPrice }}</div>
          </div>
        </div>
        <div v-if="!isDiscount">
          <div class="absolute left-[1050px] flex gap-[15px]">
            <div class="interFont text-black text-[24px]">${{ finalPrice }}</div>
          </div>
        </div>

    </div>
</template>
<script lang="ts">
import { useCartProductStore } from '@/stores/cartProduct';
import { type productState } from '@/stores/product';

const cartProductStore = useCartProductStore();

export default {
  name: "productCart",
  props: {
    img: String,
    productName: String,
    discount: Number,
    finalPrice: Number,
    beforeDiscount: Number,
    quantity: Number,
    product: Object,
  },
  computed: {
    isDiscount() {
      if (this.product && typeof this.product === "object") { //check type
        return cartProductStore.isDiscount(this.product as productState);
      }
      return false;
    },
  },
  methods: {
    increaseQuantity() {
      if (this.product && typeof this.product === "object") { //check type
        cartProductStore.addToCart(this.product as productState);
        console.log("Product increased:", this.product);
      } else {
        console.error("Product is undefined or not a valid object");
      }
    },
    decreaseQuantity() {
      if (this.product && typeof this.product === "object") { //check type
        cartProductStore.reduceQuantity(this.product as productState);
        console.log("Product decreased:", this.product);
      } else {
        console.error("Product is undefined or not a valid object");
      }
    },

  },
};





</script>
<style scoped>
/* Rowdies */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kdam+Thmor+Pro&family=Rowdies:wght@300;400;700&display=swap');
/* SF-Pro */
@font-face {
  font-family: 'SF-Pro';
  src: url('../../assets/fonts/SF-Pro.ttf') format('SF-Pro');
  font-weight: normal;
  font-style: normal;
}
.img{
    width: 100px;
    height: 100px;
    object-fit: scale-down;
    border-radius: 15px;
}
.itemContainer{

    width: 1164px;
    height: 125.25px;
    display: flex;
    gap:182px;
    align-items: center;
    border-bottom: 1px solid black;

    padding-bottom: 40px;
    padding-top: 40px;

}
.interFont{
    font-family: 'SF-Pro', sans-serif;
}
.hoverEffectcheckout{
  transition: all 0.3s ease-in-out;
}
.hoverEffectcheckout:hover {
  transform: scale(1.04);
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>

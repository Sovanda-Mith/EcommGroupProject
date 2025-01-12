
<template>
  <div class="grid grid-cols-4 gap-6">
    <div
      v-for="product in products"
      :key="product.productId"
      class="bg-white p-4 border rounded-[20px] shadow-sm productGrid">
      <div v-if="product.discount" class="flag-discount">
        -{{ product.discount }}%
      </div>
      <!-- <span v-if="product.tag"
      class="[
          'text-xs px-2 py-1 rounded uppercase font-bold',
          product.tag === 'HOT' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
      ]">
        {{ product.tag }}
      </span> -->
      <img
        :src="product.image"
        :alt="product.name"
        class="my-4 w-full h-40 object-contain"
      />
      <h3 class="font-semibold text-base h-[50px]">{{ product.name }}</h3>
      <p class="text-yellow-500 text-sm">
        ★★★★☆ ({{ product.reviewsNum }})
      </p>
      <div class="flex justify-between items-center">
        <div>
          <p class="text-lg font-bold text-gray-800 mt-3">${{ Math.round((product.price - (product.price * product.discount) / 100)*100)/100 }}</p>
          <p class="text-lg font-bold text-gray-400 line-through">${{ product.price }}</p>
        </div>
        <button @click="addToCart(product)" class="w-[150px] h-[50px] bg-[#82C89F] text-white py-2 rounded mt-4 hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  </div>


</template>
<style>
.categoryPage-blur {
  opacity: 35%;
}
/* effect for each grid */
.productGrid{
  transition: all 0.3s ease-in-out;
}
.productGrid:hover {
  transform: scale(1.1);
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.flag-discount {
    border-radius: 10px 0 0 10px;
    color: #fff;
    font-weight: bold;
    display: block;
    float: left;
    padding: 10px 20px;
    background: #D84040;
    font-size: 20px;
    font-weight: 600;
    position: relative;
}
.flag-discount::before,
.flag-discount::after {
    content: "";
    position: absolute;
    left: 100%;
    width: 0;
    height: 0;
    border-style: solid;
    display: block;
}
.flag-discount::before {
    top: 0;
    border-width: 22px 15px 0 0;
    border-color: #D84040 transparent transparent transparent;
}
.flag-discount::after {
    bottom: 0;
    border-width: 0 15px 22px 0;
    border-color: transparent transparent #D84040 transparent;
}

</style>
<script setup lang="ts">
import {type productState } from '@/stores/product';
import { useCartProductStore } from '@/stores/cartProduct';

const cartProductStore = useCartProductStore();
defineProps<{
  products: productState[];
}>();


function addToCart(product: productState) {
  cartProductStore.addToCart(product);
  console.log(cartProductStore.allCartProducts);

  //for popup to activate
  const popup = document.getElementById('popup')
  const categoryPage = document.getElementById('categoryPage')

  popup?.classList.add('open-popup')
  categoryPage?.classList.add('categoryPage-blur')
}
</script>


<template>
  <PromotionBar />
  <NavBar />
    <main class="flex productDetailContainer" id="productDetailId">
      <div class="block w-full">
        <div class="m-10 flex review">
          <div class="flex">
            <div>
              <button
                @click="goBack()"
                class="button5 mb-5 text-black bg-gray-400 hover:bg-gray-400 rounded-lg px-4 py-2"
              ><i class="bi bi-arrow-left-short"></i>
                Back
              </button>
              <!-- Main Product Image -->
              <div role="tabpanel" aria-labelledby="product-image-tab">
                <img :src="currentProductImg" alt="Product image" class="h-96 w-full object-cover">
              </div>
              <!-- Thumbnail Images -->
              <div class="flex mt-2">

              </div>
            </div>
            <!-- Product Info Section -->
            <div class="ml-12 mt-10">
              <h1 class="text-3xl font-bold mb-5 font-sans">{{ currentProduct?.name }}</h1>
              <p class="my-3 font-serif ">{{ currentProduct?.description }}</p>
              <!-- <p class="font-bold text-2xl font-serif ">${{ currentProduct?.price }}</p> -->
              <div class="flex w-[100px] gap-5 items-center">
                <div v-if="currentProduct?.discount ?? 0" class="h-[50px] flag-discount">
                  -{{ currentProduct?.discount ?? 0 }}%
                </div>
                <div>
                  <p class="text-lg font-bold text-gray-800 mt-3">${{ Math.round(((currentProduct?.price ?? 0) - ((currentProduct?.price ?? 0) * (currentProduct?.discount ?? 0)) / 100) * 100) / 100 }}</p>
                  <p class="text-lg font-bold text-gray-400 line-through">${{ currentProduct?.price }}</p>
                </div>

              </div>

              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1">
                  <svg
                    v-for="n in currentProduct?.reviewsNum ? Math.round(currentProduct.reviewsNum / 100) : 0"
                    :key="n"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>

                  <span
                    class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                  >
                    {{ currentProduct?.reviewsNum }} reviews
                  </span>
                </div>
              </div>
              <form @submit.prevent>
                <!-- Quantity and Add to Cart -->
                <div class="flex  flex-col mt-3 gap-2">
                  <h4 class="text-[25px]"> Quantity </h4>

                  <div class="w-[166.36px] h-[55px] rounded-[70px] flex justify-between items-center border-black border-[1px] pl-[10px] pr-[10px]">
                    <button @click="decreaseQuantity()" class="border-white">
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.25 15.5H8.75" stroke="black" stroke-linecap="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 28C21.9036 28 27.5 22.4036 27.5 15.5C27.5 8.59644 21.9036 3 15 3C8.09644 3 2.5 8.59644 2.5 15.5C2.5 22.4036 8.09644 28 15 28Z" stroke="black"/>
                        </svg>
                    </button>
                    <span class="interFont text-black text-[24px] font-bold">{{ productQuantity }}</span>
                    <button @click="increaseQuantity()" class="border-white">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.25 15H8.75" stroke="black" stroke-linecap="round"/>
                        <path d="M15 21.25V8.75" stroke="black" stroke-linecap="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="black"/>
                        </svg>
                    </button>
                  </div>
                  <!-- non-null insertion -->
                  <button @click="addToCart(currentProduct!)" class="w-[150px] h-[50px] bg-[#82C89F] text-white py-2 rounded mt-4 hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>

        <!-- Additional Features Section -->
        <div class="additional-features mt-10">
          <div class="features-container flex justify-between items-center">

            <div class="feature text-center">
              <h4 class="feature-title font-bold">Wireless Controller</h4>
              <p class="feature-description">
                Wireless controller for PS5 consoles offers immersive haptic. All
                integrated into an iconic design.
              </p>
            </div>


            <div class="feature text-center">

              <h4 class="feature-title font-bold">Motion Sensor</h4>
              <p class="feature-description">
                Bring intuitive motion control to supported games with the
                built-in accelerometer and gyroscope.
              </p>
            </div>


            <div class="feature text-center">
              <h4 class="feature-title font-bold">FULLY PROGRAMMABLE G-KEYS</h4>
              <p class="feature-description">
                Five on-board buttons ready for any function you need.
              </p>
            </div>

            <!-- Share Section -->
            <div class="share text-center">
              <h4 class="font-bold font-sans">Share</h4>
              <div class="social-icons flex justify-center space-x-2 mt-2">
                <div class="social-icon cursor-pointer "><i class="bi bi-facebook"></i></div>
                <div class="social-icon cursor-pointer "><i class="bi bi-twitter-x"></i></div>
                <div class="social-icon cursor-pointer "><i class="bi bi-telegram"></i></div>
                <div class="social-icon cursor-pointer "><i class="bi bi-linkedin"></i></div>
                <div class="social-icon cursor-pointer "><i class="bi bi-instagram"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  <PopupComp :img="cartImg" header="item has been added to your cart" subtext="Click here to continue shopping" blurContainer="productDetailId" blurClass="productDetailContainer-blur" />
</template>

<script lang="ts">
export default {
  name: 'MonitorPage',
};
</script>

<script setup lang="ts">

import NavBar from '@/components/LandingPageComponents/NavBar.vue';
import PromotionBar from '@/components/LandingPageComponents/PromotionBar.vue';
import cartImg from '@/assets/landPage2Img/addToCart.png';
import PopupComp from '@/components/checkoutComponents/popupComp.vue';
import { useProductStore,type productState } from '@/stores/product';
import { useCartProductStore } from '@/stores/cartProduct'
import {ref} from 'vue';
import { useRoute } from 'vue-router';

const productStore = useProductStore();
const cartProductStore = useCartProductStore();

const productId=Number(useRoute().params.id);
const productQuantity=ref(0);
const currentProduct=productStore.getProductById(productId);

const currentProductImg=currentProduct?.image;


function addToCart(product: productState) {
  // cartProductStore.addToCart(product);
  cartProductStore.addToCartWithQuantity(product,productQuantity.value);

  //for popup to activate
  const popup = document.getElementById('popup')
  const categoryPage = document.getElementById('productDetailId')


  popup?.classList.add('open-popup')
  categoryPage?.classList.add('productDetailContainer-blur')
}
function increaseQuantity() {
  productQuantity.value++;
}

function decreaseQuantity() {
  if (productQuantity.value > 0) {
    productQuantity.value--;
  }
}

function goBack() {
  window.history.back();
}

</script>
<style scoped>
.productDetailContainer{
  font-family: SF-Pro, sans-serif;
}
.productDetailContainer-blur{
  opacity: 35%;
}
.counter {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

span {
  margin: 0 10px;
  font-size: 1.2em;
}

img.img-thumbnail {
  border: 2px solid #ccc;
  border-radius: 4px;
}
.review-container {
  max-width: 50rem;
  margin: auto;
}

.reviews {
  margin-bottom: 20px;
}

.review {
  border-bottom: 1px solid #414040;
  padding: 10px 0;
}

textarea {
  width: 50rem;
  height: 80px;
  margin-bottom: 10px;
}

.button {
  padding: 10px 15px;
  background-color: #3d68dd;
  color: rgb(255, 20, 20);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 180px;
  height: 50px;
}

.button:hover {
  background-color: #0056b3;
}
.additional-features {
  padding: 20px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
}

.features-container {
  max-width: 1200px;
  margin: auto;
  gap: 20px;
}

.feature {
  flex: 1;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.feature-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.feature-title {
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-family: 'ROboto', sans-serif;
}

.feature-description {
  font-size: 0.9rem;
  color: #666;
  font-family: 'ROboto', sans-serif;
}

.share .social-icons .social-icon {
  width: 30px;
  height: 30px;
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

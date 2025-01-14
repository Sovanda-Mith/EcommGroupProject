<template>
  <main class="flex font-mono">
    <div class="block w-full">
      <div class="m-10 flex review">
        <div class="flex">
          <div>
            <button
              @click="goBack"
              class="button2 mb-5 text-black bg-gray-400 hover:bg-gray-400  rounded-lg px-4 py-2"
            ><i class="bi bi-arrow-left-short"></i>
              Back
            </button>
            <!-- Main Product Image -->
            <div role="tabpanel" aria-labelledby="product-image-tab">
              <img v-if="selectedImage"
              :src="getImageUrl(selectedImage)"
              alt="Product image"
               class="h-96 w-full object-cover" />
            </div>

            <!-- Thumbnail Images -->
            <div class="flex mt-2">
              <button
             v-for="(image, index) in currentProduct?.productImages || []"
             :key="index"
              role="tab"
                 type="button"
                  :aria-selected="index === selectedImageIndex"
               @click="selectImage(image,index)"
               class="flex items-center justify-center mx-2"
                  >
              <img
               :src="getImageUrl(image)"
               alt="Thumbnail image"
                class="h-24 w-24 object-cover img-thumbnail"
                 />
                 </button>
            </div>
          </div>
          <!-- Product Info Section -->
          <div class="ml-12 mt-10">
            <h1 class="text-3xl font-bold mb-5 font-sans">
              {{ currentProduct?.name }}
            </h1>
            <p class="my-3 font-serif">{{ currentProduct?.description }}</p>
            <p class="font-bold text-2xl font-serif">${{ currentProduct?.price }}</p>

            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1">
                <svg
                v-for="n in currentProduct?.reviews ? Math.round(currentProduct.reviews / 100) : 0"
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
                  {{ currentProduct?.reviews }} reviews
                </span>
              </div>
            </div>
            <form @submit.prevent="addToCart">
              <div class="colors">
          <h4 class=" mb-3 font-sans">Color</h4>
              <div class="color-list flex space-x-2">
                <span
                 v-for="color in currentProduct?.colors || []"
               :key="color.id"
               :style="{ backgroundColor: color.color, border: color.active ? '2px solid #000' : 'none' }"
              :class="{ active: color.active }"
               class="w-6 h-6 rounded-full cursor-pointer"

              ></span>
             </div>
               </div>
              <!-- Quantity and Add to Cart -->
              <div class="flex flex-col ">
                <h4 class="font-sans"> Quantity </h4>
                <div class="counter flex items-center mx-10">
                  <button type="button" class="p-2" @click="decrement">
                    -
                  </button>
                  <span>{{ count }}</span>
                  <button type="button" class="p-2" @click="increment">
                    +
                  </button>
                </div>
                <button
                  type="submit"
                  class="button mt-5 font-sans"
                >
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
            <img
              src="/assets/landPage2Img/Featurecomponent/noice.png"
              alt="Wireless Controller Icon"
              class="feature-icon"
            />
            <h4 class="feature-title font-bold">Less Noise</h4>
            <p class="feature-description">
              Easy to focus and has SilentTouch technology.
            </p>
          </div>


          <div class="feature text-center">
            <img
              src="/assets/landPage2Img/Featurecomponent/battery.png"
              alt="Motion Sensor Icon"
              class="feature-icon"
            />
            <h4 class="feature-title font-bold">Long Battery Life</h4>
            <p class="feature-description">
              It come with AA battery that can stay last long no worry about battery.
            </p>
          </div>


          <div class="feature text-center">
            <img
              src="/assets/landPage2Img/Featurecomponent/speed.png"
              alt="Programmable G-Keys Icon"
              class="feature-icon"
            />
            <h4 class="feature-title font-bold">Max Speed (IPS)</h4>
            <p class="feature-description">
              750
            </p>
          </div>

          <!-- Share Section -->
          <div class="share text-center">
            <h4 class="font-bold">Share</h4>
            <div class="social-icons flex justify-center space-x-2 mt-2">
              <div class="social-icon cursor-pointer"><i class="bi bi-facebook"></i></div>
              <div class="social-icon cursor-pointer"><i class="bi bi-twitter-x"></i></div>
              <div class="social-icon cursor-pointer"><i class="bi bi-telegram"></i></div>
              <div class="social-icon cursor-pointer"><i class="bi bi-linkedin"></i></div>
              <div class="social-icon cursor-pointer"><i class="bi bi-instagram"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const products = ref([
      {
        id: 1,
        name: "INPHIC Bluetooth Mouse",
        price: 19.99,
        description: "Rechargeable Wireless Mouse Multi-Device (Tri-Mode:BT 5.0/3.0+2.4Ghz) with Silent, 3 DPI Adjustment, Ergonomic Optical Portable Mouse.",
        reviews: 10,
        colors: [
          { id: 1, color: "#1e3a8a", active: true },
          { id: 2, color: "#d97706", active: false },
          { id: 3, color: "#fa5b5f", "active": false }
        ],
        image: "public/assets/landPage2Img/Mouse/INPHICBluetoothMouse.jpg",
        productImages: [
          "public/assets/landPage2Img/Mouse/Detailcomponent5/CV-Detail-1.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/CV-Detail-2.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/CV-Detail-3.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/CV-Detail-4.png",

        ],
      },
      {
        id: 2,
        name: "Bluetooth Wireless Mouse",
        price: 16.99,
        description: " Tri-Mode High Performance, Rechargeable, Quiet Click, Multi-Device Compatibility for Laptop, Computer, MacBook, Tablet, PC (Black).",
        reviews: 123,
        colors: [
          { id: 1, color: "#fdb82c", "active": true },
          { id: 2, color: "#3ab7f7", "active": false },
          { id: 3, color: "#fa5b5f", "active": false }
        ],
        image: "public/assets/landPage2Img/Mouse/BluetoothWirelessMouse.jpg",
        productImages: [
          "public/assets/landPage2Img/Mouse/Detailcomponent5/AC-Detail-1.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/AC-Detail-2.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/AC-Detail-3.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/AC-Detail-4.png",
        ],
      },

      {
        id: 3,
        name: "Lenovo Bluetooth Silent Mouse",
        price: 19.99,
        description: " (WL300) - 5 Button Computer Mouse with Silent Left & Right Click – Sculpted Grip, Microsoft Swift Pair.",
        reviews: 501,
        colors: [
          { id: 1, color: "#1e3a8a", active: true },
          { id: 2, color: "#d97706", active: false },
          { id: 3, color: "#fa5b5f", "active": false }
        ],
        image: "public/assets/landPage2Img/Mouse/LenovoBluetoothSilentMouse.jpg",
        productImages: [
          "public/assets/landPage2Img/Mouse/Detailcomponent5/Leno-Detail-1.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/Leno-Detail-2.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/Leno-Detail-3.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/Leno-Detail-4.png",
        ],
      },
      {
        id: 4,
        name: "USB Mouse Wireless",
        price: 9.49,
        description: "1600 DPI Optical Tracking, 3 Adjustable DPI, Compact and Portable Design for Small Hands, Mouse for Laptop, PC, Mac, 12-Month Battery Life for Work or Travel.",
        reviews: 100,
        colors: [
          { id: 1, color: "#1e3a8a", active: true },
          { id: 2, color: "#d97706", active: false },
          { id: 3, color: "#fa5b5f", "active": false }
        ],
        image: "public/assets/landPage2Img/Mouse/USBMouseWireless.jpg",
        productImages: [
          "public/assets/landPage2Img/Mouse/Detailcomponent5/USB-Detail-1.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/USB-Detail-2.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/USB-Detail-3.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/USB-Detail-4.png",
        ],
      },
      {
        id: 5,
        name: "Razer Basilisk V3",
        price: 39.99,
        description: "The king returns to raise the game. Enter the Razer Basilisk V3 Pro—our most advanced gaming mouse yet. Armed to the teeth with industry-leading technology.",
        reviews: 361,
        colors: [
          { id: 1, color: "#1e3a8a", active: true },
          { id: 2, color: "#d97706", active: false },
          { id: 3, color: "#fa5b5f", "active": false }
        ],
        image: "public/assets/landPage2Img/Mouse/RazerBasiliskV3.jpg",
        productImages: [
          "public/assets/landPage2Img/Mouse/Detailcomponent5/Razer-Detail-1.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/Razer-Detail-2.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/Razer-Detail-3.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/Razer-Detail-4.png",
        ],
      },

      {
        id: 6,
        name: "ASUS ROG Chakram",
        price: 49,
        description: "ROG Chakram X wireless RGB gaming mouse with next-gen 36,000 dpi ROG AimPoint optical sensor, 8000 Hz polling rate, low-latency tri-mode connectivity (RF 2.4 GHz / Bluetooth / wired).",
        reviews: 91,
        colors: [
          { id: 1, color: "#1e3a8a", active: true },
          { id: 2, color: "#d97706", active: false },
          { id: 3, color: "#fa5b5f", "active": false }
        ],
        image: "public/assets/landPage2Img/Mouse/ASUSROGChakram.jpg",
        productImages: [
          "public/assets/landPage2Img/Mouse/Detailcomponent5/Chakram-Detail-1.jpg",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/Chakram-Detail-2.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/Chakram-Detail-3.png",
          "public/assets/landPage2Img/Mouse/Detailcomponent5/Chakram-Detail-4.png",
        ],
      },
    ]);

    const selectedProductId = computed(() => parseInt(route.params.id as string));
    const currentProduct = computed(() =>
      products.value.find((product) => product.id === selectedProductId.value)
    );

    const selectedImageIndex = ref(0);
    const selectedImage = computed(() =>
    currentProduct.value?.productImages[selectedImageIndex.value]
  );

    // Set default main image when component loads
    watch(currentProduct, (newProduct) => {
    if (newProduct && newProduct.productImages.length > 0) {
      selectedImageIndex.value = 0; // Reset to the first image
    }
  });

    const selectedColor = ref("");
    const count = ref(1);

    const getImageUrl = (imagePath: string) => {
  return `/${imagePath}`;
};



const selectImage = (image: string, index: number) => {
      selectedImageIndex.value = index;
    };


    const increment = () => count.value++;
    const decrement = () => {
      if (count.value > 1) count.value--;
    };

    const addToCart = () => {
      alert(`Added ${selectedImageIndex.value} of ${currentProduct?.value?.name} to the cart.`);
    };
    const router = useRouter();
    const goBack = () => {
      router.push("/monitor");
    };
   interface Color {
  id: number;
  color: string;
  active: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  reviews: number;
  colors: Color[];
  image: string;
  productImages: string[];
}
  return {
      products,
      currentProduct,
      selectedImageIndex,
      selectedColor,
      count,
      selectImage,
      increment,
      decrement,
      addToCart,
      selectedImage,
      getImageUrl,
      goBack,
    };
  },
};
</script>

<style scoped>
       .counter {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

button {
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  /* padding: 10px; */
  cursor: pointer;
}

button:hover {
  background-color: #e3dfdf;
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
</style>

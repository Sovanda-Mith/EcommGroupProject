<template>
  <main class="flex font-mono">
    <div class="block w-full">
      <div class="m-10 flex review">
        <div class="flex">
          <div>

            <!-- Back Button -->
            <button
              @click="goBack"
              class="button1 mb-5 text-black bg-gray-400 hover:bg-gray-400 rounded-lg px-4 py-2"
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
                <h4 class="mb-3 font-sans">Color</h4>
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
              <div class="flex flex-col mt-3">
                <h4 font-sans> Quantity </h4>
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
              src="/assets/landPage2Img/Featurecomponent/wireless.png"
              alt="Wireless Controller Icon"
              class="feature-icon"
            />
            <h4 class="feature-title font-bold">Wireless Audio</h4>
            <p class="feature-description">
              Wireless Audios All integrated into an iconic design.
            </p>
          </div>


          <div class="feature text-center">
            <img
              src="/assets/landPage2Img/Featurecomponent/sound1.jpg"
              alt="Motion Sensor Icon"
              class="feature-icon"
            />
            <h4 class="feature-title font-bold">High Sound</h4>
            <p class="feature-description">
              No delay with the best sound quality and never disappointed you after bought this speaker.
            </p>
          </div>


          <div class="feature text-center">
            <img
              src="/assets/landPage2Img/Featurecomponent/battery.png"
              alt="Programmable G-Keys Icon"
              class="feature-icon"
            />
            <h4 class="feature-title font-bold">Long Battery Life</h4>
            <p class="feature-description">
              It come with the best battery that can stay last long no worry about battery.
            </p>
          </div>

          <!-- Share Section -->
          <div class="share text-center">
            <h4 class="font-bold font-sans">Share</h4>
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
        name: "Soundcore Anker Life Q20 Hybrid",
        price: 50,
        description: "Soundcore Q20i | Hybrid Active Noise Cancelling Headphones Hybrid Active Noise Cancelling 40-Hour Long Battery Life and Fast Charging.",
        reviews: 520,
        colors: [
          { id: 1, color: "#1e3a8a", active: true },
          { id: 2, color: "#d97706", active: false },
          { id: 3, color: "#fa5b5f", "active": false }
        ],
        image: "public/assets/landPage2Img/Audio/SoundcoreAnker.jpg",
        productImages: [
         "public/assets/landPage2Img/Audio/Detailcomponent1/Soundcore-Detail-1.jpg",
          "public/assets/landPage2Img/Audio/Detailcomponent1/Soundcore-Detail-2.jpg",
          "public/assets/landPage2Img/Audio/Detailcomponent1/Soundcore-Detail-3.jpg",
          "public/assets/landPage2Img/Audio/Detailcomponent1/Soundcore-Detail-4.jpg",
        ],
      },
      {
        id: 2,
        name: "MOVSSOU E7",
        price: 46.99,
        description: "Active Noise Cancelling Headphones Bluetooth Headphones Wireless Headphones Over Ear with Microphone Deep Bass, Comfortable Protein Earpads,.",
        reviews: 123,
        colors: [
          { id: 1, color: "#fdb82c", "active": true },
          { id: 2, color: "#3ab7f7", "active": false },
          { id: 3, color: "#fa5b5f", "active": false }
        ],
        image: "public/assets/landPage2Img/Audio/MOVSSOUE7.jpg",
        productImages: [
          "public/assets/landPage2Img/Audio/Detailcomponent1/MOV-Detail-1.png",
          "public/assets/landPage2Img/Audio/Detailcomponent1/MOV-Detail-2.png",
          "public/assets/landPage2Img/Audio/Detailcomponent1/MOV-Detail-3.jpg",
          "public/assets/landPage2Img/Audio/Detailcomponent1/MOV-Detail-4.png",
        ],
      },

      {
        id: 3,
        name: "SteelSeries Arctis Nova 7P",
        price: 149.99,
        description: "Gaming Headset for PS5, PS4 - White Protect your gaming accessory.",
        reviews: 401,
        colors: [
          { id: 1, color: "#1e3a8a", active: true },
          { id: 2, color: "#d97706", active: false },
          { id: 3, color: "#fa5b5f", "active": false }
        ],
        image: "public/assets/landPage2Img/Audio/SteelSeriesArctisNova7P.jpg",
        productImages: [
          "public/assets/landPage2Img/Audio/Detailcomponent1/Steel-Detail-1.png",
          "public/assets/landPage2Img/Audio/Detailcomponent1/Steel-Detail-2.png",
          "public/assets/landPage2Img/Audio/Detailcomponent1/Steel-Detail-3.png",
          "public/assets/landPage2Img/Audio/Detailcomponent1/Steel-Detail-4.png",
        ],
      },
      {
        id: 4,
        name: "Turtle Beach Recon 70",
        price: 39.99,
        description: "Gaming Headset for PS5, PS4 - White Protect your gaming accessory",
        reviews: 100,
        colors: [
          { id: 1, color: "#1e3a8a", active: true },
          { id: 2, color: "#d97706", active: false },
          { id: 3, color: "#fa5b5f", "active": false }
        ],
        image: "public/assets/landPage2Img/Audio/TurtleBeachRecon70.jpg",
        productImages: [
          "public/assets/landPage2Img/Audio/Detailcomponent1/turtle-Detail-1.png",
          "public/assets/landPage2Img/Audio/Detailcomponent1/turtle-Detail-2.png",
          "public/assets/landPage2Img/Audio/Detailcomponent1/turtle-Detail-3.png",
          "public/assets/landPage2Img/Audio/Detailcomponent1/turtle-Detail-4.png",
        ],
      },
      {
        id: 5,
        name: "ASUS ROG Delta II Wireless",
        price: 229.99,
        description: "Lightweight 3.5 mm gaming headset with 50 mm ASUS Essence drivers, virtual 7.1 surround sound, compatible with PCs.",
        reviews: 761,
        colors: [
          { id: 1, color: "#1e3a8a", active: true },
          { id: 2, color: "#d97706", active: false },
          { id: 3, color: "#fa5b5f", "active": false }
        ],
        image: "public/assets/landPage2Img/Audio/ASUSROGDeltaII.jpg",
        productImages: [
          "public/assets/landPage2Img/Audio/Detailcomponent1/ROGdeta-Detail-1.png",
          "public/assets/landPage2Img/Audio/Detailcomponent1/ROGdeta-Detail-2.png",
          "public/assets/landPage2Img/Audio/Detailcomponent1/ROGdeta-Detail-3.png",
          "public/assets/landPage2Img/Audio/Detailcomponent1/ROGdeta-Detail-4.png",
        ],
      },

      {
        id: 6,
        name: "Alienware Pro Wireless",
        price: 229.99,
        description: "Professional-grade wireless gaming headset featuring 50mm graphene-coated drivers, 2-Mic AI Noise Cancellation and Active Noise Cancellation.",
        reviews: 91,
        colors: [
          { id: 1, color: "#1e3a8a", active: true },
          { id: 2, color: "#d97706", active: false },
          { id: 3, color: "#fa5b5f", "active": false }
        ],
        image: "public/assets/landPage2Img/Audio/AlienwareProWireless.jpg",
        productImages: [
         "public/assets/landPage2Img/Audio/Detailcomponent1/Alien-Detail-1.png",
         "public/assets/landPage2Img/Audio/Detailcomponent1/Alien-Detail-2.png",
         "public/assets/landPage2Img/Audio/Detailcomponent1/Alien-Detail-3.png",
         "public/assets/landPage2Img/Audio/Detailcomponent1/Alien-Detail-4.png",
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
    const router = useRouter();


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

    const goBack = () => {
      router.push("/audio");
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

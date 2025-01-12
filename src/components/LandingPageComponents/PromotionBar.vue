<template>
  <div class="bg-black text-white h-[50px] flex items-center justify-evenly">
    <img src="../../assets/landPageImg/angle-left-svgrepo-com.svg" alt="left icon" class="w-5" />
    <div class="moveInfinite-container">
      <p class="moveInfinite-text">FREE DELIVERY OVER 100$ USD & EASY RETURNS</p>
    </div>

    <img src="../../assets/landPageImg/angle-right-svgrepo-com.svg" alt="right icon" class="w-5" />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.moveInfinite-container {
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

.moveInfinite-text {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%); /* Fully off-screen (right) */
  }
  15% {
    transform: translateX(0%); /* Fully visible and centered */
  }
  50% {
    transform: translateX(-50%); /* Midpoint scroll */
  }
  85% {
    transform: translateX(-100%); /* Almost fully off-screen (left) */
  }
  100% {
    transform: translateX(-100%); /* Fully off-screen (left) for reset */
  }
}
</style>

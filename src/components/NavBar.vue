<template>
  <div class="flex justify-between items-center bg-white h-[80px] font-rammetto">
    <nav class="flex justify-evenly items-center h-[80px] w-1/2">
      <router-link to="/">
        <img src="../assets/images/logo_dark.png" alt="logo" class="w-[80px]" />
      </router-link>
      <router-link to="#">
        <p>Keyboard</p>
      </router-link>
      <router-link to="#">
        <p>Mouse</p>
      </router-link>
      <router-link to="#">
        <p>Monitor</p>
      </router-link>
      <router-link to="#">
        <p>Audio</p>
      </router-link>
      <router-link to="#">
        <p>Controller</p>
      </router-link>
      <router-link to="#">
        <p>Others</p>
      </router-link>
    </nav>
    <div class="flex h-[80px] items-center justify-evenly w-1/5">
      <ButtonIcon icon="../../src/assets/images/search-svgrepo-com.svg" text="Search" />
      <ButtonIcon icon="../../src/assets/images/user-3-svgrepo-com.svg" text="Login" />
      <ButtonIcon icon="../../src/assets/images/cart-plus-svgrepo-com.svg" text="Cart" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonIcon from './ButtonIcon.vue'
</script>

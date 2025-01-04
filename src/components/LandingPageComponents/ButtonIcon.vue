<template>
  <router-link to="/auth/login" v-if="text === 'Login'">
    <div class="flex">   
        <p>{{ text }}</p>
        <img :src="icon" :alt="text" class="ml-2 w-5" />
    </div>
  </router-link>
  <router-link to="/cart" v-else-if="text === 'Cart'">
    <div class="flex">   
        <p>{{ text }}</p>
        <img :src="icon" :alt="text" class="ml-2 w-5" />
    </div>
  </router-link>
  <router-link to="#" v-else-if="text === 'Search'">
    <div class="flex">   
        <p>{{ text }}</p>
        <img :src="icon" :alt="text" class="ml-2 w-5" />
    </div>
  </router-link>
</template>
<script setup lang="ts">
  defineProps({
    icon: String,
    text: String,
  })
</script>

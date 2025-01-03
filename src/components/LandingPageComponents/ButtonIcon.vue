<template>
  <div class="flex">
    <p>{{ text }}</p>
    <img :src="icon" :alt="text" class="w-5" />
  </div>
</template>
<script setup lang="ts">
defineProps({
  icon: String,
  text: String,
})
</script>

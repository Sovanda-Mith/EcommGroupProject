<template>
  <img :src="img" :alt="description" class="h-[500px] w-[350px] rounded-lg cursor-pointer" />
</template>
<script setup lang="ts">
defineProps({
  img: String,
  description: String,
})
</script>

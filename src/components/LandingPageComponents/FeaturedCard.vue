<template>
  <img :src="img" :alt="description" class="h-[500px] w-[350px]" />
</template>
<script setup lang="ts">
defineProps({
  img: String,
  description: String,
})
</script>

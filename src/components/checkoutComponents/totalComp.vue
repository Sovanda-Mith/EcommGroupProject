<template>
  <div class="flex justify-center items-center gap-[100px]">
    <div class="flex flex-col gap-[17px] w-[220px]">
      <div class="totalText">Subtotal</div>
      <div class="totalText">Shipping & Handling</div>
      <div class="totalTextBold font-bold">Total</div>
    </div>
    <div class="flex flex-col gap-[17px]">
      <div class="totalText">$ {{ subTotal }}</div>
      <div class="totalText">$ {{ shipping }}</div>
      <div class="totalTextBold font-bold">$ {{ total }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'totalComp',
  props: ['subTotal', 'shipping', 'total'],
}
</script>
<style>
.totalText {
  font-family: 'SF-Pro', sans-serif;
  font-weight: 400;
  font-size: 24px;
}
.totalTextBold {
  font-family: 'SF-Pro', sans-serif;
  font-weight: 800;
  font-size: 28px;

}
</style>

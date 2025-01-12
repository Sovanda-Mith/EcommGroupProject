<template>
  <div
    id="popup"
    class="popup bg-white w-[900px] h-[600px] gap-4 border-solid border-[1px] border-black rounded-[30px] flex flex-col justify-center items-center"
    style="font-family: 'SF-Pro', sans-serif; font-weight: 300"
  >
    <img :src="img" alt="logo" class="w-[200px]" />
    <h2 class="text-[34px] font-bold">{{header}}</h2>
    <p class="text-[24px]">{{subtext}}</p>
    <button
      id="closePopup"
      class="w-[200px] h-[80px] border-solid border-[1px] border-black rounded-[30px] font-bold text-[28px]"
      @click="hidePopup()"
    >
      Okay, Got it
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'popupComp',
  props: {
    header: String,
    subtext: String,
    blurContainer: String,
    blurClass: String,
    img: String,
  },
  methods: {
    hidePopup() {
      const popup = document.getElementById('popup')
      const blurPage = this.blurContainer ? document.getElementById(this.blurContainer) : null

      popup?.classList.remove('open-popup')
      blurPage?.classList.remove(this.blurClass ? this.blurClass : 'catergoryPage-blur')
    },
   },

}
</script>
<style>
#closePopup:hover {
  background-color: #82c89f;
  color: white;
}
.popup {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.1);
  visibility: hidden;
  transition:
    transform 0.4s,
    top 0.4s;
}
.open-popup {
  visibility: visible;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
}

</style>

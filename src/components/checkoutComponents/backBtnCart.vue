<template>
    <button @click="navigateTo" :style="{gap:gap}" class="backBtn w-[280px] h-[55px] bg-[#606868] rounded-[48px] text-white font-semibold text-[18px] flex justify-center items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 12L7.5 12" stroke="white" stroke-linecap="round"/>
            <path d="M10.5 9L7.5 12L10.5 15" stroke="white" stroke-linecap="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="white"/>
        </svg>
        {{ btnText }}
    </button>
</template>
<script lang="ts">


export default{
    name:"backBtnCart",
    props:[
        "btnText",
        "gap",
        "to",
    ],
    methods: {
      navigateTo() {
      if(this.to){
        this.$router.push(this.to)
      }
    },
    }
}
</script>
<style scoped>


.backBtn{
    font-family: 'SF-Pro', sans-serif;
    font-weight: 800;
}

</style>

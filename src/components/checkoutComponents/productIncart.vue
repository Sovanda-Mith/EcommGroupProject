<template>
    <div class="itemContainer pl-[10px] pr-[30px] pt-[10px] relative">
        <div class="flex gap-[20px] items-center">
            <img :src="img" alt="" class="img">
            <div class="interFont text-black text-[20px] font-medium">{{ productName }}</div>
        </div>
        <div class="absolute left-[380px] w-[166.36px] h-[55px] rounded-[70px] flex justify-between items-center bg-[#CBD7D1] pl-[10px] pr-[10px]">
            <button><svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.25 15.5H8.75" stroke="black" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 28C21.9036 28 27.5 22.4036 27.5 15.5C27.5 8.59644 21.9036 3 15 3C8.09644 3 2.5 8.59644 2.5 15.5C2.5 22.4036 8.09644 28 15 28Z" stroke="black"/>
                </svg>
            </button>
            <span class="quantityTxt text-black text-[24px] font-">1</span>
            <button >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.25 15H8.75" stroke="black" stroke-linecap="round"/>
                <path d="M15 21.25V8.75" stroke="black" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="black"/>
                </svg>
            </button>
        </div>
        <div class="interFont absolute left-[710px] w-[100px] h-[55px] bg-[#CBD7D1] flex justify-center items-center text-black rounded-[70px] text-[24px]">{{ discount }}</div>
        <div class="interFont absolute left-[1040px] text-black text-[24px]">{{ finalPrice }}</div>
    </div>
</template>
<script lang="ts">
export default{
    name:"productCart",
    props: [
        "img",
        "productName",
        "discount",
        "finalPrice"
    ],

}

</script>
<style scoped>
/* Rowdies */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kdam+Thmor+Pro&family=Rowdies:wght@300;400;700&display=swap');
/* SF-Pro */
@font-face {
  font-family: 'SF-Pro';
  src: url('../../assets/fonts/SF-Pro.ttf') format('SF-Pro');
  font-weight: normal;
  font-style: normal;
}
.img{
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 15px;
}
.itemContainer{

    width: 1164px;
    height: 125.25px;
    display: flex;
    gap:182px;
    align-items: center;
    border-bottom: 1px solid black;

    padding-bottom: 40px;
    padding-top: 40px;

}
.interFont{
    font-family: 'SF-Pro', sans-serif;
}
.quantityTxt{
    font-family: 'Rowdies', sans-serif;
}
</style>

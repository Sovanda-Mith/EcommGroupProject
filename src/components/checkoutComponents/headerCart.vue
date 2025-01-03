<template>
    <div class="w-[1292.2px] h-[80px] bg-[#606868] flex justify-center items-center rounded-t-[50px]">
        <div class="title text-white text-[26px] font-semibold">{{ title }}</div>
    </div>
</template>
<script lang="ts">
export default{
    name:"headerCart",
    props: [
        "title"
    ]

}
</script>
<style>
@font-face {
  font-family: 'SF-Pro';
  src: url('../../assets/fonts/SF-Pro.ttf') format('SF-Pro');
  font-weight: normal;
  font-style: normal;
}

.title{
    font-family: 'SF-Pro', sans-serif;
    font-weight: 800;
}

</style>

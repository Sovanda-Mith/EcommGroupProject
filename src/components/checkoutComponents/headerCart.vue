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
/* Kdam Thmor Pro */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kdam+Thmor+Pro&display=swap');
.title{
    font-family: 'Kdam Thmor Pro', sans-serif;
    font-weight: 400;
}

</style>
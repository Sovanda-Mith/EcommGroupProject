<template>
  <div class="flex justify-between items-center bg-white h-[80px] font-rammetto">
    <nav class="flex justify-evenly items-center h-[80px] w-1/2">
      <router-link to="/">
        <img src="../../assets/landPageImg/logo_dark.png" alt="logo" class="w-[80px]" />
      </router-link>
      <router-link to="/keyboard">
        <p class="hover-effect">Keyboard</p>
      </router-link>
      <router-link to="/mouse">
        <p class="hover-effect">Mouse</p>
      </router-link>
      <router-link to="/monitor">
        <p class="hover-effect">Monitor</p>
      </router-link>
      <router-link to="/audio">
        <p class="hover-effect">Audio</p>
      </router-link>
      <router-link to="/controller">
        <p class="hover-effect">Controller</p>
      </router-link>
      <router-link to="#">
        <p class="hover-effect">Others</p>
      </router-link>
    </nav>
    <div class="flex h-[80px] items-center justify-evenly w-1/5">
      <ButtonIcon icon="../../src/assets/landPageImg/search-svgrepo-com.svg" text="Search" />
      <ButtonIcon icon="../../src/assets/landPageImg/user-3-svgrepo-com.svg" :text="authText" />
      <ButtonIcon icon="../../src/assets/landPageImg/cart-plus-svgrepo-com.svg" text="Cart" />
    </div>
  </div>
</template>

<script lang="ts">
import ButtonIcon from './ButtonIcon.vue'
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'NavBar',
  components: {
    ButtonIcon,
  },
  setup() {
    const authText = ref('Login') // Default text

    // Check for 'name' in localStorage on component mount
    onMounted(() => {
      const storedName = localStorage.getItem('name')
      if (storedName) {
        authText.value = 'Logged'
      }
    })

    return {
      authText,
    }
  },
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kdam+Thmor+Pro&family=Rammetto+One&family=Rowdies:wght@300;400;700&display=swap');
p {
  font-family: 'Rammetto One', sans-serif;
}
.hover-effect {
  padding: 0 0.5em 0.25em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: rgb(56, 55, 55);
  transition: 0.3s;
  font-weight: bold;
  text-transform: uppercase;
}

.hover-effect:hover {
  color: #000000;
}

.hover-effect:before {
  content: '';
  position: absolute;
  inset: calc(100% - 3px) 0 0 0; /* 3px = the thickness */
  background: #ce4f20; /* the color */
  scale: 0 1;
  transition: 0.3s;
}

.hover-effect:hover:before {
  scale: 1;
  transition: 0.3s;
}
</style>

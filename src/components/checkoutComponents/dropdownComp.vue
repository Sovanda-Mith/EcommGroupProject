<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue';

// Props for dropdown width
defineProps({
  width: {
    type: String,
    default: '300px',
  },
  height: {
    type: String,
  }
});

// Emit selected value to parent
const emit = defineEmits(['update:selected']);

// List of countries
const items = ref([
  'Cambodia',
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'India',
  'China',
  'Japan',
  'South Korea',
  'Brazil',
  'Mexico',
  'Italy',
  'Spain',
  'Russia',
  'Netherlands',
  'Sweden',
  'Switzerland',
  'Singapore',
  'New Zealand',
  'South Africa',
  'Argentina',
  'Turkey',
  'Saudi Arabia',
  'United Arab Emirates',
  'Indonesia',
  'Malaysia',
  'Thailand',
  'Vietnam',
  'Philippines',
]);

// Selected item
const selectedItem = ref('');

// Reference to the checkbox input
const dropdownCheckbox = ref<HTMLInputElement | null>(null);

// Function to handle item selection
const selectItem = (item: string) => {
  selectedItem.value = item;

  // Emit selected value to parent
  emit('update:selected', item);

  // Uncheck the checkbox to close the dropdown
  if (dropdownCheckbox.value) {
    dropdownCheckbox.value.checked = false;
  }
};
</script>
<template>
  <div class="dropdown">
    <div class="dropdown" :style="{ width: width,height: height }">
      <input type="checkbox" id="dropdown" ref="dropdownCheckbox" />
      <label class="dropdown__face" for="dropdown">
        <div class="dropdown__text">{{ selectedItem || 'Select Country' }}</div>
        <div class="dropdown__arrow"></div>
      </label>
      <ul class="dropdown__items">
        <li v-for="item in items" :key="item" @click="selectItem(item)" class="dropdown__item">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  filter: url(#goo);
}

.dropdown__face,
.dropdown__items {
  background-color: #fff;
  padding: 20px;
  border-radius: 25px;
  border: 1px solid #dcdcdc;
}

.dropdown__face {
  display: block;
  position: relative;
  cursor: pointer;
}

.dropdown__items {
  margin: 0;
  position: absolute;
  right: 0;
  top: 50%;
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  list-style: none;
  visibility: hidden;
  z-index: -1;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.93, 0.88, 0.1, 0.8);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dropdown__items .dropdown__item {
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 10px;
  transition: background-color 0.3s;
}

.dropdown__items .dropdown__item:hover {
  background-color: #E7E7E7;
}

input[type='checkbox'] {
  display: none;
}

input[type='checkbox']:checked ~ .dropdown__items {
  top: calc(100% + 10px);
  visibility: visible;
  opacity: 1;
}

.dropdown__arrow {
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
  position: absolute;
  top: 50%;
  right: 30px;
  width: 10px;
  height: 10px;
  transform: rotate(45deg) translateY(-50%);
}
</style>
<script lang="ts">
export default {
  name: 'dropdownComp',
}
</script>

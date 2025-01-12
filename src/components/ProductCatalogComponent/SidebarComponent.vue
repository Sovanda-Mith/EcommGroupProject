<template>
  <aside class="w-1/4 p-6 bg-white border-r">
    <!-- Top Search -->
    <div class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Top Search</h2>
      <ul>
        <li v-for="item in topSearch" :key="item" class="mb-2">
          <router-link :to="{ path: `/category/${item}` }">
            <a href="#" class="text-gray-700 hover:text-blue-500">{{ item }}</a>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Price Range -->
    <div class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Price Range</h2>
      <ul>
        <li v-for="range in priceRanges" :key="range.label" class="mb-2">
          <label>
            <input type="radio" name="price" class="mr-2">{{ range.label }}
          </label>
        </li>
      </ul>
      <div class="flex gap-2 mt-4">
        <input
          type="number"
          placeholder="Min price"
          class="w-1/2 p-2 border rounded"
          id="minPriceInput"

        />
        <input
          type="number"
          placeholder="Max price"
          class="w-1/2 p-2 border rounded"
          id="maxPriceInput"

        />
      </div>
      <button class="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-300" id="filterBtn">
        Filter
      </button>
    </div>

    <!-- Popular Brands -->
    <div class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Popular Brands</h2>
      <ul>
        <li v-for="brand in popularBrands" :key="brand" class="mb-2">
          <label>
            <input type="checkbox" class="mr-2"> {{ brand }}
          </label>
        </li>
      </ul>
    </div>

    <!-- Featured Product -->
    <div class="p-6 bg-gray-50 rounded shadow">
      <h2 class="text-lg font-semibold">{{ featuredProduct.name }}</h2>
      <p class="text-sm text-gray-600 mt-2">{{ featuredProduct.description }}</p>
      <p class="text-lg font-bold text-blue-600 mt-4">${{ featuredProduct.price }} USD</p>
      <button class="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700">
        Shop Now
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">

interface PriceRange {
  label: string;
}

interface FeaturedProduct {
  name: string;
  description: string;
  price: number;
}

const topSearch: string[] = ["Monitor", "Keyboard", "Audio", "Controller"];

const priceRanges: PriceRange[] = [
  { label: "All Prices" },
  { label: "Under $20" },
  { label: "$20 to $50" },
  { label: "$50 to $100" },
  { label: "$100 to $300" },
  { label: "$300 to $500" },
  { label: "$500 to $1,000" },
  { label: "$1,000 to $10,000" },
];

const popularBrands: string[] = ["Logitech", "Microsoft", "HyperX", "Sony PlayStation", "Alienware"];

const featuredProduct: FeaturedProduct = {
  name: "Bexdug PC Gaming Keyboard Mechanical",
  description: "Mechanical Keyboard Wired Tricolor Backlit for PC Gamer.",
  price: 143,
};

</script>

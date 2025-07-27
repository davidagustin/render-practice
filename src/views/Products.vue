<template>
  <div class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
        <p class="text-gray-600">Discover our complete collection of premium furniture</p>
      </div>

      <!-- Filters and Search -->
      <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Search -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search products..."
              class="input-field"
            >
          </div>

          <!-- Category Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select v-model="selectedCategory" class="input-field">
              <option value="">All Categories</option>
              <option value="living-room">Living Room</option>
              <option value="bedroom">Bedroom</option>
              <option value="dining-room">Dining Room</option>
              <option value="office">Office</option>
            </select>
          </div>

          <!-- Price Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <select v-model="priceRange" class="input-field">
              <option value="">All Prices</option>
              <option value="0-500">Under $500</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000+">Over $2,000</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Results Count and Sort -->
      <div class="flex justify-between items-center mb-6">
        <p class="text-gray-600">{{ filteredProducts.length }} products found</p>
        <div class="flex items-center space-x-4">
          <label class="text-sm font-medium text-gray-700">Sort by:</label>
          <select v-model="sortBy" class="input-field w-auto">
            <option value="name">Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="product in sortedProducts" 
          :key="product.id"
          class="card group hover:shadow-lg transition-shadow duration-300"
        >
          <div class="relative overflow-hidden">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            >
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            
            <!-- Quick View Button -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <router-link 
                :to="`/product/${product.id}`"
                class="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Quick View
              </router-link>
            </div>
          </div>
          
          <div class="p-4">
            <h3 class="font-semibold text-gray-900 mb-2">{{ product.name }}</h3>
            <p class="text-gray-600 text-sm mb-3">{{ product.description.substring(0, 80) }}...</p>
            
            <div class="flex justify-between items-center mb-3">
              <span class="text-xl font-bold text-primary-600">${{ product.price }}</span>
              <span class="text-sm text-gray-500">{{ product.category.replace('-', ' ') }}</span>
            </div>
            
            <div class="flex space-x-2">
              <button 
                @click="addToCart(product)"
                class="flex-1 btn-primary text-sm"
              >
                Add to Cart
              </button>
              <router-link 
                :to="`/product/${product.id}`"
                class="btn-secondary text-sm"
              >
                Details
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredProducts.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No products found</h3>
        <p class="text-gray-600">Try adjusting your search or filter criteria</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFurnitureStore } from '../stores/furniture'

const furnitureStore = useFurnitureStore()

// Reactive data
const searchQuery = ref('')
const selectedCategory = ref('')
const priceRange = ref('')
const sortBy = ref('name')

// Computed properties
const filteredProducts = computed(() => {
  let products = furnitureStore.products

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    products = products.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    )
  }

  // Category filter
  if (selectedCategory.value) {
    products = products.filter(product => product.category === selectedCategory.value)
  }

  // Price filter
  if (priceRange.value) {
    const [min, max] = priceRange.value.split('-').map(Number)
    products = products.filter(product => {
      if (max) {
        return product.price >= min && product.price <= max
      } else {
        return product.price >= min
      }
    })
  }

  return products
})

const sortedProducts = computed(() => {
  const products = [...filteredProducts.value]
  
  switch (sortBy.value) {
    case 'price-low':
      return products.sort((a, b) => a.price - b.price)
    case 'price-high':
      return products.sort((a, b) => b.price - a.price)
    case 'name':
    default:
      return products.sort((a, b) => a.name.localeCompare(b.name))
  }
})

const addToCart = (product) => {
  furnitureStore.addToCart(product)
}
</script> 
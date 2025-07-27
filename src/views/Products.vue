<template>
  <div class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
        <p class="text-gray-600">Discover our complete collection of premium furniture</p>
      </div>

      <!-- Filters and Search -->
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Search -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
            <input 
              v-model="searchQuery"
              type="text"
              placeholder="Search by name, description, or category..."
              class="input-field"
            >
          </div>

          <!-- Category Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select v-model="selectedCategory" class="input-field">
              <option value="all">All Categories</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>

          <!-- Price Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <select v-model="priceRange" class="input-field">
              <option value="all">All Prices</option>
              <option value="0-300">Under $300</option>
              <option value="300-600">$300 - $600</option>
              <option value="600-1000">$600 - $1000</option>
              <option value="1000+">Over $1000</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Results Count -->
      <div class="flex justify-between items-center mb-6">
        <p class="text-gray-600">
          Showing {{ filteredProducts.length }} of {{ furniture.length }} products
        </p>
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-600">Sort by:</span>
          <select v-model="sortBy" class="text-sm border border-gray-300 rounded px-2 py-1">
            <option value="name">Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <!-- Products Grid -->
      <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="product in sortedProducts" 
          :key="product.id"
          class="card group hover:shadow-lg transition-shadow duration-300"
        >
          <div class="relative overflow-hidden">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            >
            <div class="absolute top-4 right-4">
              <span 
                :class="[
                  'px-2 py-1 text-xs font-medium rounded-full',
                  product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                ]"
              >
                {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
              </span>
            </div>
          </div>
          
          <div class="p-4">
            <h3 class="font-semibold text-gray-900 mb-2">{{ product.name }}</h3>
            <p class="text-gray-600 text-sm mb-3">{{ product.description.substring(0, 80) }}...</p>
            
            <div class="flex items-center justify-between mb-3">
              <span class="text-2xl font-bold text-primary-600">${{ product.price }}</span>
              <div class="flex items-center">
                <div class="flex text-yellow-400">
                  <svg 
                    v-for="star in 5" 
                    :key="star"
                    :class="[
                      'w-4 h-4',
                      star <= Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'
                    ]"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span class="text-sm text-gray-600 ml-1">({{ product.reviews }})</span>
              </div>
            </div>
            
            <div class="flex gap-2">
              <router-link 
                :to="`/product/${product.id}`"
                class="flex-1 btn-secondary text-center"
              >
                View Details
              </router-link>
              <button 
                @click="addToCart(product)"
                :disabled="!product.inStock"
                :class="[
                  'px-4 py-2 rounded-lg font-medium transition-colors',
                  product.inStock 
                    ? 'bg-accent-500 hover:bg-accent-600 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                ]"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-else class="text-center py-12">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No products found</h3>
        <p class="text-gray-600">Try adjusting your search or filter criteria</p>
        <button 
          @click="clearFilters"
          class="mt-4 btn-primary"
        >
          Clear Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFurnitureStore } from '../stores/furniture'

const route = useRoute()
const furnitureStore = useFurnitureStore()

// Reactive data
const searchQuery = ref('')
const selectedCategory = ref('all')
const priceRange = ref('all')
const sortBy = ref('name')

// Computed properties
const furniture = computed(() => furnitureStore.furniture)
const categories = computed(() => furnitureStore.categories)

const filteredProducts = computed(() => {
  let products = furniture.value

  // Search filter
  if (searchQuery.value) {
    products = furnitureStore.searchProducts(searchQuery.value)
  }

  // Category filter
  if (selectedCategory.value !== 'all') {
    products = products.filter(product => product.category === selectedCategory.value)
  }

  // Price filter
  if (priceRange.value !== 'all') {
    const [min, max] = priceRange.value.split('-').map(Number)
    if (priceRange.value === '1000+') {
      products = products.filter(product => product.price >= 1000)
    } else {
      products = products.filter(product => product.price >= min && product.price <= max)
    }
  }

  return products
})

const sortedProducts = computed(() => {
  const products = [...filteredProducts.value]
  
  switch (sortBy.value) {
    case 'name':
      return products.sort((a, b) => a.name.localeCompare(b.name))
    case 'price-low':
      return products.sort((a, b) => a.price - b.price)
    case 'price-high':
      return products.sort((a, b) => b.price - a.price)
    case 'rating':
      return products.sort((a, b) => b.rating - a.rating)
    default:
      return products
  }
})

// Methods
const addToCart = (product) => {
  furnitureStore.addToCart(product)
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'all'
  priceRange.value = 'all'
  sortBy.value = 'name'
}

// Watch for route query parameters
onMounted(() => {
  if (route.query.category) {
    selectedCategory.value = route.query.category
  }
})

watch(() => route.query.category, (newCategory) => {
  if (newCategory) {
    selectedCategory.value = newCategory
  }
})
</script> 
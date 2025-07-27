<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
        <p class="text-gray-600">Discover our complete collection of elegant furniture</p>
      </div>

      <!-- Filters and Search -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Search -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search products..."
              class="input-field"
              @input="updateSearch"
            >
          </div>

          <!-- Category Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select v-model="selectedCategory" @change="updateCategory" class="input-field">
              <option value="all">All Categories</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>

          <!-- Price Range -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
            <input
              v-model="minPrice"
              type="number"
              placeholder="Min price"
              class="input-field"
              @input="updatePriceFilter"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
            <input
              v-model="maxPrice"
              type="number"
              placeholder="Max price"
              class="input-field"
              @input="updatePriceFilter"
            >
          </div>
        </div>

        <!-- Clear Filters -->
        <div class="mt-4 flex justify-between items-center">
          <button @click="clearFilters" class="text-primary-600 hover:text-primary-700 font-medium">
            Clear all filters
          </button>
          <span class="text-sm text-gray-600">
            {{ filteredProducts.length }} products found
          </span>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>

      <!-- Products Grid -->
      <div v-else-if="filteredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="card overflow-hidden hover:shadow-lg transition-shadow duration-200"
        >
          <router-link :to="`/product/${product.id}`">
            <div class="relative w-full h-64 bg-gray-200">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-64 object-cover"
                @error="handleImageError"
                @load="handleImageLoad"
              >
              <div v-if="imageLoading" class="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
              </div>
            </div>
          </router-link>
          
          <div class="p-6">
            <router-link :to="`/product/${product.id}`" class="block">
              <h3 class="text-lg font-semibold mb-2 hover:text-primary-600 transition-colors">
                {{ product.name }}
              </h3>
            </router-link>
            
            <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{ product.description }}</p>
            
            <div class="flex items-center mb-3">
              <div class="flex items-center">
                <div class="flex text-accent-400">
                  <svg
                    v-for="star in 5"
                    :key="star"
                    class="w-4 h-4"
                    :class="star <= Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span class="text-sm text-gray-600 ml-1">({{ product.reviews }})</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary-600">${{ product.price }}</span>
              <button
                @click="addToCart(product)"
                class="btn-primary"
                :disabled="!product.inStock"
              >
                {{ product.inStock ? 'Add to Cart' : 'Out of Stock' }}
              </button>
            </div>

            <div v-if="!product.inStock" class="mt-2">
              <span class="text-sm text-red-600 font-medium">Out of Stock</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No products found</h3>
        <p class="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
        <button @click="clearFilters" class="btn-primary">
          Clear Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { useFurnitureStore } from '../stores/furniture'

export default {
  name: 'Products',
  setup() {
    const store = useFurnitureStore()
    
    const searchQuery = ref('')
    const selectedCategory = ref('all')
    const minPrice = ref('')
    const maxPrice = ref('')
    const imageLoading = ref({})

    const loading = computed(() => store.loading)
    const categories = computed(() => store.categories)
    const filteredProducts = computed(() => store.filteredFurniture)

    const updateSearch = () => {
      store.updateFilters({ search: searchQuery.value })
    }

    const updateCategory = () => {
      store.updateFilters({ category: selectedCategory.value })
    }

    const updatePriceFilter = () => {
      store.updateFilters({
        minPrice: minPrice.value,
        maxPrice: maxPrice.value
      })
    }

    const clearFilters = () => {
      searchQuery.value = ''
      selectedCategory.value = 'all'
      minPrice.value = ''
      maxPrice.value = ''
      store.updateFilters({
        search: '',
        category: 'all',
        minPrice: '',
        maxPrice: ''
      })
    }

    const addToCart = (product) => {
      store.addToCart(product)
    }

    const handleImageError = (event) => {
      // Set a fallback image if the original fails to load
      event.target.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&crop=center'
    }

    const handleImageLoad = (event) => {
      // Image loaded successfully
      const productId = event.target.dataset.productId
      if (productId) {
        imageLoading.value[productId] = false
      }
    }

    onMounted(async () => {
      await store.fetchFurniture()
      await store.fetchCategories()
    })

    return {
      searchQuery,
      selectedCategory,
      minPrice,
      maxPrice,
      loading,
      categories,
      filteredProducts,
      imageLoading,
      updateSearch,
      updateCategory,
      updatePriceFilter,
      clearFilters,
      addToCart,
      handleImageError,
      handleImageLoad
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 
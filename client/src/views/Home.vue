<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Transform Your Space with
              <span class="text-accent-400">Elegant Furniture</span>
            </h1>
            <p class="text-xl mb-8 text-primary-100">
              Discover our curated collection of premium furniture that combines style, comfort, and functionality for every room in your home.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link 
                to="/products" 
                class="btn-primary text-lg px-8 py-4 text-center"
              >
                Shop Now
              </router-link>
              <button class="btn-secondary text-lg px-8 py-4">
                Learn More
              </button>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="relative">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&crop=center" 
                alt="Elegant Furniture" 
                class="rounded-lg shadow-2xl"
                @error="handleImageError"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Elegant Furniture?</h2>
          <p class="text-lg text-gray-600">Quality, style, and comfort in every piece</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Premium Quality</h3>
            <p class="text-gray-600">Crafted with the finest materials and attention to detail</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p class="text-gray-600">Quick and reliable shipping to your doorstep</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p class="text-gray-600">Dedicated support to ensure your complete satisfaction</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p class="text-lg text-gray-600">Discover our most popular pieces</p>
        </div>
        
        <div v-if="loading" class="flex justify-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
        
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="product in featuredProducts" 
            :key="product.id"
            class="card overflow-hidden"
          >
            <div class="relative w-full h-64 bg-gray-200">
              <img 
                :src="product.image" 
                :alt="product.name"
                class="w-full h-64 object-cover"
                @error="handleImageError"
              >
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 mb-4">{{ product.description }}</p>
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
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/products" class="btn-primary text-lg px-8 py-4">
            View All Products
          </router-link>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p class="text-lg text-gray-600">Find the perfect furniture for every room</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="category in categories" 
            :key="category"
            class="card p-6 text-center hover:scale-105 transition-transform duration-200 cursor-pointer"
            @click="goToCategory(category)"
          >
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold">{{ category }}</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFurnitureStore } from '../stores/furniture'

export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    const store = useFurnitureStore()

    const featuredProducts = computed(() => {
      return store.furniture.slice(0, 6)
    })

    const categories = computed(() => store.categories)

    const loading = computed(() => store.loading)

    const addToCart = (product) => {
      store.addToCart(product)
    }

    const goToCategory = (category) => {
      store.updateFilters({ category })
      router.push('/products')
    }

    const handleImageError = (event) => {
      // Set a fallback image if the original fails to load
      event.target.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&crop=center'
    }

    onMounted(async () => {
      await store.fetchFurniture()
      await store.fetchCategories()
    })

    return {
      featuredProducts,
      categories,
      loading,
      addToCart,
      goToCategory,
      handleImageError
    }
  }
}
</script> 
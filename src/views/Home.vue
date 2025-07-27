<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Elegant Furniture for
            <span class="text-accent-400">Every Home</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-primary-100">
            Discover our curated collection of premium furniture that combines style, comfort, and functionality.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/products" class="btn-primary text-lg px-8 py-3">
              Shop Now
            </router-link>
            <button class="btn-secondary text-lg px-8 py-3 text-primary-600 bg-white hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Elegant Furniture?</h2>
          <p class="text-lg text-gray-600">Quality craftsmanship meets modern design</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p class="text-gray-600">Every piece is crafted with the finest materials and attention to detail.</p>
          </div>
          
          <div class="text-center">
            <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p class="text-gray-600">Quick and reliable shipping to get your furniture to you safely and on time.</p>
          </div>
          
          <div class="text-center">
            <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
            <p class="text-gray-600">We're committed to ensuring you love every piece you purchase from us.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p class="text-lg text-gray-600">Our most popular pieces loved by customers</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="product in featuredProducts" 
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
        
        <div class="text-center mt-8">
          <router-link to="/products" class="btn-primary text-lg px-8 py-3">
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
            class="card group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            @click="$router.push(`/products?category=${category}`)"
          >
            <div class="p-6 text-center">
              <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ category }}</h3>
              <p class="text-gray-600">Explore our {{ category.toLowerCase() }} collection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useFurnitureStore } from '../stores/furniture'

const furnitureStore = useFurnitureStore()

const featuredProducts = computed(() => furnitureStore.featuredProducts)
const categories = computed(() => furnitureStore.categories)

const addToCart = (product) => {
  furnitureStore.addToCart(product)
}
</script> 
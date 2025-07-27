<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Space with
              <span class="text-accent-400">Elegant Furniture</span>
            </h1>
            <p class="text-xl mb-8 text-primary-100">
              Discover our curated collection of premium furniture that combines style, comfort, and functionality for every room in your home.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link 
                to="/products" 
                class="btn-primary text-center"
              >
                Shop Now
              </router-link>
              <button class="btn-secondary text-primary-600 bg-white hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>
          <div class="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop" 
              alt="Elegant living room" 
              class="rounded-lg shadow-2xl"
            >
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
            <p class="text-gray-600">All our furniture is crafted with the finest materials and attention to detail.</p>
          </div>
          
          <div class="text-center">
            <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p class="text-gray-600">Quick and reliable shipping to get your furniture to you as soon as possible.</p>
          </div>
          
          <div class="text-center">
            <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
            <p class="text-gray-600">We're committed to ensuring you love your furniture and your shopping experience.</p>
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
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              >
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            
            <div class="p-4">
              <h3 class="font-semibold text-gray-900 mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 text-sm mb-3">{{ product.description.substring(0, 80) }}...</p>
              <div class="flex justify-between items-center">
                <span class="text-xl font-bold text-primary-600">${{ product.price }}</span>
                <button 
                  @click="addToCart(product)"
                  class="btn-primary text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <router-link 
            to="/products" 
            class="btn-primary"
          >
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
            :key="category.name"
            class="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img 
              :src="category.image" 
              :alt="category.name"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            >
            <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <h3 class="text-white text-xl font-semibold">{{ category.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFurnitureStore } from '../stores/furniture'

const furnitureStore = useFurnitureStore()

const featuredProducts = computed(() => furnitureStore.featuredProducts)

const categories = [
  {
    name: 'Living Room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop'
  },
  {
    name: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=300&fit=crop'
  },
  {
    name: 'Dining Room',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=400&h=300&fit=crop'
  },
  {
    name: 'Office',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=300&fit=crop'
  }
]

const addToCart = (product) => {
  furnitureStore.addToCart(product)
}
</script> 
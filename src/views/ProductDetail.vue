<template>
  <div class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="mb-8">
        <ol class="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <router-link to="/" class="hover:text-primary-600">Home</router-link>
          </li>
          <li>
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </li>
          <li>
            <router-link to="/products" class="hover:text-primary-600">Products</router-link>
          </li>
          <li>
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </li>
          <li class="text-gray-900">{{ product?.name }}</li>
        </ol>
      </nav>

      <div v-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Image -->
        <div class="space-y-4">
          <div class="relative overflow-hidden rounded-lg">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-96 object-cover"
            >
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <div>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ product.name }}</h1>
            <p class="text-2xl font-bold text-primary-600 mb-4">${{ product.price }}</p>
            <p class="text-gray-600">{{ product.description }}</p>
          </div>

          <!-- Stock Status -->
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            <span class="text-green-600 font-medium">In Stock</span>
          </div>

          <!-- Add to Cart -->
          <div class="space-y-4">
            <button 
              @click="addToCart(product)"
              class="w-full btn-primary text-lg py-3"
            >
              Add to Cart
            </button>
          </div>

          <!-- Product Details -->
          <div class="border-t pt-6 space-y-6">
            <!-- Features -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Features</h3>
              <ul class="space-y-2">
                <li 
                  v-for="feature in product.features" 
                  :key="feature"
                  class="flex items-center space-x-2"
                >
                  <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-600">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Dimensions -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Dimensions</h3>
              <p class="text-gray-600">{{ product.dimensions }}</p>
            </div>

            <!-- Colors -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Available Colors</h3>
              <div class="flex space-x-2">
                <span 
                  v-for="color in product.colors" 
                  :key="color"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {{ color }}
                </span>
              </div>
            </div>

            <!-- Category -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Category</h3>
              <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                {{ product.category.replace('-', ' ') }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div v-if="relatedProducts.length > 0" class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="relatedProduct in relatedProducts" 
            :key="relatedProduct.id"
            class="card group hover:shadow-lg transition-shadow duration-300"
          >
            <div class="relative overflow-hidden">
              <img 
                :src="relatedProduct.image" 
                :alt="relatedProduct.name"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              >
            </div>
            
            <div class="p-4">
              <h3 class="font-semibold text-gray-900 mb-2">{{ relatedProduct.name }}</h3>
              <p class="text-gray-600 text-sm mb-3">{{ relatedProduct.description.substring(0, 60) }}...</p>
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-primary-600">${{ relatedProduct.price }}</span>
                <router-link 
                  :to="`/product/${relatedProduct.id}`"
                  class="btn-primary text-sm"
                >
                  View Details
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Not Found -->
      <div v-else class="text-center py-12">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"></path>
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Product not found</h3>
        <p class="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
        <router-link to="/products" class="btn-primary">
          Browse All Products
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useFurnitureStore } from '../stores/furniture'

const route = useRoute()
const furnitureStore = useFurnitureStore()

const product = computed(() => {
  const productId = parseInt(route.params.id)
  return furnitureStore.products.find(p => p.id === productId)
})

const relatedProducts = computed(() => {
  if (!product.value) return []
  
  return furnitureStore.products
    .filter(p => p.category === product.value.category && p.id !== product.value.id)
    .slice(0, 4)
})

const addToCart = (product) => {
  furnitureStore.addToCart(product)
}
</script> 
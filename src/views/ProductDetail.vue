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

      <!-- Product Not Found -->
      <div v-if="!product" class="text-center py-12">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"></path>
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Product not found</h3>
        <p class="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
        <router-link to="/products" class="btn-primary">
          Back to Products
        </router-link>
      </div>

      <!-- Product Details -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Image -->
        <div class="space-y-4">
          <div class="relative overflow-hidden rounded-lg">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-96 lg:h-[500px] object-cover"
            >
            <div class="absolute top-4 right-4">
              <span 
                :class="[
                  'px-3 py-1 text-sm font-medium rounded-full',
                  product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                ]"
              >
                {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
              </span>
            </div>
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <div>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ product.name }}</h1>
            <p class="text-lg text-gray-600">{{ product.category }}</p>
          </div>

          <!-- Rating -->
          <div class="flex items-center space-x-4">
            <div class="flex items-center">
              <div class="flex text-yellow-400">
                <svg 
                  v-for="star in 5" 
                  :key="star"
                  :class="[
                    'w-5 h-5',
                    star <= Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'
                  ]"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span class="text-gray-600 ml-2">{{ product.rating }} ({{ product.reviews }} reviews)</span>
            </div>
          </div>

          <!-- Price -->
          <div>
            <span class="text-4xl font-bold text-primary-600">${{ product.price }}</span>
          </div>

          <!-- Description -->
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Description</h3>
            <p class="text-gray-600 leading-relaxed">{{ product.description }}</p>
          </div>

          <!-- Features -->
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Features</h3>
            <ul class="space-y-2">
              <li 
                v-for="feature in product.features" 
                :key="feature"
                class="flex items-center text-gray-600"
              >
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- Add to Cart -->
          <div class="space-y-4">
            <button 
              @click="addToCart(product)"
              :disabled="!product.inStock"
              :class="[
                'w-full py-3 px-6 rounded-lg font-medium text-lg transition-colors',
                product.inStock 
                  ? 'bg-accent-500 hover:bg-accent-600 text-white' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              ]"
            >
              <span v-if="product.inStock">Add to Cart</span>
              <span v-else>Out of Stock</span>
            </button>
            
            <div class="flex space-x-4">
              <button class="flex-1 btn-secondary">
                <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                Add to Wishlist
              </button>
              <button class="flex-1 btn-secondary">
                <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="mt-16">
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
              <div class="flex items-center justify-between mb-3">
                <span class="text-xl font-bold text-primary-600">${{ relatedProduct.price }}</span>
                <div class="flex text-yellow-400">
                  <svg 
                    v-for="star in 5" 
                    :key="star"
                    :class="[
                      'w-4 h-4',
                      star <= Math.floor(relatedProduct.rating) ? 'fill-current' : 'fill-gray-300'
                    ]"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              </div>
              
              <div class="flex gap-2">
                <router-link 
                  :to="`/product/${relatedProduct.id}`"
                  class="flex-1 btn-secondary text-center text-sm"
                >
                  View Details
                </router-link>
                <button 
                  @click="addToCart(relatedProduct)"
                  :disabled="!relatedProduct.inStock"
                  :class="[
                    'px-3 py-2 rounded-lg font-medium transition-colors text-sm',
                    relatedProduct.inStock 
                      ? 'bg-accent-500 hover:bg-accent-600 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  ]"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
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
  return furnitureStore.getProductById(route.params.id)
})

const relatedProducts = computed(() => {
  if (!product.value) return []
  
  return furnitureStore.furniture
    .filter(item => 
      item.id !== product.value.id && 
      item.category === product.value.category
    )
    .slice(0, 4)
})

const addToCart = (product) => {
  furnitureStore.addToCart(product)
}
</script> 
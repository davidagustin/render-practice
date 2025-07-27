<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>

      <!-- Product Not Found -->
      <div v-else-if="!product" class="text-center py-12">
        <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Product not found</h3>
        <p class="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
        <router-link to="/products" class="btn-primary">
          Back to Products
        </router-link>
      </div>

      <!-- Product Details -->
      <div v-else class="bg-white rounded-lg shadow-sm overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Product Image -->
          <div class="p-8">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-96 object-cover rounded-lg"
            >
          </div>

          <!-- Product Info -->
          <div class="p-8">
            <div class="mb-6">
              <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ product.name }}</h1>
              <p class="text-lg text-gray-600 mb-4">{{ product.description }}</p>
              
              <!-- Rating -->
              <div class="flex items-center mb-4">
                <div class="flex text-accent-400">
                  <svg
                    v-for="star in 5"
                    :key="star"
                    class="w-5 h-5"
                    :class="star <= Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span class="text-sm text-gray-600 ml-2">{{ product.rating }} ({{ product.reviews }} reviews)</span>
              </div>

              <!-- Category -->
              <div class="mb-4">
                <span class="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                  {{ product.category }}
                </span>
              </div>
            </div>

            <!-- Price and Stock -->
            <div class="mb-6">
              <div class="flex items-center justify-between mb-4">
                <span class="text-4xl font-bold text-primary-600">${{ product.price }}</span>
                <div class="flex items-center">
                  <div 
                    class="w-3 h-3 rounded-full mr-2"
                    :class="product.inStock ? 'bg-green-500' : 'bg-red-500'"
                  ></div>
                  <span 
                    class="text-sm font-medium"
                    :class="product.inStock ? 'text-green-600' : 'text-red-600'"
                  >
                    {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Add to Cart -->
            <div class="mb-6">
              <button
                @click="addToCart"
                class="w-full btn-primary text-lg py-4"
                :disabled="!product.inStock"
              >
                {{ product.inStock ? 'Add to Cart' : 'Out of Stock' }}
              </button>
            </div>

            <!-- Product Features -->
            <div class="border-t border-gray-200 pt-6">
              <h3 class="text-lg font-semibold mb-4">Product Features</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Premium quality materials
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Expert craftsmanship
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Free shipping on orders over $500
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30-day return policy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            class="card overflow-hidden"
          >
            <router-link :to="`/product/${relatedProduct.id}`">
              <img
                :src="relatedProduct.image"
                :alt="relatedProduct.name"
                class="w-full h-48 object-cover"
              >
            </router-link>
            <div class="p-4">
              <router-link :to="`/product/${relatedProduct.id}`" class="block">
                <h3 class="font-semibold mb-2 hover:text-primary-600 transition-colors">
                  {{ relatedProduct.name }}
                </h3>
              </router-link>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-primary-600">${{ relatedProduct.price }}</span>
                <button
                  @click="addToCart(relatedProduct)"
                  class="btn-primary text-sm"
                  :disabled="!relatedProduct.inStock"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFurnitureStore } from '../stores/furniture'

export default {
  name: 'ProductDetail',
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const store = useFurnitureStore()
    
    const product = ref(null)
    const loading = ref(true)

    const relatedProducts = computed(() => {
      if (!product.value) return []
      return store.furniture
        .filter(item => item.id !== product.value.id && item.category === product.value.category)
        .slice(0, 4)
    })

    const addToCart = (productToAdd = product.value) => {
      if (productToAdd && productToAdd.inStock) {
        store.addToCart(productToAdd)
      }
    }

    onMounted(async () => {
      loading.value = true
      try {
        const productId = parseInt(props.id)
        product.value = await store.fetchProductById(productId)
        
        if (!product.value) {
          router.push('/products')
        }
      } catch (error) {
        console.error('Error fetching product:', error)
        router.push('/products')
      } finally {
        loading.value = false
      }
    })

    return {
      product,
      loading,
      relatedProducts,
      addToCart
    }
  }
}
</script> 
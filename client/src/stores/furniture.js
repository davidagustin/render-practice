import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useFurnitureStore = defineStore('furniture', () => {
  const furniture = ref([])
  const categories = ref([])
  const loading = ref(false)
  const cart = ref([])
  const filters = ref({
    category: 'all',
    search: '',
    minPrice: '',
    maxPrice: ''
  })

  const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  const cartCount = computed(() => {
    return cart.value.reduce((count, item) => count + item.quantity, 0)
  })

  const filteredFurniture = computed(() => {
    let filtered = [...furniture.value]

    if (filters.value.category && filters.value.category !== 'all') {
      filtered = filtered.filter(item => item.category === filters.value.category)
    }

    if (filters.value.search) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(filters.value.search.toLowerCase()) ||
        item.description.toLowerCase().includes(filters.value.search.toLowerCase())
      )
    }

    if (filters.value.minPrice) {
      filtered = filtered.filter(item => item.price >= parseFloat(filters.value.minPrice))
    }

    if (filters.value.maxPrice) {
      filtered = filtered.filter(item => item.price <= parseFloat(filters.value.maxPrice))
    }

    return filtered
  })

  async function fetchFurniture() {
    loading.value = true
    try {
      const response = await fetch('/api/furniture')
      furniture.value = await response.json()
    } catch (error) {
      console.error('Error fetching furniture:', error)
    } finally {
      loading.value = false
    }
  }

  async function fetchCategories() {
    try {
      const response = await fetch('/api/categories')
      categories.value = await response.json()
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  async function fetchProductById(id) {
    try {
      const response = await fetch(`/api/furniture/${id}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching product:', error)
      return null
    }
  }

  function addToCart(product) {
    const existingItem = cart.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
  }

  function removeFromCart(productId) {
    const index = cart.value.findIndex(item => item.id === productId)
    if (index > -1) {
      cart.value.splice(index, 1)
    }
  }

  function updateQuantity(productId, quantity) {
    const item = cart.value.find(item => item.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = quantity
      }
    }
  }

  function clearCart() {
    cart.value = []
  }

  function updateFilters(newFilters) {
    filters.value = { ...filters.value, ...newFilters }
  }

  return {
    furniture,
    categories,
    loading,
    cart,
    filters,
    cartTotal,
    cartCount,
    filteredFurniture,
    fetchFurniture,
    fetchCategories,
    fetchProductById,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    updateFilters
  }
}) 
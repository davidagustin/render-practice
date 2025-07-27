import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useFurnitureStore = defineStore('furniture', () => {
  // Furniture data
  const furniture = ref([
    {
      id: 1,
      name: "Modern Leather Sofa",
      category: "Living Room",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&crop=center",
      description: "Elegant leather sofa with modern design, perfect for any living room. Features premium leather upholstery and sturdy construction.",
      inStock: true,
      rating: 4.8,
      reviews: 124,
      features: ["Premium leather", "Sturdy construction", "Modern design", "Comfortable seating"]
    },
    {
      id: 2,
      name: "Oak Dining Table",
      category: "Dining Room",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=600&h=400&fit=crop&crop=center",
      description: "Solid oak dining table that seats 6 people comfortably. Perfect for family gatherings and dinner parties.",
      inStock: true,
      rating: 4.6,
      reviews: 89,
      features: ["Solid oak wood", "Seats 6 people", "Natural finish", "Durable construction"]
    },
    {
      id: 3,
      name: "Queen Size Bed Frame",
      category: "Bedroom",
      price: 649.99,
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&h=400&fit=crop&crop=center",
      description: "Elegant queen size bed frame with upholstered headboard. Creates a luxurious bedroom atmosphere.",
      inStock: true,
      rating: 4.7,
      reviews: 156,
      features: ["Queen size", "Upholstered headboard", "Easy assembly", "Modern design"]
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      category: "Office",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center",
      description: "Comfortable ergonomic office chair with adjustable features. Perfect for long work hours.",
      inStock: true,
      rating: 4.9,
      reviews: 203,
      features: ["Ergonomic design", "Adjustable height", "Lumbar support", "Breathable mesh"]
    },
    {
      id: 5,
      name: "Coffee Table",
      category: "Living Room",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&h=400&fit=crop&crop=center",
      description: "Modern coffee table with storage shelf. Functional and stylish addition to your living room.",
      inStock: false,
      rating: 4.5,
      reviews: 67,
      features: ["Storage shelf", "Modern design", "Sturdy construction", "Easy to clean"]
    },
    {
      id: 6,
      name: "Bookshelf",
      category: "Office",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
      description: "Versatile bookshelf perfect for organizing books and decor. Fits any room style.",
      inStock: true,
      rating: 4.4,
      reviews: 92,
      features: ["5 shelves", "Versatile design", "Easy assembly", "Sturdy construction"]
    },
    {
      id: 7,
      name: "Accent Armchair",
      category: "Living Room",
      price: 549.99,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop&crop=center",
      description: "Stylish accent armchair perfect for reading nooks and living spaces. Adds character to any room.",
      inStock: true,
      rating: 4.7,
      reviews: 78,
      features: ["Accent design", "Comfortable seating", "Quality fabric", "Compact size"]
    },
    {
      id: 8,
      name: "Nightstand",
      category: "Bedroom",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&h=400&fit=crop&crop=center",
      description: "Elegant nightstand with drawer storage and modern design. Perfect bedside companion.",
      inStock: true,
      rating: 4.6,
      reviews: 45,
      features: ["Drawer storage", "Modern design", "Perfect height", "Easy assembly"]
    }
  ])

  // Cart state
  const cart = ref([])

  // Computed properties
  const categories = computed(() => {
    return [...new Set(furniture.value.map(item => item.category))]
  })

  const cartItemCount = computed(() => {
    return cart.value.length
  })

  const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => total + item.price, 0).toFixed(2)
  })

  const featuredProducts = computed(() => {
    return furniture.value.filter(item => item.rating >= 4.5).slice(0, 4)
  })

  // Actions
  const addToCart = (product) => {
    cart.value.push(product)
  }

  const removeFromCart = (productId) => {
    const index = cart.value.findIndex(item => item.id === productId)
    if (index > -1) {
      cart.value.splice(index, 1)
    }
  }

  const getProductById = (id) => {
    return furniture.value.find(item => item.id === parseInt(id))
  }

  const getProductsByCategory = (category) => {
    if (category === 'all') return furniture.value
    return furniture.value.filter(item => item.category === category)
  }

  const searchProducts = (query) => {
    const lowercaseQuery = query.toLowerCase()
    return furniture.value.filter(item => 
      item.name.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      item.category.toLowerCase().includes(lowercaseQuery)
    )
  }

  const filterByPrice = (minPrice, maxPrice) => {
    return furniture.value.filter(item => 
      item.price >= minPrice && item.price <= maxPrice
    )
  }

  return {
    furniture,
    cart,
    categories,
    cartItemCount,
    cartTotal,
    featuredProducts,
    addToCart,
    removeFromCart,
    getProductById,
    getProductsByCategory,
    searchProducts,
    filterByPrice
  }
}) 
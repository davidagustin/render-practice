import { defineStore } from 'pinia'

export const useFurnitureStore = defineStore('furniture', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Modern Leather Sofa',
        price: 1299,
        category: 'living-room',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=300&fit=crop',
        description: 'Elegant leather sofa with modern design, perfect for any living room.',
        features: ['Premium leather', 'Sturdy frame', 'Comfortable cushions', 'Easy to clean'],
        dimensions: '84" W x 35" D x 31" H',
        colors: ['Brown', 'Black', 'Gray'],
        inStock: true
      },
      {
        id: 2,
        name: 'Queen Size Bed Frame',
        price: 899,
        category: 'bedroom',
        image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500&h=300&fit=crop',
        description: 'Contemporary queen size bed frame with upholstered headboard.',
        features: ['Upholstered headboard', 'Solid wood frame', 'Easy assembly', 'Queen size'],
        dimensions: '65" W x 85" L x 45" H',
        colors: ['Gray', 'Beige', 'Navy'],
        inStock: true
      },
      {
        id: 3,
        name: 'Dining Table Set',
        price: 1499,
        category: 'dining-room',
        image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&h=300&fit=crop',
        description: 'Complete dining set with table and 6 chairs, perfect for family meals.',
        features: ['Solid wood table', '6 matching chairs', 'Seats 6 people', 'Extendable'],
        dimensions: '60" W x 36" D x 30" H',
        colors: ['Oak', 'Walnut', 'White'],
        inStock: true
      },
      {
        id: 4,
        name: 'Ergonomic Office Chair',
        price: 399,
        category: 'office',
        image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=300&fit=crop',
        description: 'Professional ergonomic office chair with adjustable features.',
        features: ['Ergonomic design', 'Adjustable height', 'Lumbar support', 'Breathable mesh'],
        dimensions: '28" W x 28" D x 45" H',
        colors: ['Black', 'Gray', 'Blue'],
        inStock: true
      },
      {
        id: 5,
        name: 'Accent Armchair',
        price: 599,
        category: 'living-room',
        image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=300&fit=crop',
        description: 'Stylish accent chair with velvet upholstery and gold legs.',
        features: ['Velvet upholstery', 'Gold metal legs', 'Comfortable seating', 'Statement piece'],
        dimensions: '32" W x 32" D x 35" H',
        colors: ['Emerald', 'Blush', 'Navy'],
        inStock: true
      },
      {
        id: 6,
        name: 'Nightstand',
        price: 299,
        category: 'bedroom',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
        description: 'Modern nightstand with drawer storage and clean lines.',
        features: ['Drawer storage', 'Clean design', 'Easy assembly', 'Versatile'],
        dimensions: '20" W x 16" D x 24" H',
        colors: ['White', 'Walnut', 'Black'],
        inStock: true
      },
      {
        id: 7,
        name: 'Bookshelf',
        price: 449,
        category: 'living-room',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
        description: 'Tall bookshelf with multiple shelves for storage and display.',
        features: ['5 shelves', 'Solid construction', 'Easy assembly', 'Versatile storage'],
        dimensions: '36" W x 12" D x 72" H',
        colors: ['White', 'Oak', 'Black'],
        inStock: true
      },
      {
        id: 8,
        name: 'Coffee Table',
        price: 349,
        category: 'living-room',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
        description: 'Modern coffee table with storage shelf and clean design.',
        features: ['Storage shelf', 'Clean lines', 'Sturdy construction', 'Versatile'],
        dimensions: '48" W x 24" D x 18" H',
        colors: ['White', 'Walnut', 'Black'],
        inStock: true
      }
    ],
    cart: []
  }),

  getters: {
    cartItemCount: (state) => state.cart.length,
    cartTotal: (state) => state.cart.reduce((total, item) => total + item.price, 0),
    productsByCategory: (state) => (category) => {
      return state.products.filter(product => product.category === category)
    },
    featuredProducts: (state) => {
      return state.products.slice(0, 4)
    }
  },

  actions: {
    addToCart(product) {
      const existingItem = this.cart.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },
    
    removeFromCart(productId) {
      const index = this.cart.findIndex(item => item.id === productId)
      if (index > -1) {
        this.cart.splice(index, 1)
      }
    },
    
    updateQuantity(productId, quantity) {
      const item = this.cart.find(item => item.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId)
        } else {
          item.quantity = quantity
        }
      }
    },
    
    clearCart() {
      this.cart = []
    }
  }
}) 
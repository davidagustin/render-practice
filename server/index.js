const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());

// Serve static files from build directory (for Render) or client/dist (for development)
const staticPath = path.join(__dirname, '../build');
const distPath = path.join(__dirname, '../client/dist');

if (require('fs').existsSync(staticPath)) {
  app.use(express.static(staticPath));
} else {
  app.use(express.static(distPath));
}

// Sample furniture data with better image URLs
const furnitureData = [
  {
    id: 1,
    name: "Modern Leather Sofa",
    category: "Living Room",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&crop=center",
    description: "Elegant leather sofa with modern design, perfect for any living room.",
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Oak Dining Table",
    category: "Dining Room",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=600&h=400&fit=crop&crop=center",
    description: "Solid oak dining table that seats 6 people comfortably.",
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: "Queen Size Bed Frame",
    category: "Bedroom",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&h=400&fit=crop&crop=center",
    description: "Elegant queen size bed frame with upholstered headboard.",
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    category: "Office",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center",
    description: "Comfortable ergonomic office chair with adjustable features.",
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 5,
    name: "Coffee Table",
    category: "Living Room",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&h=400&fit=crop&crop=center",
    description: "Modern coffee table with storage shelf.",
    inStock: false,
    rating: 4.5,
    reviews: 67
  },
  {
    id: 6,
    name: "Bookshelf",
    category: "Office",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
    description: "Versatile bookshelf perfect for organizing books and decor.",
    inStock: true,
    rating: 4.4,
    reviews: 92
  },
  {
    id: 7,
    name: "Accent Armchair",
    category: "Living Room",
    price: 549.99,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop&crop=center",
    description: "Stylish accent armchair perfect for reading nooks and living spaces.",
    inStock: true,
    rating: 4.7,
    reviews: 78
  },
  {
    id: 8,
    name: "Nightstand",
    category: "Bedroom",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&h=400&fit=crop&crop=center",
    description: "Elegant nightstand with drawer storage and modern design.",
    inStock: true,
    rating: 4.6,
    reviews: 45
  }
];

// API Routes
app.get('/api/furniture', (req, res) => {
  const { category, search, minPrice, maxPrice } = req.query;
  let filteredData = [...furnitureData];

  if (category && category !== 'all') {
    filteredData = filteredData.filter(item => item.category === category);
  }

  if (search) {
    filteredData = filteredData.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (minPrice) {
    filteredData = filteredData.filter(item => item.price >= parseFloat(minPrice));
  }

  if (maxPrice) {
    filteredData = filteredData.filter(item => item.price <= parseFloat(maxPrice));
  }

  res.json(filteredData);
});

app.get('/api/furniture/:id', (req, res) => {
  const item = furnitureData.find(item => item.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.get('/api/categories', (req, res) => {
  const categories = [...new Set(furnitureData.map(item => item.category))];
  res.json(categories);
});

// Serve Vue app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
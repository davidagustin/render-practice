# Elegant Furniture Store

A modern, responsive furniture store website built with Vue.js 3, Vite, and Tailwind CSS. This is a static website optimized for fast loading and excellent user experience.

## 🚀 Live Demo

**Live Website**: [https://elegant-furniture-store.onrender.com](https://elegant-furniture-store.onrender.com)

## ✨ Features

- **Modern Design**: Clean, elegant interface with responsive design
- **Product Catalog**: Browse furniture by category with detailed product pages
- **Search & Filter**: Find products by name, category, and price range
- **Shopping Cart**: Add items to cart with real-time updates
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Loading**: Optimized for performance with Vite build tool
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: Vue.js 3 (Composition API)
- **Build Tool**: Vite 4
- **Styling**: Tailwind CSS 3
- **State Management**: Pinia 2
- **Routing**: Vue Router 4
- **Deployment**: Render (Static Site)

## 📁 Project Structure

```
elegant-furniture-store/
├── src/
│   ├── components/          # Vue components
│   ├── views/              # Page components
│   │   ├── Home.vue        # Homepage
│   │   ├── Products.vue    # Product catalog
│   │   ├── ProductDetail.vue # Individual product page
│   │   └── About.vue       # About page
│   ├── stores/             # Pinia stores
│   │   └── furniture.js    # Furniture data and cart state
│   ├── router/             # Vue Router configuration
│   ├── style.css           # Global styles
│   └── main.js             # App entry point
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── render.yaml             # Render deployment configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/davidagustin/render-practice.git
   cd render-practice
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages & Features

### Homepage (`/`)
- Hero section with call-to-action
- Featured products showcase
- Category navigation
- Company values and features

### Products (`/products`)
- Complete product catalog
- Search functionality
- Category and price filtering
- Sorting options (name, price, rating)
- Product cards with ratings and stock status

### Product Detail (`/product/:id`)
- Detailed product information
- High-quality product images
- Feature list
- Related products
- Add to cart functionality

### About (`/about`)
- Company story and mission
- Team information
- Contact details
- Company values

### Shopping Cart
- Slide-out cart sidebar
- Add/remove items
- Real-time total calculation
- Checkout button (demo)

## 🎨 Design System

### Colors
- **Primary**: Gray scale (`primary-50` to `primary-900`)
- **Accent**: Orange scale (`accent-50` to `accent-900`)
- **Neutral**: Standard gray scale

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Product cards with hover effects
- **Forms**: Input fields with focus states
- **Navigation**: Responsive header with mobile support

## 🚀 Deployment

### Render (Recommended)

This project is configured for easy deployment on Render:

1. **Connect your GitHub repository** to Render
2. **Create a new Static Site** service
3. **Configure the build settings**:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. **Deploy automatically** on every push to main branch

### Other Platforms

The static build can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Customization

### Adding New Products

Edit `src/stores/furniture.js` to add new products:

```javascript
{
  id: 9,
  name: "New Product Name",
  category: "Category Name",
  price: 299.99,
  image: "https://images.unsplash.com/...",
  description: "Product description...",
  inStock: true,
  rating: 4.5,
  reviews: 50,
  features: ["Feature 1", "Feature 2", "Feature 3"]
}
```

### Styling Changes

- **Colors**: Modify `tailwind.config.js`
- **Components**: Edit `src/style.css`
- **Layout**: Update individual Vue components

### Adding New Pages

1. Create new component in `src/views/`
2. Add route in `src/router/index.js`
3. Update navigation in `src/App.vue`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email hello@elegantfurniture.com or create an issue in this repository.

---

**Built with ❤️ using Vue.js and Tailwind CSS** 
# 🪑 Elegant Furniture Store

A modern, responsive furniture store built with Vue.js 3, Vite, and Tailwind CSS. This static website showcases a beautiful collection of premium furniture with a seamless shopping experience.

## ✨ Features

- **Modern Design**: Clean, elegant UI with responsive design
- **Product Catalog**: Browse furniture by category with search and filtering
- **Shopping Cart**: Add items to cart with real-time updates
- **Product Details**: Detailed product pages with specifications
- **Client-side Routing**: Smooth navigation with Vue Router
- **State Management**: Pinia store for cart and product management
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized with Vite for lightning-fast builds

## 🛠️ Tech Stack

- **Frontend Framework**: Vue.js 3 (Composition API)
- **Build Tool**: Vite 4
- **Styling**: Tailwind CSS 3
- **State Management**: Pinia 2
- **Routing**: Vue Router 4
- **Deployment**: Render (Static Site)

## 🚀 Live Demo

Visit the live website: [Elegant Furniture Store](https://render-practice-or72.onrender.com)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/elegant-furniture-store.git
   cd elegant-furniture-store
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

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
elegant-furniture-store/
├── src/
│   ├── components/          # Vue components
│   ├── views/              # Page components
│   │   ├── Home.vue        # Homepage
│   │   ├── Products.vue    # Product catalog
│   │   ├── ProductDetail.vue # Product details
│   │   └── About.vue       # About page
│   ├── stores/             # Pinia stores
│   │   └── furniture.js    # Product and cart store
│   ├── router/             # Vue Router configuration
│   │   └── index.js
│   ├── App.vue             # Main app component
│   ├── main.js             # App entry point
│   └── style.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── render.yaml             # Render deployment config
└── README.md               # Project documentation
```

## 🎨 Design System

### Colors
- **Primary**: Gray scale (50-900)
- **Accent**: Orange scale (50-900)
- **Background**: Light gray (#f9fafb)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Product cards with hover effects
- **Forms**: Input fields with focus states
- **Navigation**: Responsive header with cart

## 🛍️ Features Overview

### Homepage
- Hero section with call-to-action
- Featured products showcase
- Category browsing
- Company values and features

### Product Catalog
- Search functionality
- Category filtering
- Price range filtering
- Sort by name, price (low/high)
- Responsive product grid

### Product Details
- High-quality product images
- Detailed specifications
- Feature lists
- Related products
- Add to cart functionality

### Shopping Cart
- Sidebar cart with slide animation
- Add/remove items
- Real-time total calculation
- Checkout button (placeholder)

## 🚀 Deployment

This project is configured for deployment on Render as a Static Site.

### Render Deployment Steps

1. **Connect Repository**
   - Link your GitHub repository to Render
   - Select the repository: `elegant-furniture-store`

2. **Configure Build Settings**
   - **Build Command**: `npm ci && npm run build`
   - **Publish Directory**: `dist`
   - **Environment**: Static Site

3. **Deploy**
   - Render will automatically build and deploy your site
   - Your site will be available at: `https://render-practice-or72.onrender.com`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The dist/ folder contains your static files
# Upload these files to your hosting provider
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Adding New Products

To add new products, edit `src/stores/furniture.js`:

```javascript
{
  id: 9,
  name: 'New Product Name',
  price: 599,
  category: 'living-room',
  image: 'https://images.unsplash.com/...',
  description: 'Product description...',
  features: ['Feature 1', 'Feature 2'],
  dimensions: '48" W x 24" D x 18" H',
  colors: ['White', 'Black'],
  inStock: true
}
```

### Customizing Styles

- Edit `src/style.css` for global styles
- Modify `tailwind.config.js` for theme customization
- Component-specific styles can be added in individual `.vue` files

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Features

- Meta tags for social sharing
- Semantic HTML structure
- Optimized images with alt text
- Fast loading times
- Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vue.js](https://vuejs.org/) - Progressive JavaScript framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Pinia](https://pinia.vuejs.org/) - Intuitive, type safe store for Vue
- [Unsplash](https://unsplash.com/) - Beautiful free images
- [Render](https://render.com/) - Cloud application hosting platform

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact us at support@elegantfurniture.com.

---

**Built with ❤️ using Vue.js and modern web technologies** 
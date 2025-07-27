# Elegant Furniture Store

A modern, responsive furniture store built with Vue.js and Node.js, designed to be deployed on Render.

## Features

- 🛍️ **Product Catalog**: Browse furniture by category with search and filtering
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 🛒 **Shopping Cart**: Add items to cart with quantity management
- 🔍 **Advanced Search**: Filter by category, price range, and search terms
- 📱 **Mobile Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Vite for optimal development and build times
- 🚀 **Render Ready**: Configured for easy deployment on Render

## Tech Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router** - Official router for Vue.js
- **Pinia** - State management for Vue
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Compression** - Response compression

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd render-practice
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   cd ..
   ```

3. **Start development servers**
   ```bash
   # Start both frontend and backend in development mode
   npm run dev
   ```

   This will start:
   - Backend server on `http://localhost:3000`
   - Frontend dev server on `http://localhost:5173`

### Development Scripts

```bash
# Start both frontend and backend
npm run dev

# Start only the backend server
npm run server

# Start only the frontend dev server
npm run client

# Build the frontend for production
npm run build

# Start production server
npm start
```

## Project Structure

```
render-practice/
├── server/                 # Backend server
│   └── index.js           # Express server with API routes
├── client/                # Vue.js frontend
│   ├── src/
│   │   ├── components/    # Vue components
│   │   ├── views/         # Page components
│   │   ├── stores/        # Pinia stores
│   │   ├── router/        # Vue Router configuration
│   │   ├── App.vue        # Root component
│   │   └── main.js        # Application entry point
│   ├── public/            # Static assets
│   └── index.html         # HTML template
├── package.json           # Root package.json
└── render.yaml           # Render deployment configuration
```

## API Endpoints

### Products
- `GET /api/furniture` - Get all furniture items with optional filters
- `GET /api/furniture/:id` - Get specific furniture item
- `GET /api/categories` - Get all categories

### Query Parameters
- `category` - Filter by category
- `search` - Search in name and description
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter

## Deployment on Render

This application is configured for easy deployment on Render.

### Automatic Deployment

1. **Connect your repository** to Render
2. **Create a new Web Service**
3. **Use the following settings**:
   - **Build Command**: `npm run install-all && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node.js

### Manual Deployment

1. **Push your code** to your Git repository
2. **Create a new Web Service** on Render
3. **Configure the service**:
   - **Repository**: Your Git repository
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: Leave empty (root of repository)
   - **Environment**: Node.js
   - **Build Command**: `npm run install-all && npm run build`
   - **Start Command**: `npm start`

### Environment Variables

The following environment variables are automatically set:
- `NODE_ENV=production`
- `PORT=3000`

## Features in Detail

### Product Catalog
- Browse furniture by category (Living Room, Bedroom, Dining Room, Office)
- Search functionality with real-time filtering
- Price range filtering
- Product ratings and reviews display

### Shopping Cart
- Add/remove items from cart
- Quantity management
- Cart total calculation
- Persistent cart state (in memory during session)

### Responsive Design
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly interface
- Fast loading times

### Performance Optimizations
- Lazy loading of images
- Code splitting with Vite
- Optimized bundle sizes
- Compression middleware

## Customization

### Adding New Products

Edit the `furnitureData` array in `server/index.js`:

```javascript
{
  id: 7,
  name: "Your Product Name",
  category: "Category Name",
  price: 299.99,
  image: "https://your-image-url.com/image.jpg",
  description: "Product description",
  inStock: true,
  rating: 4.5,
  reviews: 50
}
```

### Styling

The application uses Tailwind CSS. Customize the design by:
- Modifying `client/tailwind.config.js` for theme changes
- Adding custom styles in `client/src/style.css`
- Using Tailwind utility classes in components

### API Extensions

Add new API endpoints in `server/index.js`:

```javascript
app.get('/api/your-endpoint', (req, res) => {
  // Your endpoint logic
  res.json({ data: 'your data' });
});
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email hello@elegantfurniture.com or create an issue in the repository. 
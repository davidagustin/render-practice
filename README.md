# 🛍️ Elegant Furniture Store

A modern, responsive furniture store built with Vue.js and Node.js, designed to be deployed on Render.

## 🌐 Live Demo

**🔗 [View Live Application](https://render-practice-h1t2.onrender.com/)**

Experience the full furniture store with all features including product browsing, search, filtering, and shopping cart functionality.

## 📊 Deployment Status

| Status | Environment | URL |
|--------|-------------|-----|
| ✅ **Live** | Production | [https://render-practice-h1t2.onrender.com/](https://render-practice-h1t2.onrender.com/) |
| 🔄 **Development** | Local | `http://localhost:3000` |

**Last Deployed**: July 27, 2025  
**Repository**: [https://github.com/davidagustin/render-practice](https://github.com/davidagustin/render-practice)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git repository

### Local Development
```bash
# Clone and install
git clone https://github.com/davidagustin/render-practice.git
cd render-practice
npm run install-all

# Start development servers
npm run dev
```

### Deploy to Render
```bash
# Push to Git repository
git add .
git commit -m "Ready for deployment"
git push origin main

# Deploy on Render Dashboard
# 1. Go to https://dashboard.render.com/
# 2. Click "New +" → "Blueprint"
# 3. Connect your repository
# 4. Click "Apply"
```

---

## ✨ Features

- 🛍️ **Product Catalog**: Browse furniture by category with search and filtering
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 🛒 **Shopping Cart**: Add items to cart with quantity management
- 🔍 **Advanced Search**: Filter by category, price range, and search terms
- 📱 **Mobile Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Vite for optimal development and build times
- 🚀 **Render Ready**: Configured for easy deployment on Render

---

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3.3.8** - Progressive JavaScript framework
- **Vue Router 4.2.5** - Official router for Vue.js
- **Pinia 2.1.7** - State management for Vue
- **Tailwind CSS 3.3.6** - Utility-first CSS framework
- **Vite 4.5.0** - Fast build tool and dev server

### Backend
- **Node.js 18+** - JavaScript runtime
- **Express.js 4.18.2** - Web application framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Compression** - Response compression

---

## 📁 Project Structure

```
render-practice/
├── 📄 package.json              # Root dependencies & scripts
├── 📄 render.yaml              # Render deployment config
├── 📄 deploy.sh                # Deployment automation script
├── 📄 verify-deployment.js     # Deployment verification
├── 📁 server/                  # Backend server
│   └── 📄 index.js            # Express server with API routes
├── 📁 client/                  # Vue.js frontend
│   ├── 📄 package.json        # Frontend dependencies
│   ├── 📄 vite.config.js      # Vite build configuration
│   ├── 📄 tailwind.config.js  # Tailwind CSS config
│   └── 📁 src/
│       ├── 📄 App.vue         # Main Vue component
│       ├── 📄 main.js         # Vue app entry point
│       ├── 📁 views/          # Page components
│       ├── 📁 stores/         # Pinia state management
│       └── 📁 router/         # Vue Router configuration
└── 📄 README.md               # This file
```

---

## 🚀 Deployment Guide

### Prerequisites
- A GitHub, GitLab, or Bitbucket account
- A Render account (free tier available)

### Step 1: Prepare Your Repository
1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)
2. **Ensure all files are committed** including:
   - `package.json` (root)
   - `client/package.json`
   - `server/index.js`
   - `render.yaml`
   - All Vue.js components and assets

### Step 2: Deploy to Render

#### Option A: Using render.yaml (Recommended)
1. **Go to [Render Dashboard](https://dashboard.render.com/)**
2. **Click "New +" and select "Blueprint"**
3. **Connect your Git repository**
4. **Render will automatically detect the `render.yaml` file**
5. **Click "Apply" to deploy**

#### Option B: Manual Deployment
1. **Go to [Render Dashboard](https://dashboard.render.com/)**
2. **Click "New +" and select "Web Service"**
3. **Connect your Git repository**
4. **Configure the service:**
   - **Name**: `elegant-furniture-store` (or your preferred name)
   - **Environment**: `Node`
   - **Region**: Choose closest to your users
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: Leave empty (root of repository)
   - **Build Command**: `npm run install-all && npm run build`
   - **Start Command**: `npm start`
5. **Click "Create Web Service"**

### Step 3: Environment Variables
The following environment variables are automatically set by Render:
- `NODE_ENV=production`
- `PORT=3000`

### Step 4: Verify Deployment
1. **Wait for the build to complete** (usually 2-5 minutes)
2. **Check the deployment logs** for any errors
3. **Visit your application URL** (provided by Render)
4. **Test the following features:**
   - Home page loads correctly
   - Product catalog displays
   - Images load properly
   - Search and filtering work
   - Product detail pages work

### 🎉 Successfully Deployed!
**Live Application**: [https://render-practice-h1t2.onrender.com/](https://render-practice-h1t2.onrender.com/)

The application is now live and ready for use! 🚀

---

## 🔧 Development Scripts

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

# Install all dependencies (root + client)
npm run install-all

# Verify deployment readiness
node verify-deployment.js

# Run deployment script
./deploy.sh
```

---

## 📡 API Endpoints

**🌐 Live API Base URL**: `https://render-practice-h1t2.onrender.com`

### Products
- `GET /api/furniture` - Get all furniture items with optional filters
- `GET /api/furniture/:id` - Get specific furniture item
- `GET /api/categories` - Get all categories

### Example API Calls
```bash
# Get all furniture
curl https://render-practice-h1t2.onrender.com/api/furniture

# Get furniture by category
curl https://render-practice-h1t2.onrender.com/api/furniture?category=Living%20Room

# Get specific furniture item
curl https://render-practice-h1t2.onrender.com/api/furniture/1
```

### Query Parameters
- `category` - Filter by category
- `search` - Search in name and description
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter

---

## 🎨 Features in Detail

### Product Catalog
- Browse furniture by category (Living Room, Bedroom, Dining Room, Office)
- Search functionality with real-time filtering
- Price range filtering
- Product ratings and reviews display
- 8 furniture items with detailed information

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

---

## 🖼️ Image Handling

### Optimized Images
- **High-quality Unsplash images** (600x400px)
- **Error handling** for failed image loads
- **Fallback images** for reliability
- **Loading states** for better UX
- **Proper image optimization** parameters

### Image Features
- Automatic fallback to default image if loading fails
- Loading spinners while images load
- Responsive image sizing
- Optimized for web performance

---

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check that all dependencies are in `package.json`
   - Ensure Node.js version is 18+ in `package.json` engines field
   - Verify all import paths are correct

2. **Images Not Loading**
   - Check that image URLs are accessible
   - Verify CORS settings if using external images
   - Ensure image URLs are HTTPS in production

3. **API Endpoints Not Working**
   - Check that the server is running on the correct port
   - Verify that the Express server is properly configured
   - Check the deployment logs for errors

4. **Frontend Not Loading**
   - Ensure the Vue.js build completed successfully
   - Check that static files are being served correctly
   - Verify the build output is in `client/dist/`

### Debugging

1. **Check Build Logs**
   - Go to your Render service dashboard
   - Click on "Logs" tab
   - Look for any error messages

2. **Check Runtime Logs**
   - Monitor the application logs in real-time
   - Look for any runtime errors

3. **Test Locally First**
   - Run `npm run build` locally
   - Run `npm start` locally
   - Ensure everything works before deploying

---

## 🎯 Deployment Verification

Run the verification script to ensure everything is ready:

```bash
node verify-deployment.js
```

This will check:
- ✅ All required files exist
- ✅ Package.json configurations are correct
- ✅ Render.yaml is properly configured
- ✅ Build process works
- ✅ Dependencies are properly configured

---

## 🔧 Customization

### Adding New Products
Edit the `furnitureData` array in `server/index.js`:

```javascript
{
  id: 9,
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

---

## 📊 Performance & Monitoring

### Health Checks
- Render automatically monitors your application
- Health check endpoint: `/` (root path)

### Performance Monitoring
- Monitor response times
- Check for any 5xx errors
- Monitor resource usage

### Scaling
- Render can automatically scale based on traffic
- Configure in your service settings
- Upgrade your plan for more resources if needed

---

## 🔒 Security

### HTTPS
- Render automatically provides SSL certificates
- All traffic is encrypted

### Environment Variables
- Store sensitive data in environment variables
- Never commit secrets to your repository

### Security Headers
- Helmet middleware provides security headers
- CORS properly configured
- Input validation implemented

---

## 📞 Support

If you encounter issues:

1. **Check Render Documentation**: https://render.com/docs
2. **Review Application Logs**: Available in your Render dashboard
3. **Contact Render Support**: Available for paid plans
4. **Check this README**: For common issues and solutions

---

## 🎉 Example Deployment URL

Once deployed, your application will be available at:
`https://your-app-name.onrender.com`

Replace `your-app-name` with the name you chose during deployment.

---

## 📋 Deployment Checklist

### Before Deploying:
- [x] All code committed to Git repository
- [x] `render.yaml` file present and correct
- [x] `package.json` files configured properly
- [x] Build process tested locally
- [x] API endpoints working
- [x] Images loading correctly
- [x] Error handling implemented

### Deployment Steps:
1. **Push to Git repository** ✅
2. **Connect to Render** (Ready)
3. **Deploy using render.yaml** (Ready)
4. **Verify deployment** (Ready)

---

## 🚀 Status: READY FOR DEPLOYMENT

Your Vue.js furniture store application is **100% ready** for Render deployment. The application includes:

- ✅ **Complete frontend** with modern Vue.js 3
- ✅ **Full backend API** with Express.js
- ✅ **Production-ready build** configuration
- ✅ **Render deployment** configuration
- ✅ **Comprehensive documentation**
- ✅ **Deployment automation** scripts
- ✅ **Verification tools**

---

**🎯 Status**: 🟢 **READY FOR DEPLOYMENT**  
**📅 Last Updated**: $(date)  
**🚀 Build Version**: 1.0.0  
**📦 Dependencies**: All installed and configured  
**🔧 Build Process**: Tested and working  
**🚀 Render Config**: Ready for deployment 
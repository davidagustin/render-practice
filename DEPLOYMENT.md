# Deployment Guide for Elegant Furniture Store

This guide will help you deploy the Elegant Furniture Store application to Render.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- A Render account (free tier available)

## Step 1: Prepare Your Repository

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)
2. **Ensure all files are committed** including:
   - `package.json` (root)
   - `client/package.json`
   - `server/index.js`
   - `render.yaml`
   - All Vue.js components and assets

## Step 2: Deploy to Render

### Option A: Using render.yaml (Recommended)

1. **Go to [Render Dashboard](https://dashboard.render.com/)**
2. **Click "New +" and select "Blueprint"**
3. **Connect your Git repository**
4. **Render will automatically detect the `render.yaml` file**
5. **Click "Apply" to deploy**

### Option B: Manual Deployment

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

## Step 3: Environment Variables

The following environment variables are automatically set by Render:
- `NODE_ENV=production`
- `PORT=3000`

## Step 4: Verify Deployment

1. **Wait for the build to complete** (usually 2-5 minutes)
2. **Check the deployment logs** for any errors
3. **Visit your application URL** (provided by Render)
4. **Test the following features:**
   - Home page loads correctly
   - Product catalog displays
   - Images load properly
   - Search and filtering work
   - Product detail pages work

## Troubleshooting

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

## Performance Optimization

1. **Image Optimization**
   - Use optimized image formats (WebP, AVIF)
   - Implement lazy loading for images
   - Use appropriate image sizes

2. **Caching**
   - Enable browser caching for static assets
   - Use CDN for better performance

3. **Bundle Optimization**
   - The build process automatically optimizes the bundle
   - Code splitting is implemented for better loading times

## Monitoring

1. **Health Checks**
   - Render automatically monitors your application
   - Health check endpoint: `/` (root path)

2. **Performance Monitoring**
   - Monitor response times
   - Check for any 5xx errors
   - Monitor resource usage

## Scaling

1. **Auto-scaling**
   - Render can automatically scale based on traffic
   - Configure in your service settings

2. **Manual Scaling**
   - Upgrade your plan for more resources
   - Add more instances if needed

## Security

1. **HTTPS**
   - Render automatically provides SSL certificates
   - All traffic is encrypted

2. **Environment Variables**
   - Store sensitive data in environment variables
   - Never commit secrets to your repository

## Support

If you encounter issues:

1. **Check Render Documentation**: https://render.com/docs
2. **Review Application Logs**: Available in your Render dashboard
3. **Contact Render Support**: Available for paid plans

## Example Deployment URL

Once deployed, your application will be available at:
`https://your-app-name.onrender.com`

Replace `your-app-name` with the name you chose during deployment. 
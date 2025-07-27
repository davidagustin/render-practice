#!/bin/bash

# Elegant Furniture Store - Render Deployment Script
echo "🚀 Starting deployment process for Elegant Furniture Store..."

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "render.yaml" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized"
    exit 1
fi

# Build the application
echo "📦 Building the application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"

# Check if there are any uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Committing changes..."
    git add .
    git commit -m "Deploy: $(date)"
fi

# Check if remote repository is configured
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No remote repository configured."
    echo "Please add your remote repository:"
    echo "git remote add origin <your-repo-url>"
    echo ""
    echo "Then push your code:"
    echo "git push -u origin main"
    echo ""
    echo "After that, deploy to Render:"
    echo "1. Go to https://dashboard.render.com/"
    echo "2. Click 'New +' → 'Blueprint'"
    echo "3. Connect your repository"
    echo "4. Click 'Apply'"
else
    echo "📤 Pushing to remote repository..."
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo "✅ Code pushed successfully!"
        echo ""
        echo "🎉 Ready to deploy on Render!"
        echo ""
        echo "Next steps:"
        echo "1. Go to https://dashboard.render.com/"
        echo "2. Click 'New +' → 'Blueprint'"
        echo "3. Connect your repository"
        echo "4. Click 'Apply'"
        echo ""
        echo "Your app will be available at: https://your-app-name.onrender.com"
    else
        echo "❌ Failed to push to remote repository"
        exit 1
    fi
fi

echo ""
echo "📋 Deployment Checklist:"
echo "✅ Application built successfully"
echo "✅ All files committed to git"
echo "✅ render.yaml configuration ready"
echo "✅ Dependencies configured"
echo "✅ Build scripts working"
echo ""
echo "🎯 Your Vue.js furniture store is ready for Render deployment!" 
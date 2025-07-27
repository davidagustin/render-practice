<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">About Elegant Furniture</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about bringing beautiful, high-quality furniture to homes across the country. 
          Our mission is to help you create spaces you love to live in.
        </p>
      </div>

      <!-- Story Section -->
      <div class="bg-white rounded-lg shadow-sm p-8 mb-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p class="text-gray-600 mb-4">
              Founded in 2010, Elegant Furniture began with a simple vision: to provide homeowners with 
              furniture that combines timeless design with modern functionality. What started as a small 
              family business has grown into one of the most trusted names in home furnishings.
            </p>
            <p class="text-gray-600 mb-4">
              We believe that great furniture should be accessible to everyone. That's why we work 
              directly with skilled artisans and manufacturers to bring you premium quality pieces at 
              fair prices, without the traditional retail markup.
            </p>
            <p class="text-gray-600">
              Today, we're proud to serve customers nationwide, helping them transform their homes 
              with furniture that's built to last and designed to inspire.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop" 
              alt="Our Story" 
              class="rounded-lg shadow-lg"
            >
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div class="bg-white rounded-lg shadow-sm p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Quality</h3>
          <p class="text-gray-600">
            We never compromise on quality. Every piece in our collection is crafted with premium 
            materials and expert attention to detail.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Customer First</h3>
          <p class="text-gray-600">
            Your satisfaction is our priority. We're here to help you find the perfect pieces 
            for your home and provide exceptional service every step of the way.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Innovation</h3>
          <p class="text-gray-600">
            We continuously explore new designs and technologies to bring you the latest trends 
            while maintaining timeless appeal.
          </p>
        </div>
      </div>

      <!-- Team Section -->
      <div class="bg-white rounded-lg shadow-sm p-8 mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-1">Sarah Johnson</h3>
            <p class="text-gray-600">Founder & CEO</p>
          </div>

          <div class="text-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-1">Michael Chen</h3>
            <p class="text-gray-600">Head of Design</p>
          </div>

          <div class="text-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-1">Emily Rodriguez</h3>
            <p class="text-gray-600">Customer Success</p>
          </div>

          <div class="text-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-1">David Kim</h3>
            <p class="text-gray-600">Operations Manager</p>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="bg-white rounded-lg shadow-sm p-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="text-gray-600">123 Furniture Ave, Design District, NY 10001</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span class="text-gray-600">(555) 123-4567</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span class="text-gray-600">hello@elegantfurniture.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4">Business Hours</h3>
            <div class="space-y-2 text-gray-600">
              <div class="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span>Sunday:</span>
                <span>12:00 PM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script> 
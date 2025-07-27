<template>
  <div class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">About Elegant Furniture</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about bringing you the finest furniture that combines timeless design with modern functionality.
        </p>
      </div>

      <!-- Story Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p class="text-gray-600 mb-4 leading-relaxed">
            Founded in 2020, Elegant Furniture began with a simple mission: to provide homeowners with beautiful, 
            high-quality furniture that doesn't compromise on style or comfort. What started as a small family 
            business has grown into a trusted name in home furnishings.
          </p>
          <p class="text-gray-600 mb-4 leading-relaxed">
            We believe that every home deserves furniture that not only looks great but also stands the test of time. 
            That's why we carefully select each piece in our collection, working with skilled artisans and reputable 
            manufacturers who share our commitment to quality.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Today, we're proud to serve customers across the country, helping them create spaces they love to live in.
          </p>
        </div>
        <div class="relative">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center" 
            alt="Our workshop"
            class="rounded-lg shadow-lg"
          >
        </div>
      </div>

      <!-- Values Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
            <p class="text-gray-600">
              We never compromise on quality. Every piece in our collection meets our high standards for materials, 
              craftsmanship, and durability.
            </p>
          </div>
          
          <div class="text-center">
            <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p class="text-gray-600">
              We stay ahead of design trends while maintaining timeless appeal. Our pieces blend contemporary 
              aesthetics with classic functionality.
            </p>
          </div>
          
          <div class="text-center">
            <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h3>
            <p class="text-gray-600">
              Your satisfaction is our priority. We're here to help you find the perfect furniture for your home 
              and provide exceptional service every step of the way.
            </p>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-1">Sarah Johnson</h3>
            <p class="text-gray-600">Founder & CEO</p>
          </div>
          
          <div class="text-center">
            <div class="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-1">Michael Chen</h3>
            <p class="text-gray-600">Head of Design</p>
          </div>
          
          <div class="text-center">
            <div class="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-1">Emily Rodriguez</h3>
            <p class="text-gray-600">Customer Success</p>
          </div>
          
          <div class="text-center">
            <div class="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-1">David Thompson</h3>
            <p class="text-gray-600">Operations Manager</p>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="bg-gray-50 rounded-lg p-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p class="text-gray-600 mb-6">
            Have questions about our products or need help with your order? We'd love to hear from you.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-1">Phone</h3>
              <p class="text-gray-600">(555) 123-4567</p>
            </div>
            
            <div class="text-center">
              <div class="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
              <p class="text-gray-600">hello@elegantfurniture.com</p>
            </div>
            
            <div class="text-center">
              <div class="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-1">Address</h3>
              <p class="text-gray-600">123 Furniture St, Design City, DC 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed for this static page
</script> 
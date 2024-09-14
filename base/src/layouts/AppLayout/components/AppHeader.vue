<template>
  <div class="background w-full">
    <el-menu class="el-menu-demo w-full justify-between items-center" mode="horizontal">
      <!-- Logo and Company Name -->
      <div class="flex items-center">
        <el-menu-item index="1" class="flex items-center">
          <img src="../../../assets/Logo.svg" alt="Logo" class="mr-2" width="130" />
          <!-- <p class="text-xl font-bold">Landify™</p> -->
        </el-menu-item>
        <div class="flex">
          <el-menu-item index="2">
            <a href="#" class="text-[14px] font-bold">Features</a>
          </el-menu-item>
          <el-menu-item index="3">
            <a href="#" class="text-[14px] font-bold">Pricing</a>
          </el-menu-item>
          <el-menu-item index="4">
            <a href="#" class="text-[14px] font-bold">Careers</a>
          </el-menu-item>
          <el-menu-item index="5">
            <a href="#" class="text-[14px] font-bold">Help</a>
          </el-menu-item>
        </div>
      </div>

      <!-- Navigation Links -->

      <!-- App Store and Play Store Buttons -->
      <div class="flex">
        <el-menu-item index="6">
          <a href="#" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              width="130"
            />
          </a>
        </el-menu-item>
        <el-menu-item index="7">
          <a href="#" target="_blank">
            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              alt="App Store"
              width="120"
            />
          </a>
        </el-menu-item>
      </div>
    </el-menu>
    <div class="main-content flex flex-col justify-center items-start ml-20 mt-20">
      <h1 class="text-5xl font-bold mb-4 leading-snug">
        The easiest way<br />
        to manage projects
      </h1>
      <p class="text-xl mb-8 leading-relaxed">
        From the small stuff to the big picture, organizes the work<br />
        so teams know what to do, why it matters, and how to get it done.
      </p>
      <div class="flex space-x-6">
        <button class="bg-purple-600 text-white px-6 py-3 rounded-lg">Get Started</button>
        <button class="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg flex items-center">
          <img src="../../../assets/play.svg" alt="" />
          <span class="ml-2">Watch Video</span>
        </button>
      </div>
    </div>

    <!-- Phone Image Section -->
    <div class="phone-image lg:absolute right-[70px] bottom-[50px] xs:hidden md:hidden lg:block">
      <img src="../../../assets/PhoneMockup.png" alt="Phone Mockup" />
    </div>
  </div>
</template>

<script setup lang="ts">

// No JavaScript needed for this basic navigation structure
</script>

<style scoped>
.phone-mockup-last {
  position: relative;
}
.mobile-app {
  overflow: hidden;
}
.background {
  background: url('../../../assets/Background.png') no-repeat center;
  background-size: cover;
  height: 100vh;
  position: relative;
}

/* Navbar settings */
.el-menu-demo {
  padding: 40px 40px;
  background: transparent; /* Navbar is transparent to show background behind */
}
.el-menu-demo-2 {
  background: transparent; /* Navbar is transparent to show background behind */
}
/* Adjust navigation links */
.el-menu-item a {
  text-decoration: none;
  color: #333;
}

/* Content on the main section */
.main-content {
  z-index: 1;
}

/* Image styling for phone mockup */
.phone-image img {
  max-width: 390px;
  height: auto;
}
.logos {
  margin: 0 auto;
}
/* Overall Section Styling */
.customer-stories-section {
  background-color: #d5fafc;
  padding: 7% 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  /* padding: 0 20px; */
}
.test {
  position: relative;
}
/* Title and Subtitle */
.title-container h2 {
  font-size: 36px;
  font-weight: 700;
  color: #222;
  line-height: 40px;
}

.title-container p {
  /* font-size: 18px; */
  /* color: #666; */
  /* margin-bottom: 40px; */
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 3fr); /* Two columns */
  gap: 10px; /* Adjust gap as needed */
}

.testimonial-card-1 {
  display: flex;
  flex-direction: column;
  justify-self: right;
  grid-column: 1 / 2; /* Place in the first column */
  grid-row: 1; /* Place in the first row */
}

.testimonial-card-2 {
  grid-column: 2 / 3; /* Place in the second column */
  grid-row: 1; /* Place in the first row */
}

.testimonial-card-3 {
  grid-column: 1 / 2; /* Place in the first column */
  grid-row: 2; /* Place in the second row */
}
/* Testimonial Card */
.testimonial-card {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.testimonial-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.company-logo {
  width: 50px;
  height: auto;
  margin-right: 15px;
}

.testimonial-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.testimonial-quote {
  font-size: 16px;
  font-style: italic;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
}

.testimonial-author {
  font-size: 16px;
  font-weight: 700;
  color: #333;
}

.author-position {
  font-size: 14px;
  color: #888;
}

/* Responsive Adjustments */
@media (max-width: 968px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .title-container h2 {
    font-size: 28px;
  }

  .title-container p {
    font-size: 16px;
  }
  .background {
    background: url('../../../assets/Background.png') no-repeat center;
    background-size: cover;
    height: 80vh;
    position: relative;
  }
}
@media (max-width: 400px) {
  .background {
    background: url('../../../assets/Background.png') no-repeat center;
    background-size: cover;
    height: 90vh;
    position: relative;
  }
}
</style>

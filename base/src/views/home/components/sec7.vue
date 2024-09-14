<template>
  <!-- Mobile App Section -->
  <div class="mobile-app bg-[#1DB5BE] xs:py-10 lg:py-0">
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between">
      <div class="text-content text-center lg:text-left">
        <h2 class="text-4xl font-bold">Manage all projects from</h2>
        <h2 class="text-4xl font-bold mb-6">your mobile</h2>
        <p class="text-gray-900 mb-8 lg:w-[40%] md:w-[80%] xs:w-full sm:w-full">
          Download the app to manage your projects, keep track of the progress and complete tasks
          without procastinating. Stay on track and complete on time!
        </p>
        <div class="flex justify-center lg:justify-start space-x-6">
          <a href="#" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              width="130"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              alt="App Store"
              width="120"
            />
          </a>
        </div>
      </div>
      <div class="phone-mockup-last mt-10 lg:mt-0 flex relative">
        <img
          src="../../../assets/PhoneMockup.png"
          alt="Phone Mockup"
          width="350"
          class="relative bottom-20 right-60 xs:hidden md:hidden lg:block"
        />
        <img
          src="../../../assets/PhoneMockup.png"
          alt="Phone Mockup"
          width="300"
          class="absolute top-20 left-10 xs:hidden md:block lg:block"
        />
      </div>
    </div>
  </div>
</template>

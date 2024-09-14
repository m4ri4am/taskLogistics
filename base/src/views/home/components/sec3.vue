<template>
    <!-- Tailor-made Features Section -->
  <div class="features bg-white py-20 sm:px-10">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold">Tailor-made features</h2>
      <p class="text-black-500 mb-10 pb-5 w-1/2 m-auto">
        Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a
        document or visual presentation.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 m-auto">
        <div class="feature" v-for="n in 6">
          <img src="../../../assets/basefeature.svg" alt="" class="m-auto my-6" />
          <h3 class="font-bold text-xl mb-3">Robust workflow</h3>
          <p class="text-gray-500 text-xs w-[80%] m-auto font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
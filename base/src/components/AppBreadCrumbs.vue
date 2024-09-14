<template>
  <div class="flex">
    <slot name="main-page-header"></slot>
    <div class="flex m-3 font-bold text-lg">
      <span><mdicon name="menu-left"></mdicon></span>
      <slot name="current-page"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
console.log()
</script>
<style scoped>

</style>

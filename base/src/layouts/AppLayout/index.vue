<template>
  <div class="common-layout">
      <el-container>
        <el-header class="w-full"> <AppHeader /> </el-header>
        <el-main><AppContent /></el-main>
      </el-container>
  </div>
</template>
<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'
</script>

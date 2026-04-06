<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import '@/css/fonts.css'
</script>

<template>
  <div class="page-container">
    <HeaderComponent />
    
    <main class="main-content">
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
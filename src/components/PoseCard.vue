<template>
  <div class="pose-card">
    <div class="image-container">
      <div class="image-wrapper">
        <img :src="imagePath" :alt="poseName" class="pose-image"/>
      </div>
    </div>
    <h3 class="pose-name">{{ poseName }}</h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  poseName: string;
  imagePath: string;
}>();
</script>

<style scoped>
.pose-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
}

.image-container {
  background: white;
  border-radius: 20px;
  padding: 16px;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.image-wrapper {
  width: 80%;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pose-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: 100%;
  object-fit: contain;
}

.pose-name {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  text-align: center;
}
</style> 
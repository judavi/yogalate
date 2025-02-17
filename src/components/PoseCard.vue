<template>
  <div class="pose-card" @click="goToDetail">
    <div class="image-container">
      <div class="image-wrapper">
        <img :src="imagePath" :alt="poseName" class="pose-image"/>
      </div>
    </div>
    <h3 class="pose-name">{{ poseName }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
  poseId: number;
  poseName: string;
  imagePath: string;
}>();

const router = useRouter();

const goToDetail = async () => {
  await router.replace(`/poses/${props.poseId}`);
};
</script>

<style scoped>
.pose-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.pose-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
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
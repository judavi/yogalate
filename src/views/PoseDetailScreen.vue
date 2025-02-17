<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button class="back-button" @click="goBack">
            <ion-icon :icon="chevronBack" />
            <span>Back</span>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="content-container" v-if="pose">
        <div class="pose-card">
          <!-- Image Container with Gradient Overlay -->
          <div class="image-container">
            <img :src="pose.image" :alt="pose.sanskrit_name" class="pose-illustration"/>
            <div class="gradient-overlay"></div>
          </div>

          <!-- Pose Names -->
          <div class="pose-names">
            <h2 class="sanskrit-name">{{ pose.sanskrit_name }}</h2>
            <h3 class="english-name">{{ pose.english_name }}</h3>
          </div>

          <!-- Cues Section -->
          <div class="cues-section">
            <h4 class="cues-title">
              <ion-icon :icon="bulbOutline"></ion-icon>
              Practice Tips
            </h4>
            <ul class="cues-list">
              <li v-for="(cue, index) in pose.cues" :key="index">
                <ion-icon :icon="checkmarkCircleOutline"></ion-icon>
                {{ cue }}
              </li>
            </ul>
          </div>

          <!-- Practice Button -->
          <ion-button 
            expand="block" 
            class="practice-button"
            disabled
          >
            <ion-icon :icon="playOutline" slot="start"></ion-icon>
            Practice Now - 🕒 Coming Soon
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, 
  IonContent, 
  IonHeader,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon
} from '@ionic/vue';
import { 
  chevronBack,
  bulbOutline,
  checkmarkCircleOutline,
  playOutline
} from 'ionicons/icons';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import yogaData from '../data/yogaData.json';

interface Pose {
  sanskrit_name: string;
  english_name: string;
  image_name: string;
  image: string;
  cues: string[];
}

const router = useRouter();
const route = useRoute();

const pose = ref<Pose | null>(null);

onMounted(() => {
  const poseId = Number(route.params.id);
  if (isNaN(poseId) || poseId < 1 || poseId > yogaData.length) {
    router.replace('/poses');
    return;
  }

  const yogaPose = yogaData[poseId - 1];
  if (yogaPose) {
    pose.value = {
      ...yogaPose,
      image: `/posesBasic/${yogaPose.image_name}`
    };
  }
});

const goBack = async () => {
  await router.replace('/poses');
};

const goToStudy = async () => {
  await router.replace('/study');
};
</script>

<style scoped>
:deep(ion-content) {
  --background: #FFFFFF;
}

ion-content {
  --background: #FFFFFF;
}

.content-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100%;
  padding: 20px;
  background: #FFFFFF;
}

.pose-card {
  background: #FFFFFF;
  border-radius: 24px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: #FFFFFF;
  overflow: hidden;
}

.pose-illustration {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 32px;
}

.gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.9));
}

.pose-names {
  padding: 24px;
  text-align: center;
}

.sanskrit-name {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #2B8A8A;
  margin: 0;
}

.english-name {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #666;
  margin: 8px 0 0 0;
}

.cues-section {
  padding: 0 24px 24px;
}

.cues-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #2B8A8A;
  margin: 0 0 16px 0;
}

.cues-title ion-icon {
  font-size: 20px;
}

.cues-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cues-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  background: #F0F9F9;
  border-radius: 12px;
  margin-bottom: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  color: #2D3436;
  line-height: 1.4;
}

.cues-list li ion-icon {
  color: #2B8A8A;
  font-size: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.practice-button {
  margin: 0 24px 24px;
  height: 56px;
  --background: #2B8A8A;
  --border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

.practice-button ion-icon {
  font-size: 20px;
}

.back-button {
  --padding-start: 8px;
  --padding-end: 16px;
  --padding-top: 12px;
  --padding-bottom: 12px;
  height: 44px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 17px;
  --color: #2B8A8A;
  text-transform: none;
  letter-spacing: -0.4px;
}

.back-button ion-icon {
  font-size: 24px;
  margin-right: 4px;
}

ion-toolbar {
  --background: #FFFFFF;
  --border-style: none;
}
</style> 
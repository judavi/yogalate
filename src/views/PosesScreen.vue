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

    <ion-content :fullscreen="true" class="ion-padding">
      <!-- Hero Image Section -->
      <div class="hero-section" role="banner">
        <img :src="heroImage" alt="Yoga Hero" class="hero-image"/>
        <h1 class="main-title">Yoga Poses</h1>
      </div>

      <!-- Stats Section -->


      <!-- Grid of Poses -->
      <ion-grid>
        <ion-row>
          <ion-col 
            size="4" 
            v-for="pose in poses" 
            :key="pose.id"
            tabindex="0"
          >
            <pose-card
              :pose-id="pose.id"
              :pose-name="pose.name"
              :image-path="pose.image"
              role="article"
            />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonButtons,
  IonIcon
} from '@ionic/vue';
import { chevronBack } from 'ionicons/icons';
import PoseCard from '@/components/PoseCard.vue';
import { ref } from 'vue';
import yogaData from '../data/yogaData.json';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = async () => {
  await router.replace('/welcome');
};

// Use direct path to public folder
const heroImage = '/hero.png';

// Transform yoga data to match our needs
const poses = ref(yogaData.map((pose, index) => ({
  id: index + 1,
  name: pose.english_name,
  image: `/posesBasic/${pose.image_name}`
})));
</script>

<style scoped>
.hero-section {
  position: relative;
  margin: -16px -16px 24px -16px;
}

.hero-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.main-title {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 12px 32px;
  border-radius: 20px;
  font-size: 24px;
  font-weight: 700;
  color: #000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 0;
}

.stats-container {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background: #f8f9fa;
  margin: 32px 16px 16px 16px;
  border-radius: 16px;
}

.stat-item {
  text-align: center;
}

.stat-item h2 {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  color: #007AFF;
}

.stat-item p {
  font-size: 14px;
  color: #666;
  margin: 4px 0 0 0;
}

ion-content {
  --background: #ffffff;
}

.back-button {
  --padding-start: 8px;
  --padding-end: 16px;
  --padding-top: 12px;
  --padding-bottom: 12px;
  height: 44px; /* Apple's minimum touch target size */
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 17px; /* iOS standard size */
  --color: #2B8A8A;
  text-transform: none;
  letter-spacing: -0.4px;
}

.back-button ion-icon {
  font-size: 24px;
  margin-right: 4px;
}

ion-col {
  outline: none;
}

ion-col:focus {
  outline: none;
}

ion-col:focus-visible {
  outline: 2px solid #2B8A8A;
  border-radius: 8px;
}

ion-toolbar {
  --background: #FFFFFF;
  --border-style: none;
}
</style>

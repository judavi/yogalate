<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- Hero Banner -->
      <div class="hero-banner">
        <img src="/hero.png" alt="Yoga Studio" class="hero-image"/>
        <div class="hero-overlay"></div>
      </div>

      <!-- Statistics Section -->
      <div class="stats-section">
        <div class="stat-circle">
          <h2>2</h2>
          <p>Hours</p>
        </div>
        <div class="stat-circle">
          <h2>8</h2>
          <p>Sessions</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <ion-button 
          expand="block" 
          class="start-button" 
          @click="goToStudy"
          :router-link="false"
        >
          Start Practice
        </ion-button>
        <ion-button 
          expand="block" 
          fill="outline" 
          class="library-button" 
          @click="goToPoses"
        >
          Poses Library
        </ion-button>
        <ion-button 
          expand="block" 
          fill="clear" 
          class="support-button"
        >
          Support Creator
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Add async/await to ensure navigation completes
const goToStudy = async () => {
  try {
    await router.push('/study');
  } catch (error) {
    console.error('Navigation error:', error);
  }
};

const goToPoses = async () => {
  try {
    await router.push('/poses');
  } catch (error) {
    console.error('Navigation error:', error);
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.hero-banner {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1));
}

.stats-section {
  display: flex;
  justify-content: space-around;
  padding: 32px 16px;
  margin-top: -60px;
  position: relative;
  z-index: 1;
}

.stat-circle {
  width: 160px;
  height: 160px;
  background: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.stat-circle h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: #2B8A8A;
  margin: 0;
}

.stat-circle p {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: #2B8A8A;
  margin: 4px 0 0 0;
}

.action-buttons {
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

ion-button {
  height: 56px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  --border-radius: 12px;
  transition: all 0.2s ease;
}

.start-button {
  --background: #2B8A8A;
  --background-hover: #247777;
}

.library-button {
  --border-color: #2B8A8A;
  --color: #2B8A8A;
  --border-width: 2px;
}

.support-button {
  --background: #F5F5F5;
  --color: #2D3436;
}

ion-button:hover {
  transform: scale(1.02);
}

ion-button:active {
  transform: scale(0.98);
}

ion-content {
  --background: #FFFFFF;
}
</style> 
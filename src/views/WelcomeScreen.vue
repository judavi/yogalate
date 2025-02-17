<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- Hero Banner -->
      <div class="hero-banner">
        <img src="/hero.png" alt="Yoga Studio" class="hero-image"/>
        <div class="hero-overlay"></div>
      </div>

      <!-- Welcome Content -->
      <div class="welcome-content">
        <h1 class="welcome-title">Yoga Flow</h1>
        <p class="welcome-description">
          Learn yoga poses the fun way! Flip through pose cards, guess the correct name, and improve your practice!
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <ion-button 
          expand="block" 
          class="start-button" 
          @click="goToStudy"
          :router-link="false"
        >
          <ion-icon :icon="playOutline" slot="start"></ion-icon>
          Start Practice
        </ion-button>
        <ion-button 
          expand="block" 
          fill="outline" 
          class="library-button" 
          @click="goToPoses"
        >
          <ion-icon :icon="libraryOutline" slot="start"></ion-icon>
          Poses Library
        </ion-button>
        <ion-button 
          expand="block" 
          fill="clear" 
          class="support-button"
          @click="openSupportLink"
        >
          <ion-icon :icon="heartOutline" slot="start"></ion-icon>
          Support Creator
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton, IonIcon } from '@ionic/vue';
import { playOutline, libraryOutline, heartOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { Browser } from '@capacitor/browser';

const router = useRouter();

// Add async/await to ensure navigation completes
const goToStudy = async () => {
  try {
    await router.replace('/study');
  } catch (error) {
    console.error('Navigation error:', error);
  }
};

const goToPoses = async () => {
  try {
    await router.replace('/poses');
  } catch (error) {
    console.error('Navigation error:', error);
  }
};

const openSupportLink = async () => {
  await Browser.open({ url: 'https://buymeacoffee.com/judavi' });
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.hero-banner {
  position: relative;
  width: 100%;
  height: 45vh;
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
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4));
}

.welcome-content {
  padding: 32px 24px;
  text-align: center;
  background: white;
  margin-top: -40px;
  position: relative;
  border-radius: 32px 32px 0 0;
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.1);
}

.welcome-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #2B8A8A;
  margin: 0 0 16px 0;
}

.welcome-description {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0;
  padding: 0 16px;
}

.action-buttons {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: white;
}

ion-button {
  height: 56px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  --border-radius: 12px;
  transition: all 0.2s ease;
}

ion-button ion-icon {
  font-size: 20px;
  margin-right: 8px;
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
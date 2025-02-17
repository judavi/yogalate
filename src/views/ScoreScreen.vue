<template>
  <ion-page>
    <ion-content class="ion-padding" :style="{ '--background': '#FFFFFF' }">
      <div class="score-container">
        <div class="score-card">
          <!-- Trophy Icon -->
          <div class="trophy-container">
            <ion-icon :icon="trophyOutline" class="trophy-icon"></ion-icon>
          </div>

          <!-- Congratulations Text -->
          <h1 class="title">Great Job!</h1>
          <p class="subtitle">You've completed your practice session</p>

          <!-- Score Circles -->
          <div class="score-circles">
            <div class="score-circle correct">
              <h2>{{ correctAnswers }}</h2>
              <p>Correct</p>
            </div>
            <div class="score-circle incorrect">
              <h2>{{ wrongAnswers }}</h2>
              <p>Incorrect</p>
            </div>
          </div>

          <!-- Accuracy Rate -->
          <div class="accuracy-container">
            <div class="accuracy-bar">
              <div 
                class="accuracy-fill"
                :style="{ width: `${accuracyRate}%` }"
              ></div>
            </div>
            <p class="accuracy-text">{{ accuracyRate }}% Accuracy</p>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <ion-button 
              expand="block" 
              class="home-button"
              @click="goHome"
            >
              <ion-icon :icon="homeOutline" slot="start"></ion-icon>
              Return Home
            </ion-button>
            <ion-button 
              expand="block" 
              fill="outline" 
              class="retry-button"
              @click="retrySession"
            >
              <ion-icon :icon="refreshOutline" slot="start"></ion-icon>
              Try Again
            </ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, 
  IonContent, 
  IonButton,
  IonIcon 
} from '@ionic/vue';
import { 
  trophyOutline, 
  homeOutline, 
  refreshOutline 
} from 'ionicons/icons';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Get data from query parameters instead of params
const totalPoses = Number(route.query.totalPoses || 0);
const correctAnswers = Number(route.query.correctAnswers || 0);
const wrongAnswers = Number(route.query.wrongAnswers || 0);

const accuracyRate = computed(() => {
  const totalAttempts = correctAnswers + wrongAnswers;
  return totalAttempts > 0 
    ? Math.round((correctAnswers / totalAttempts) * 100)
    : 0;
});

const goHome = () => {
  router.replace('/welcome');
};

const retrySession = () => {
  router.replace({ 
    path: '/study',
    query: { reset: Date.now().toString() }
  });
};
</script>

<style scoped>
:deep(ion-content) {
  --background: #FFFFFF;
}

.score-container {
  background: #FFFFFF;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.score-card {
  background: white;
  border-radius: 24px;
  padding: 32px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.trophy-container {
  background: #F0F9F9;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.trophy-icon {
  font-size: 40px;
  color: #2B8A8A;
}

.title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #2B8A8A;
  margin: 0;
}

.subtitle {
  font-family: 'Poppins', sans-serif;
  color: #666;
  margin: 8px 0 32px;
}

.score-circles {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
}

.score-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
}

.score-circle.correct {
  background: #DCFCE7;
  color: #22C55E;
}

.score-circle.incorrect {
  background: #FEE2E2;
  color: #EF4444;
}

.score-circle h2 {
  font-size: 36px;
  font-weight: 700;
  margin: 0;
}

.score-circle p {
  font-size: 14px;
  margin: 4px 0 0;
}

.accuracy-container {
  margin-bottom: 32px;
}

.accuracy-bar {
  height: 8px;
  background: #F0F0F0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
}

.accuracy-fill {
  height: 100%;
  background: #2B8A8A;
  border-radius: 4px;
  transition: width 1s ease-out;
}

.accuracy-text {
  font-family: 'Poppins', sans-serif;
  color: #2B8A8A;
  font-weight: 600;
  margin: 0;
}

.action-buttons {
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
}

.home-button {
  --background: #2B8A8A;
  --color: #FFFFFF;
}

.retry-button {
  --border-color: #2B8A8A;
  --color: #2B8A8A;
  --border-width: 2px;
}

ion-button ion-icon {
  margin-right: 8px;
}
</style> 
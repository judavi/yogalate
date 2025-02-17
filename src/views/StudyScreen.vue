<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button class="back-button" @click="goBack">
            <ion-icon :icon="chevronBack" />
            <span>Home</span>
          </ion-button>
        </ion-buttons>
        <div class="progress-counter" slot="end">
          <span class="current">{{ currentIndex + 1 }}</span>
          <span class="separator">/</span>
          <span class="total">{{ totalPoses }}</span>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="content-container">
        <div class="study-card" v-if="currentPose">
          <img :src="currentPose.image" :alt="currentPose.sanskrit_name" class="pose-illustration"/>
          <h2 class="sanskrit-name">{{ currentPose.sanskrit_name }}</h2>
          
          <div class="answer-options">
            <ion-button 
              v-for="option in options" 
              :key="option"
              @click="checkAnswer(option)"
              expand="block"
              fill="outline"
              :class="{ 'wrong-answer': wrongAnswer === option }"
              :disabled="answered"
            >
              {{ option }}
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
  IonHeader,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon
} from '@ionic/vue';
import { chevronBack } from 'ionicons/icons';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import confetti from 'canvas-confetti';
import yogaData from '../data/yogaData.json';

const router = useRouter();

// Shuffle array function needs to be defined before we use it
const shuffleArray = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Define a variable for the number of poses to study
const numberOfPosesToStudy = ref(2);


// State with initial values
const currentIndex = ref(0);
const totalPoses = numberOfPosesToStudy.value; // Use the new variable here
const shuffledPoses = ref<typeof yogaData>([]);
const wrongAnswer = ref('');
const answered = ref(false);

// Reset function
const resetStudy = () => {
  console.log('Resetting study...');
  currentIndex.value = 0;
  shuffledPoses.value = shuffleArray([...yogaData]).slice(0, numberOfPosesToStudy.value); // Limit the poses
  wrongAnswer.value = '';
  answered.value = false;
  console.log('New shuffled poses:', shuffledPoses.value);
};

const goBack = () => {
  resetStudy();
  router.push('/welcome');
};

// Confetti effect
const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#2B8A8A', '#247777', '#1B5555']
  });
};

// Get current pose with null check
const currentPose = computed(() => {
  console.log('Computing current pose...', {
    currentIndex: currentIndex.value,
    shuffledPosesLength: shuffledPoses.value.length
  });
  
  if (!shuffledPoses.value.length) {
    console.log('No poses available');
    return null;
  }
  
  const pose = shuffledPoses.value[currentIndex.value];
  return {
    ...pose,
    image: `/posesBasic/${pose.image_name}`
  };
});

// Get options with null check
const options = computed(() => {
  if (!currentPose.value) return [];
  const correct = currentPose.value.english_name;
  const otherPoses = yogaData
    .filter(pose => pose.english_name !== correct)
    .map(pose => pose.english_name)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  
  return [...otherPoses, correct].sort(() => Math.random() - 0.5);
});

// Handle answer
const checkAnswer = (answer: string) => {
  if (!currentPose.value) return;
  answered.value = true;

  if (answer === currentPose.value.english_name) {
    triggerConfetti();
    setTimeout(() => {
      if (currentIndex.value < totalPoses - 1) {
        currentIndex.value++;
        answered.value = false;
      }
    }, 1000);
  } else {
    wrongAnswer.value = answer;
    setTimeout(() => {
      wrongAnswer.value = '';
      answered.value = false;
    }, 1000);
  }
};

// Initialize on mount
onMounted(() => {
  console.log('Component mounted');
  resetStudy();
});

// Clean up on unmount
onBeforeUnmount(() => {
  console.log('Component unmounting');
  resetStudy();
});
</script>

<style scoped>
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

.progress-counter {
  margin-right: 16px;
  height: 44px; /* Apple's minimum touch target size */
  display: flex;
  align-items: center;
  font-family: -apple-system, 'Poppins', sans-serif; /* Using system font first */
  font-size: 17px;
  color: #2B8A8A;
  font-weight: 500;
}

.progress-counter .current {
  font-weight: 600;
}

.progress-counter .separator {
  margin: 0 4px;
  color: #8E8E93; /* iOS secondary color */
}

.progress-counter .total {
  color: #8E8E93; /* iOS secondary color */
}

.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 20px;
}

.study-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pose-illustration {
  width: 100%;
  max-width: 240px;
  height: auto;
  margin: 0 auto;
  display: block;
}

.sanskrit-name {
  text-align: center;
  margin: 24px 0;
  font-size: 24px;
  font-weight: 600;
  color: #2B8A8A;
  font-family: 'Poppins', sans-serif;
}

.answer-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
}

.wrong-answer {
  --background: #FEE2E2 !important;
  --border-color: #EF4444 !important;
  --color: #EF4444 !important;
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-8px); }
  75% { transform: translateX(8px); }
}

ion-button {
  --border-color: #2B8A8A;
  --color: #2B8A8A;
  --background-hover: #f5f5f5;
  height: 48px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
}

ion-button.wrong-answer:active {
  --background: #FEE2E2;
  --border-color: #EF4444;
  --color: #EF4444;
}

ion-button::part(native) {
  padding: 0 24px;
}
</style> 
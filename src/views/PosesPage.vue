<template>
    <ion-page>
      <ion-header class="ion-no-border">
        <ion-toolbar>
          <ion-title>Yoga Pose</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true" class="ion-padding">
        <!-- Hero Image Section -->
        <div class="hero-section">
          <img :src="heroImage" alt="Yoga Hero" class="hero-image"/>
          <h1 class="main-title">Yoga Pose</h1>
        </div>
  
        <!-- Stats Section -->
        <div class="stats-container">
          <div class="stat-item">
            <h2>2</h2>
            <p>Hours</p>
          </div>
          <div class="stat-item">
            <h2>8</h2>
            <p>Sessions</p>
          </div>
        </div>
  
        <!-- Grid of Poses -->
        <ion-grid>
          <ion-row>
            <ion-col size="4" v-for="pose in poses" :key="pose.id">
              <pose-card
                :pose-name="pose.name"
                :image-path="pose.image"
              />
            </ion-col>
          </ion-row>
        </ion-grid>
  
        <!-- Bottom Navigation -->
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home">
            <ion-icon :icon="home" />
            <ion-label>Home</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="poses">
            <ion-icon :icon="body" />
            <ion-label>Poses</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="progress">
            <ion-icon :icon="statsChart" />
            <ion-label>Progress</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="settings">
            <ion-icon :icon="settings" />
            <ion-label>Settings</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
  } from '@ionic/vue';
  import { home, body, statsChart, settings } from 'ionicons/icons';
  import PoseCard from '@/components/PoseCard.vue';
  import { ref } from 'vue';
  import yogaData from '../data/yogaData.json';
  
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
  
  ion-tab-bar {
    --background: #ffffff;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
    padding: 10px 0;
    margin: 0 -16px;
  }
  
  ion-tab-button {
    --color: #666;
    --color-selected: #007AFF;
  }
  </style>
  
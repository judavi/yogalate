import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import WelcomeScreen from '../views/WelcomeScreen.vue'
import StudyScreen from '../views/StudyScreen.vue'
import PosesScreen from '../views/PosesScreen.vue'
import ScoreScreen from '../views/ScoreScreen.vue'
import PoseDetailScreen from '../views/PoseDetailScreen.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: WelcomeScreen
  },
  {
    path: '/study',
    name: 'Study',
    component: StudyScreen
  },
  {
    path: '/poses',
    name: 'Poses',
    component: PosesScreen
  },
  {
    path: '/score',
    name: 'Score',
    component: ScoreScreen
  },
  {
    path: '/poses/:id',
    name: 'PoseDetail',
    component: PoseDetailScreen
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

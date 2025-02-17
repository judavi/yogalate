import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue'
import StudyScreen from '../views/StudyScreen.vue'
import PosesPage from '../views/PosesPage.vue'
import ScoreScreen from '../views/ScoreScreen.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: WelcomePage
  },
  {
    path: '/study',
    name: 'Study',
    component: StudyScreen
  },
  {
    path: '/poses',
    name: 'Poses',
    component: PosesPage
  },
  {
    path: '/score',
    name: 'Score',
    component: ScoreScreen
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

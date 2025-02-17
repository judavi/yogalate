import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yogaflow.app',
  appName: 'Yoga Flow',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  ios: {
    scheme: 'YogaFlow',
    backgroundColor: '#ffffff'
  }
};

export default config;

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yogaflow.app',
  appName: 'YogaFlow',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  ios: {
    scheme: 'YogaFlow',
    backgroundColor: '#ffffff'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#FFFFFF',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      spinnerColor: '#2B8A8A',
      splashFullScreen: true,
      splashImmersive: true
    }
  }
};

export default config;

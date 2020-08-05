import React from 'react';
import { View, Image, ViewComponent, ImageBackground } from 'react-native';
import Card from './app/components/card';
//import WelcomeScreen from './app/screens/WelcomeScreen';
//import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import LIstingDetailsScreen from './app/screens/LIstingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  // return <WelcomeScreen />;
  return <LIstingDetailsScreen />;
  //return <ViewImageScreen />;
}

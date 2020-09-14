import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  ViewComponent,
  ImageBackground,
  TextInput,
  Text,
  Button,
} from 'react-native';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import LIstingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import LoginScreen from './app/screens/LoginScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import * as ImagePicker from 'expo-image-picker';
import ImageInput from './app/components/ImageInput';
import ImagesPicker from './app/components/ImagesPicker';
import ImageInputList from './app/components/ImageInputList';
import AuthNavigator from './app/components/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/components/navigation/navigationTheme';
import AppNavigator from './app/components/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

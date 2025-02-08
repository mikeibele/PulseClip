import React from 'react';
import AppNavigation from './Navigation/appNavigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <AppNavigation />
      <StatusBar style="auto" />
    </>
  );
}

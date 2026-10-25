import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { TabNavigator } from './TabNavigator';
import { PremiumScreen } from '../screens/PremiumScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="PremiumModal" component={PremiumScreen} options={{ presentation: 'fullScreenModal', animation: 'slide_from_bottom' }} />
    </Stack.Navigator>
  );
}

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { AccountStackParamList, TabParamList } from './types';
import { CreateScreen } from '../screens/CreateScreen';
import { TemplatesScreen } from '../screens/TemplatesScreen';
import { PremiumScreen } from '../screens/PremiumScreen';
import { WorksScreen } from '../screens/WorksScreen';
import { AccountScreen } from '../screens/account/AccountScreen';
import { CreditsScreen } from '../screens/account/CreditsScreen';
import { LanguageScreen } from '../screens/account/LanguageScreen';
import { colors } from '../theme';

const Tab = createBottomTabNavigator<TabParamList>();
const AccountStack = createNativeStackNavigator<AccountStackParamList>();

function AccountNavigator() {
  return (
    <AccountStack.Navigator screenOptions={{ headerTintColor: colors.primary, headerTitleStyle: { color: colors.text }, headerShadowVisible: false }}>
      <AccountStack.Screen name="AccountHome" component={AccountScreen} options={{ headerShown: false }} />
      <AccountStack.Screen name="Credits" component={CreditsScreen} options={{ title: 'Credits' }} />
      <AccountStack.Screen name="Language" component={LanguageScreen} options={{ title: 'Language' }} />
    </AccountStack.Navigator>
  );
}

const icons: Record<keyof TabParamList, [keyof typeof Ionicons.glyphMap, keyof typeof Ionicons.glyphMap]> = {
  Create: ['home', 'home-outline'],
  Templates: ['albums', 'albums-outline'],
  Premium: ['diamond', 'diamond-outline'],
  Works: ['folder-open', 'folder-open-outline'],
  Account: ['person-circle', 'person-circle-outline'],
};

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          height: Platform.OS === 'ios' ? 88 : 64,
        },
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={icons[route.name][focused ? 0 : 1]} size={size} color={route.name === 'Premium' && !focused ? colors.gold : color} />
        ),
      })}
    >
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Templates" component={TemplatesScreen} />
      <Tab.Screen name="Premium" component={PremiumScreen} />
      <Tab.Screen name="Works" component={WorksScreen} />
      <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
  );
}

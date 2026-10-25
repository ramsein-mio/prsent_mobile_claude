import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AccountStackParamList, RootStackParamList } from '../../navigation/types';
import { PlanCarousel } from '../../components/PlanCarousel';
import { SettingsItem, SettingsList } from '../../components/SettingsList';
import { colors } from '../../theme';

const USER_ID = '84729361';

export function AccountScreen() {
  const nav = useNavigation<NativeStackNavigationProp<AccountStackParamList>>();
  const root = useNavigation<NavigationProp<RootStackParamList>>();
  const [copied, setCopied] = useState(false);

  const copyId = async () => {
    await Clipboard.setStringAsync(USER_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const items: SettingsItem[] = [
    { key: 'credits', label: 'Credits', icon: 'flash-outline', onPress: () => nav.navigate('Credits') },
    { key: 'language', label: 'Language', icon: 'language-outline', value: 'English', onPress: () => nav.navigate('Language') },
    { key: 'workspace', label: 'My Workspace', icon: 'briefcase-outline', onPress: () => Alert.alert('My Workspace') },
    { key: 'security', label: 'Account Security', icon: 'shield-checkmark-outline', onPress: () => Alert.alert('Account Security') },
    { key: 'feedback', label: 'Feedback', icon: 'chatbubble-ellipses-outline', onPress: () => Alert.alert('Feedback') },
    { key: 'about', label: 'About', icon: 'information-circle-outline', onPress: () => Alert.alert('About', 'AiPPT clone · v1.0.0') },
  ];

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 32, gap: 20 }} showsVerticalScrollIndicator={false}>
        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={30} color="#fff" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Guest</Text>
            <Pressable onPress={copyId} style={styles.idRow} accessibilityLabel="Copy user ID">
              <Text style={styles.id}>ID: {USER_ID}</Text>
              <Ionicons name={copied ? 'checkmark' : 'copy-outline'} size={14} color={copied ? colors.success : colors.textMuted} />
            </Pressable>
          </View>
          <Pressable hitSlop={12} onPress={() => Alert.alert('Notifications', 'You’re all caught up.')} accessibilityLabel="Notifications">
            <Ionicons name="notifications-outline" size={26} color={colors.text} />
          </Pressable>
        </View>

        <PlanCarousel
          slides={[
            { id: 'free', title: 'Free Plan', sub: 'Upgrade for unlimited AI generation', cta: 'Upgrade', gradient: [colors.primary, '#6D28D9'], onPress: () => root.navigate('PremiumModal') },
            { id: 'credits', title: 'Need more credits?', sub: 'Top up and keep creating', cta: 'Top up', gradient: ['#F59E0B', colors.gold], onPress: () => nav.navigate('Credits') },
          ]}
        />

        <View style={{ paddingHorizontal: 16 }}>
          <SettingsList items={items} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.surface },
  profile: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 16, paddingTop: 16 },
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 20, fontWeight: '800', color: colors.text },
  idRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 2 },
  id: { fontSize: 13, color: colors.textMuted },
});

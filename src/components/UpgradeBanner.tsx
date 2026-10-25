import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, radius, shadow } from '../theme';

type Props = { onPress: () => void };

/** Sticky purple banner pinned above the tab bar. */
export function UpgradeBanner({ onPress }: Props) {
  return (
    <Pressable onPress={onPress} accessibilityRole="button" style={styles.wrap}>
      <LinearGradient colors={[colors.primary, '#6D28D9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.banner}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Upgrade to Premium!</Text>
          <Text style={styles.sub}>Unlock all features</Text>
        </View>
        <View style={styles.go}>
          <Text style={styles.goText}>Go</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 16, paddingBottom: 8, paddingTop: 4, ...shadow },
  banner: { flexDirection: 'row', alignItems: 'center', borderRadius: radius.lg, paddingVertical: 12, paddingHorizontal: 16 },
  title: { color: '#fff', fontSize: 17, fontWeight: '800' },
  sub: { color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 2 },
  go: { backgroundColor: colors.gold, paddingHorizontal: 24, paddingVertical: 10, borderRadius: radius.pill },
  goText: { color: '#fff', fontWeight: '800', fontSize: 15 },
});

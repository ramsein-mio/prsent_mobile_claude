import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Template } from '../types';
import { colors, radius, shadow } from '../theme';

type Props = { template: Template; width: number; onUse: (t: Template) => void };

/** 16:9 slide cover preview with a "Use This" action. */
export function SlideCover({ template, width, onUse }: Props) {
  return (
    <View style={[styles.card, { width }]}>
      <LinearGradient colors={[template.color, '#18181B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.cover}>
        <View style={styles.sheen} />
        <Text style={styles.coverTitle} numberOfLines={2}>{template.title}</Text>
        <Pressable onPress={() => onUse(template)} style={styles.use} accessibilityRole="button">
          <Text style={styles.useText}>Use This</Text>
        </Pressable>
      </LinearGradient>
      <Text style={styles.meta} numberOfLines={1}>{template.style} · {template.scene}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, borderRadius: radius.lg, padding: 8, ...shadow },
  cover: { aspectRatio: 16 / 9, borderRadius: radius.md, padding: 10, justifyContent: 'space-between', overflow: 'hidden' },
  sheen: { position: 'absolute', right: -30, top: -30, width: 100, height: 100, borderRadius: 50, backgroundColor: 'rgba(255,255,255,0.15)' },
  coverTitle: { color: '#fff', fontSize: 15, fontWeight: '800', maxWidth: '75%' },
  use: { alignSelf: 'flex-start', backgroundColor: 'rgba(24,24,27,0.65)', paddingHorizontal: 12, paddingVertical: 5, borderRadius: radius.pill },
  useText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  meta: { fontSize: 12, color: colors.textMuted, marginTop: 8, marginLeft: 2 },
});

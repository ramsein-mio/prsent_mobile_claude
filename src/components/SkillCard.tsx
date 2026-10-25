import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Skill } from '../types';
import { Button } from './ui/Button';
import { Skeleton } from './ui/Skeleton';
import { colors, radius, shadow } from '../theme';

type Props = { skill: Skill; width: number; onApply: (skill: Skill) => void };

export function SkillCard({ skill, width, onApply }: Props) {
  return (
    <View style={[styles.card, { width }]}>
      <LinearGradient colors={skill.colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.cover}>
        <Ionicons name={skill.icon as keyof typeof Ionicons.glyphMap} size={34} color="rgba(255,255,255,0.9)" />
      </LinearGradient>
      <Text style={styles.title} numberOfLines={1}>{skill.title}</Text>
      <Button label="Apply" variant="outline" size="sm" onPress={() => onApply(skill)} style={{ marginTop: 8 }} />
    </View>
  );
}

export function SkillCardSkeleton({ width }: { width: number }) {
  return (
    <View style={[styles.card, { width }]}>
      <Skeleton height={(width - 20) * (9 / 16)} radius={radius.md} />
      <Skeleton width="70%" height={14} style={{ marginTop: 12 }} />
      <Skeleton height={32} radius={16} style={{ marginTop: 10 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, borderRadius: radius.lg, padding: 10, ...shadow },
  cover: { aspectRatio: 16 / 9, borderRadius: radius.md, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 15, fontWeight: '700', color: colors.text, marginTop: 10 },
});

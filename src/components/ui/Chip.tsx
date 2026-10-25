import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius } from '../../theme';

type Props = { label: string; active?: boolean; onPress?: () => void };

export function Chip({ label, active, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.chip, active && styles.active]}>
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: radius.pill, backgroundColor: colors.surface },
  active: { backgroundColor: colors.primarySoft, borderWidth: 1, borderColor: colors.primaryLight },
  label: { fontSize: 14, color: colors.text, fontWeight: '500' },
  labelActive: { color: colors.primary, fontWeight: '700' },
});

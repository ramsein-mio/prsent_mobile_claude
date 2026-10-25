import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from './ui/Card';
import { colors } from '../theme';

export type SettingsItem = { key: string; label: string; icon: keyof typeof Ionicons.glyphMap; value?: string; onPress: () => void };

export function SettingsList({ items }: { items: SettingsItem[] }) {
  return (
    <Card padded={false}>
      {items.map((item, i) => (
        <Pressable key={item.key} onPress={item.onPress} style={[styles.row, i > 0 && styles.divider]} accessibilityRole="button">
          <Ionicons name={item.icon} size={20} color={colors.primary} />
          <Text style={styles.label}>{item.label}</Text>
          {item.value ? <Text style={styles.value}>{item.value}</Text> : null}
          <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
        </Pressable>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 16 },
  divider: { borderTopWidth: 1, borderTopColor: colors.border },
  label: { flex: 1, fontSize: 17, color: colors.text },
  value: { fontSize: 14, color: colors.textMuted },
});

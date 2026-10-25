import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme';

type Option<T extends string> = { label: string; value: T };
type Props<T extends string> = { options: Option<T>[]; value: T; onChange: (value: T) => void };

export function UnderlineTabs<T extends string>({ options, value, onChange }: Props<T>) {
  return (
    <View style={styles.row}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <Pressable key={o.value} onPress={() => onChange(o.value)} style={[styles.tab, active && styles.tabActive]}>
            <Text style={[styles.label, active && styles.labelActive]}>{o.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 24, borderBottomWidth: 1, borderBottomColor: colors.border },
  tab: { paddingVertical: 10, borderBottomWidth: 3, borderBottomColor: 'transparent', marginBottom: -1 },
  tabActive: { borderBottomColor: colors.primary },
  label: { fontSize: 16, color: colors.textMuted, fontWeight: '500' },
  labelActive: { color: colors.primary, fontWeight: '700' },
});

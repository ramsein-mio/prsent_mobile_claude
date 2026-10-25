import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '../../theme';

type Option<T extends string> = { label: string; value: T };
type Props<T extends string> = { options: Option<T>[]; value: T; onChange: (value: T) => void };

export function SegmentedPill<T extends string>({ options, value, onChange }: Props<T>) {
  return (
    <View style={styles.track}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <Pressable key={o.value} accessibilityRole="button" accessibilityState={{ selected: active }} onPress={() => onChange(o.value)} style={[styles.item, active && styles.itemActive]}>
            <Text style={[styles.label, active && styles.labelActive]}>{o.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  track: { flexDirection: 'row', backgroundColor: colors.card, borderRadius: radius.pill, borderWidth: 1, borderColor: colors.border, padding: 3 },
  item: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: radius.pill },
  itemActive: { backgroundColor: colors.primary },
  label: { fontSize: 15, fontWeight: '600', color: colors.text },
  labelActive: { color: '#fff' },
});

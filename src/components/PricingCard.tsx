import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadow } from '../theme';
import { CornerBadge } from './ui/Badge';

type Props = {
  title: string;
  price: string;
  caption: string;
  selected: boolean;
  badge?: string;
  onPress: () => void;
};

export function PricingCard({ title, price, caption, selected, badge, onPress }: Props) {
  return (
    <Pressable onPress={onPress} accessibilityRole="radio" accessibilityState={{ selected }} style={[styles.card, selected && styles.selected]}>
      <View style={[styles.radio, selected && styles.radioOn]}>{selected && <View style={styles.radioDot} />}</View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.caption}>{caption}</Text>
      {badge && <CornerBadge label={badge} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, backgroundColor: colors.card, borderRadius: radius.lg, padding: 16, paddingTop: 44, borderWidth: 2, borderColor: 'transparent', overflow: 'hidden', ...shadow },
  selected: { borderColor: colors.primary, backgroundColor: colors.primarySoft },
  radio: { position: 'absolute', top: 14, left: 14, width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  radioOn: { borderColor: colors.primary },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary },
  title: { fontSize: 20, fontWeight: '800', color: colors.text },
  price: { fontSize: 18, fontWeight: '700', color: colors.primary, marginTop: 6 },
  caption: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
});

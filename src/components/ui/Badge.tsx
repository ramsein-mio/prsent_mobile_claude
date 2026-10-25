import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme';

type Props = { label: string; color?: string };

/** Diagonal corner ribbon used for discounts like "50% OFF". Place inside an overflow-hidden parent. */
export function CornerBadge({ label, color = colors.orange }: Props) {
  return (
    <View style={styles.clip} pointerEvents="none">
      <View style={[styles.ribbon, { backgroundColor: color }]}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  clip: { position: 'absolute', top: 0, right: 0, width: 84, height: 84, overflow: 'hidden' },
  ribbon: { position: 'absolute', top: 14, right: -30, width: 110, paddingVertical: 4, alignItems: 'center', transform: [{ rotate: '45deg' }] },
  text: { color: '#fff', fontSize: 11, fontWeight: '800' },
});

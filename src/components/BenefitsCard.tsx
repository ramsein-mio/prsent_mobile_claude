import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from './ui/Card';
import { colors } from '../theme';

export function BenefitsCard({ items }: { items: string[] }) {
  return (
    <Card style={{ gap: 14 }}>
      {items.map((b) => (
        <View key={b} style={styles.row}>
          <Ionicons name="checkmark" size={22} color={colors.primary} />
          <Text style={styles.text}>{b}</Text>
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  text: { fontSize: 17, color: colors.text, fontWeight: '500' },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Chewy } from './Chewy';
import { Button } from '../ui/Button';
import { colors } from '../../theme';

type Props = { title?: string; subtitle?: string; actionLabel?: string; onAction?: () => void };

/** Chewy with a magnifying glass: used wherever a list has nothing to show. */
export function EmptyState({ title = 'No Projects Yet!', subtitle, actionLabel = 'Create one now', onAction }: Props) {
  return (
    <View style={styles.wrap}>
      <Chewy pose="search" size={190} />
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      {onAction ? <Button label={actionLabel} onPress={onAction} style={{ marginTop: 16, paddingHorizontal: 28 }} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', paddingVertical: 32, paddingHorizontal: 24 },
  title: { fontSize: 22, fontWeight: '800', color: colors.text, marginTop: 4 },
  subtitle: { fontSize: 14, color: colors.textMuted, marginTop: 6, textAlign: 'center' },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheet } from './ui/BottomSheet';
import { Button } from './ui/Button';
import { colors } from '../theme';

type Props = { visible: boolean; name?: string; onCancel: () => void; onConfirm: () => void };

export function DeleteSheet({ visible, name, onCancel, onConfirm }: Props) {
  return (
    <BottomSheet visible={visible} onClose={onCancel}>
      <View style={styles.head}>
        <Ionicons name="warning" size={24} color={colors.danger} />
        <Text style={styles.title}>Delete file?</Text>
      </View>
      {name ? <Text style={styles.sub}>“{name}” will be permanently removed.</Text> : null}
      <View style={styles.row}>
        <Button label="Cancel" variant="ghost" onPress={onCancel} style={{ flex: 1 }} />
        <Button label="Delete" variant="danger" onPress={onConfirm} style={{ flex: 1 }} />
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  head: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 6 },
  title: { fontSize: 22, fontWeight: '800', color: colors.text },
  sub: { textAlign: 'center', color: colors.textMuted, marginBottom: 6 },
  row: { flexDirection: 'row', gap: 12, marginTop: 18 },
});

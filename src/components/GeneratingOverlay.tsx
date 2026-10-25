import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { LoadingState } from './mascot/LoadingState';
import { colors } from '../theme';

export function GeneratingOverlay({ visible }: { visible: boolean }) {
  return (
    <Modal visible={visible} animationType="fade" statusBarTranslucent>
      <View style={styles.wrap}>
        <LoadingState />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({ wrap: { flex: 1, backgroundColor: colors.card, alignItems: 'center', justifyContent: 'center' } });

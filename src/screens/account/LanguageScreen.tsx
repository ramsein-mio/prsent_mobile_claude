import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { languages } from '../../data/mock';
import { colors, radius, shadow } from '../../theme';

export function LanguageScreen() {
  const [selected, setSelected] = useState('en');

  return (
    <FlatList
      style={{ backgroundColor: colors.surface }}
      contentContainerStyle={{ padding: 16 }}
      data={languages}
      keyExtractor={(l) => l.code}
      ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: colors.border }} />}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => setSelected(item.code)}
          accessibilityRole="radio"
          accessibilityState={{ selected: selected === item.code }}
          style={[styles.row, index === 0 && styles.first, index === languages.length - 1 && styles.last]}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.native}>{item.native}</Text>
            <Text style={styles.label}>{item.label}</Text>
          </View>
          {selected === item.code && <Ionicons name="checkmark-circle" size={24} color={colors.primary} />}
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, paddingHorizontal: 16, paddingVertical: 14 },
  first: { borderTopLeftRadius: radius.lg, borderTopRightRadius: radius.lg, ...shadow },
  last: { borderBottomLeftRadius: radius.lg, borderBottomRightRadius: radius.lg },
  native: { fontSize: 17, color: colors.text, fontWeight: '600' },
  label: { fontSize: 13, color: colors.textMuted },
});

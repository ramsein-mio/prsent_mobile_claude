import React from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { creditPacks } from '../../data/mock';
import { colors } from '../../theme';

export function CreditsScreen() {
  return (
    <FlatList
      style={{ backgroundColor: colors.surface }}
      contentContainerStyle={styles.content}
      data={creditPacks}
      keyExtractor={(p) => p.id}
      ListHeaderComponent={
        <Card style={styles.balance}>
          <Ionicons name="flash" size={28} color={colors.gold} />
          <View>
            <Text style={styles.balanceLabel}>Your balance</Text>
            <Text style={styles.balanceValue}>20 credits</Text>
          </View>
        </Card>
      }
      renderItem={({ item }) => (
        <Card style={styles.row}>
          <Text style={styles.credits}>+{item.credits.toLocaleString()} Credits</Text>
          <Text style={styles.price}>{item.price}</Text>
          <Button label="Buy" size="sm" onPress={() => Alert.alert('Purchase', `Buy ${item.credits} credits for ${item.price}?`)} style={{ paddingHorizontal: 22 }} />
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12 },
  balance: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 8 },
  balanceLabel: { fontSize: 13, color: colors.textMuted },
  balanceValue: { fontSize: 22, fontWeight: '800', color: colors.text },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  credits: { flex: 1, fontSize: 18, fontWeight: '700', color: colors.text },
  price: { fontSize: 15, color: colors.textMuted },
});

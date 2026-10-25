import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SegmentedPill } from '../components/ui/SegmentedPill';
import { BenefitsCard } from '../components/BenefitsCard';
import { PricingCard } from '../components/PricingCard';
import { Button } from '../components/ui/Button';
import { benefits } from '../data/mock';
import { BillingPlan, PlanTier } from '../types';
import { colors } from '../theme';

const prices: Record<PlanTier, Record<BillingPlan, { price: string; caption: string }>> = {
  plus: { yearly: { price: '$29.99 / yr', caption: 'Just $2.50 / month' }, lifetime: { price: '$59.99', caption: 'One-time payment' } },
  pro: { yearly: { price: '$59.99 / yr', caption: 'Just $5.00 / month' }, lifetime: { price: '$119.99', caption: 'One-time payment' } },
};

/** Works as both the Premium tab and the full-screen paywall modal. */
export function PremiumScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const isModal = route.name === 'PremiumModal';

  const [tier, setTier] = useState<PlanTier>('plus');
  const [billing, setBilling] = useState<BillingPlan>('yearly');

  const onContinue = () => {
    Alert.alert('Continue', `${tier === 'plus' ? 'Plus' : 'Pro'} · ${billing === 'yearly' ? 'Yearly' : 'Lifetime'}\n${prices[tier][billing].price}`);
  };

  return (
    <SafeAreaView style={styles.safe} edges={isModal ? ['top', 'bottom'] : ['top']}>
      <View style={styles.top}>
        {isModal ? (
          <Pressable onPress={() => navigation.goBack()} hitSlop={12} accessibilityLabel="Close">
            <Ionicons name="close" size={26} color={colors.text} />
          </Pressable>
        ) : (
          <View style={{ width: 26 }} />
        )}
        <Text style={styles.heading}>Go Premium</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <SegmentedPill<PlanTier> options={[{ label: 'Plus', value: 'plus' }, { label: 'Pro', value: 'pro' }]} value={tier} onChange={setTier} />
        <Text style={styles.section}>What you get</Text>
        <BenefitsCard items={benefits[tier]} />

        <Text style={styles.section}>Choose your plan</Text>
        <View style={styles.row}>
          <PricingCard
            title="Yearly"
            price={prices[tier].yearly.price}
            caption={prices[tier].yearly.caption}
            selected={billing === 'yearly'}
            badge="50% OFF"
            onPress={() => setBilling('yearly')}
          />
          <PricingCard
            title="Lifetime"
            price={prices[tier].lifetime.price}
            caption={prices[tier].lifetime.caption}
            selected={billing === 'lifetime'}
            badge="50% OFF"
            onPress={() => setBilling('lifetime')}
          />
        </View>
        <Text style={styles.legal}>Payment is charged to your store account. Subscriptions renew automatically unless cancelled at least 24 hours before the period ends.</Text>
      </ScrollView>

      <View style={styles.cta}>
        <Button label="Continue" size="lg" variant={tier === 'pro' ? 'gold' : 'primary'} onPress={onContinue} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.surface },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 14 },
  heading: { fontSize: 20, fontWeight: '800', color: colors.text },
  content: { paddingHorizontal: 16, paddingBottom: 24 },
  section: { fontSize: 18, fontWeight: '700', color: colors.text, marginTop: 22, marginBottom: 10 },
  row: { flexDirection: 'row', gap: 12 },
  legal: { fontSize: 12, color: colors.textMuted, marginTop: 16, textAlign: 'center' },
  cta: { paddingHorizontal: 16, paddingVertical: 12, backgroundColor: colors.surface, borderTopWidth: 1, borderTopColor: colors.border },
});

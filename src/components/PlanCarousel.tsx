import React, { useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from './ui/Button';
import { colors, radius, shadow } from '../theme';

type Slide = { id: string; title: string; sub: string; cta: string; gradient: [string, string]; onPress: () => void };

export function PlanCarousel({ slides }: { slides: Slide[] }) {
  const { width } = useWindowDimensions();
  const cardWidth = width - 32;
  const [index, setIndex] = useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setIndex(Math.round(e.nativeEvent.contentOffset.x / (cardWidth + 12)));
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToInterval={cardWidth + 12} decelerationRate="fast" onScroll={onScroll} scrollEventThrottle={16} contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}>
        {slides.map((s) => (
          <LinearGradient key={s.id} colors={s.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[styles.slide, { width: cardWidth }]}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{s.title}</Text>
              <Text style={styles.sub}>{s.sub}</Text>
            </View>
            <Button label={s.cta} variant="gold" size="sm" onPress={s.onPress} />
          </LinearGradient>
        ))}
      </ScrollView>
      <View style={styles.dots}>
        {slides.map((s, i) => (
          <View key={s.id} style={[styles.dot, i === index && styles.dotActive]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: { flexDirection: 'row', alignItems: 'center', borderRadius: radius.lg, padding: 18, ...shadow },
  title: { color: '#fff', fontSize: 20, fontWeight: '800' },
  sub: { color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 4 },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginTop: 10 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.border },
  dotActive: { width: 18, backgroundColor: colors.primary },
});

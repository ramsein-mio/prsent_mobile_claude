import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { Chewy } from './Chewy';
import { colors } from '../../theme';

type Props = { message?: string };

/** Chewy in wizard gear inside a rotating purple ring. Replaces generic spinners. */
export function LoadingState({ message = 'Generating your masterpiece...' }: Props) {
  const spin = useRef(new Animated.Value(0)).current;
  const bob = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spinLoop = Animated.loop(Animated.timing(spin, { toValue: 1, duration: 2400, easing: Easing.linear, useNativeDriver: true }));
    const bobLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(bob, { toValue: -6, duration: 700, useNativeDriver: true }),
        Animated.timing(bob, { toValue: 0, duration: 700, useNativeDriver: true }),
      ]),
    );
    spinLoop.start();
    bobLoop.start();
    return () => {
      spinLoop.stop();
      bobLoop.stop();
    };
  }, [spin, bob]);

  const rotate = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });

  return (
    <View style={styles.wrap}>
      <View style={styles.ringBox}>
        <Animated.View style={[styles.ring, { transform: [{ rotate }] }]} />
        <Animated.View style={{ transform: [{ translateY: bob }] }}>
          <Chewy pose="wizard" size={150} />
        </Animated.View>
      </View>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', justifyContent: 'center', paddingVertical: 24 },
  ringBox: { width: 220, height: 220, alignItems: 'center', justifyContent: 'center' },
  ring: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 6,
    borderColor: colors.primarySoft,
    borderTopColor: colors.primary,
    borderRightColor: colors.primaryLight,
  },
  text: { marginTop: 20, fontSize: 18, fontWeight: '700', color: colors.text, textAlign: 'center' },
});

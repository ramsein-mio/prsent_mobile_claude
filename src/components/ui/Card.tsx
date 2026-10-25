import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors, radius, shadow } from '../../theme';

type Props = { children: React.ReactNode; style?: StyleProp<ViewStyle>; padded?: boolean };

export function Card({ children, style, padded = true }: Props) {
  return <View style={[styles.card, padded && { padding: 16 }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, borderRadius: radius.lg, ...shadow },
});

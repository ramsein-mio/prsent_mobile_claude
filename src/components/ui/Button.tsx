import React from 'react';
import { ActivityIndicator, Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { colors, radius } from '../../theme';

type Variant = 'primary' | 'outline' | 'danger' | 'ghost' | 'gold';
type Size = 'sm' | 'md' | 'lg';

type Props = {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
};

const bg: Record<Variant, string> = {
  primary: colors.primary,
  outline: 'transparent',
  danger: colors.danger,
  ghost: colors.surface,
  gold: colors.gold,
};
const fg: Record<Variant, string> = {
  primary: '#fff',
  outline: colors.primary,
  danger: '#fff',
  ghost: colors.text,
  gold: '#fff',
};
const pad: Record<Size, number> = { sm: 8, md: 12, lg: 16 };

export function Button({ label, onPress, variant = 'primary', size = 'md', disabled, loading, style }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: bg[variant], paddingVertical: pad[size], opacity: disabled ? 0.45 : pressed ? 0.85 : 1 },
        variant === 'outline' && { borderWidth: 1.5, borderColor: colors.primaryLight },
        style,
      ]}
    >
      {loading ? <ActivityIndicator color={fg[variant]} /> : <Text style={[styles.label, { color: fg[variant], fontSize: size === 'sm' ? 14 : 16 }]}>{label}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: radius.pill, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18 },
  label: { fontWeight: '700' },
});

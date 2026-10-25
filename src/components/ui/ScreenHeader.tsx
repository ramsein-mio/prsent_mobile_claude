import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme';

type Props = {
  title: string;
  showLogo?: boolean;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightPress?: () => void;
};

export function ScreenHeader({ title, showLogo, rightIcon, onRightPress }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        {showLogo && (
          <View style={styles.logo}>
            <Ionicons name="easel" size={18} color="#fff" />
          </View>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      {rightIcon && (
        <Pressable onPress={onRightPress} hitSlop={12} accessibilityRole="button">
          <Ionicons name={rightIcon} size={24} color={colors.text} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12 },
  left: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  logo: { width: 30, height: 30, borderRadius: 8, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: '800', color: colors.text },
});

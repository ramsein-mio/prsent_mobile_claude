import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Chip } from './ui/Chip';
import { colors, radius, shadow } from '../theme';

export type FilterState = { style: string | null; scene: string | null; color: string | null };
type Section = 'style' | 'scene' | 'color';

type Props = {
  styles: string[];
  scenes: string[];
  swatches: string[];
  value: FilterState;
  onChange: (next: FilterState) => void;
};

const titles: Record<Section, string> = { style: 'Style', scene: 'Scene', color: 'Color' };

export function FilterDrawer({ styles: styleOptions, scenes, swatches, value, onChange }: Props) {
  const [open, setOpen] = useState<Section | null>('style');

  const toggle = (s: Section) => setOpen((cur) => (cur === s ? null : s));
  const pick = (s: Section, v: string) => onChange({ ...value, [s]: value[s] === v ? null : v });

  return (
    <View style={localStyles.card}>
      {(['style', 'scene', 'color'] as Section[]).map((s, i) => {
        const isOpen = open === s;
        const selected = value[s];
        return (
          <View key={s} style={i > 0 && localStyles.divider}>
            <Pressable onPress={() => toggle(s)} style={localStyles.header} accessibilityRole="button">
              <Text style={localStyles.headerText}>{titles[s]}</Text>
              <View style={localStyles.headerRight}>
                {selected && s !== 'color' && <Text style={localStyles.selected}>{selected}</Text>}
                {selected && s === 'color' && <View style={[localStyles.dot, { backgroundColor: selected, width: 16, height: 16 }]} />}
                <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={18} color={colors.text} />
              </View>
            </Pressable>
            {isOpen && s !== 'color' && (
              <View style={localStyles.chips}>
                {(s === 'style' ? styleOptions : scenes).map((o) => (
                  <Chip key={o} label={o} active={value[s] === o} onPress={() => pick(s, o)} />
                ))}
              </View>
            )}
            {isOpen && s === 'color' && (
              <View style={localStyles.chips}>
                {swatches.map((c) => (
                  <Pressable key={c} onPress={() => pick('color', c)} accessibilityLabel={`Color ${c}`} style={[localStyles.dot, { backgroundColor: c }, value.color === c && localStyles.dotActive]} />
                ))}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}

const localStyles = StyleSheet.create({
  card: { backgroundColor: colors.card, borderRadius: radius.lg, paddingHorizontal: 16, ...shadow },
  divider: { borderTopWidth: 1, borderTopColor: colors.border },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14 },
  headerText: { fontSize: 17, fontWeight: '700', color: colors.text },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  selected: { fontSize: 14, color: colors.primary, fontWeight: '600' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, paddingBottom: 14 },
  dot: { width: 32, height: 32, borderRadius: 16 },
  dotActive: { borderWidth: 3, borderColor: colors.card, shadowColor: '#000', shadowOpacity: 0.35, shadowRadius: 4, shadowOffset: { width: 0, height: 1 }, elevation: 4 },
});

import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from './ui/Button';
import { colors, radius, shadow } from '../theme';
import { CreateMode, ModelTier } from '../types';

type Props = { mode: CreateMode; onSend: (prompt: string, model: ModelTier) => void };

export function PromptCard({ mode, onSend }: Props) {
  const [text, setText] = useState('');
  const [model, setModel] = useState<ModelTier>('Lite');
  const [attached, setAttached] = useState(false);

  const placeholder = mode === 'agent' ? 'Tell AI what your PPT is about...' : 'Enter a topic or outline for your slides...';

  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        multiline
        value={text}
        onChangeText={setText}
        textAlignVertical="top"
      />
      <Pressable onPress={() => setAttached((a) => !a)} style={[styles.upload, attached && styles.uploadOn]} accessibilityLabel="Attach file">
        <Ionicons name={attached ? 'checkmark' : 'add'} size={26} color={attached ? colors.primary : colors.textMuted} />
      </Pressable>
      <View style={styles.footer}>
        <View style={styles.chipRow}>
          <View style={styles.chip}>
            <Ionicons name="image-outline" size={18} color={colors.text} />
            <Text style={styles.chipText}>Image</Text>
          </View>
          <Pressable style={[styles.chip, styles.modelChip]} onPress={() => setModel((m) => (m === 'Lite' ? 'Pro' : 'Lite'))}>
            <Text style={styles.chipText}>{model === 'Lite' ? 'Lite/Pro' : 'Pro/Lite'}</Text>
            <Ionicons name="chevron-down" size={14} color={colors.text} />
          </Pressable>
        </View>
        <Button label="Send" size="sm" disabled={!text.trim()} onPress={() => { onSend(text.trim(), model); setText(''); setAttached(false); }} style={{ paddingHorizontal: 22 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, borderRadius: radius.lg, ...shadow, overflow: 'hidden' },
  input: { minHeight: 70, paddingHorizontal: 16, paddingTop: 16, fontSize: 16, color: colors.text },
  upload: { marginLeft: 16, marginTop: 8, marginBottom: 12, width: 56, height: 56, borderRadius: radius.md, borderWidth: 1.5, borderStyle: 'dashed', borderColor: colors.border, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center' },
  uploadOn: { borderColor: colors.primaryLight, backgroundColor: colors.primarySoft },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12, borderTopWidth: 1, borderTopColor: colors.border },
  chipRow: { flexDirection: 'row', gap: 8 },
  chip: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 10, paddingVertical: 8, borderRadius: radius.pill },
  modelChip: { backgroundColor: colors.surface },
  chipText: { fontSize: 14, color: colors.text, fontWeight: '500' },
});

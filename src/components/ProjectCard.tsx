import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Project } from '../types';
import { colors, radius, shadow } from '../theme';

type Props = {
  project: Project;
  width: number;
  onMore: (p: Project) => void;
  onShare: (p: Project) => void;
  onDownload: (p: Project) => void;
};

export function ProjectCard({ project, width, onMore, onShare, onDownload }: Props) {
  return (
    <View style={[styles.card, { width }]}>
      <LinearGradient colors={project.colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.cover}>
        <Ionicons name="easel-outline" size={30} color="rgba(255,255,255,0.85)" />
      </LinearGradient>
      <View style={styles.titleRow}>
        <Text style={styles.title} numberOfLines={1}>{project.title}</Text>
        <Pressable onPress={() => onMore(project)} hitSlop={10} accessibilityLabel="More actions">
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.textMuted} />
        </Pressable>
      </View>
      <Text style={styles.edited}>Last edited {project.editedAt}</Text>
      <View style={styles.actions}>
        <Pressable onPress={() => onShare(project)} style={styles.action} accessibilityLabel="Share">
          <Ionicons name="share-social-outline" size={18} color={colors.text} />
          <Text style={styles.actionText}>Share</Text>
        </Pressable>
        <Pressable onPress={() => onDownload(project)} hitSlop={10} accessibilityLabel="Download">
          <Ionicons name="download-outline" size={20} color={colors.text} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, borderRadius: radius.lg, padding: 10, ...shadow },
  cover: { aspectRatio: 16 / 9, borderRadius: radius.md, alignItems: 'center', justifyContent: 'center' },
  titleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, gap: 6 },
  title: { flex: 1, fontSize: 15, fontWeight: '700', color: colors.text },
  edited: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  actions: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 },
  action: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  actionText: { fontSize: 14, color: colors.text, fontWeight: '500' },
});

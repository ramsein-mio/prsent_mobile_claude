import React, { useState } from 'react';
import { Alert, FlatList, Pressable, Share, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { ScreenHeader } from '../components/ui/ScreenHeader';
import { ProjectCard } from '../components/ProjectCard';
import { DeleteSheet } from '../components/DeleteSheet';
import { BottomSheet } from '../components/ui/BottomSheet';
import { Button } from '../components/ui/Button';
import { EmptyState } from '../components/mascot/EmptyState';
import { useGridWidth } from '../hooks/useGridWidth';
import { useProjects } from '../context/ProjectsContext';
import { Project } from '../types';
import { colors, shadow } from '../theme';

export function WorksScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { projects, addProject, removeProject } = useProjects();
  const colWidth = useGridWidth(2, 16, 12);

  const [actionTarget, setActionTarget] = useState<Project | null>(null);
  const [confirmTarget, setConfirmTarget] = useState<Project | null>(null);

  const onShare = (p: Project) => Share.share({ message: `Check out my deck: ${p.title}` });
  const onDownload = (p: Project) => Alert.alert('Download', `“${p.title}” will be exported as PPTX.`);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="Works" />
      <FlatList
        data={projects}
        keyExtractor={(p) => p.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 12, paddingHorizontal: 16 }}
        contentContainerStyle={{ gap: 12, paddingBottom: 110, flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyState onAction={() => navigation.navigate('Tabs', { screen: 'Create' })} />}
        renderItem={({ item }) => <ProjectCard project={item} width={colWidth} onMore={setActionTarget} onShare={onShare} onDownload={onDownload} />}
      />

      <Pressable style={styles.fab} onPress={() => addProject('Imported deck')} accessibilityLabel="Upload presentation">
        <Ionicons name="cloud-upload" size={26} color="#fff" />
      </Pressable>

      <BottomSheet visible={!!actionTarget} onClose={() => setActionTarget(null)}>
        <View style={{ gap: 10 }}>
          <Button label="Share" variant="ghost" onPress={() => { const p = actionTarget; setActionTarget(null); if (p) onShare(p); }} />
          <Button label="Delete" variant="danger" onPress={() => { setConfirmTarget(actionTarget); setActionTarget(null); }} />
        </View>
      </BottomSheet>

      <DeleteSheet
        visible={!!confirmTarget}
        name={confirmTarget?.title}
        onCancel={() => setConfirmTarget(null)}
        onConfirm={() => { if (confirmTarget) removeProject(confirmTarget.id); setConfirmTarget(null); }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.surface },
  fab: { position: 'absolute', right: 20, bottom: 24, width: 60, height: 60, borderRadius: 30, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', ...shadow, shadowColor: colors.primary, shadowOpacity: 0.4 },
});

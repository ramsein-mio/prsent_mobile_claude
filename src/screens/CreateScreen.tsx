import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { ScreenHeader } from '../components/ui/ScreenHeader';
import { SegmentedPill } from '../components/ui/SegmentedPill';
import { UnderlineTabs } from '../components/ui/UnderlineTabs';
import { PromptCard } from '../components/PromptCard';
import { SkillCard, SkillCardSkeleton } from '../components/SkillCard';
import { UpgradeBanner } from '../components/UpgradeBanner';
import { GeneratingOverlay } from '../components/GeneratingOverlay';
import { EmptyState } from '../components/mascot/EmptyState';
import { useGridWidth } from '../hooks/useGridWidth';
import { useProjects } from '../context/ProjectsContext';
import { mySkills, recommendedSkills } from '../data/mock';
import { CreateMode, ModelTier, Skill } from '../types';
import { colors } from '../theme';

type SkillTab = 'recommended' | 'mine';

export function CreateScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { addProject } = useProjects();
  const colWidth = useGridWidth(2, 16, 12);

  const [mode, setMode] = useState<CreateMode>('agent');
  const [tab, setTab] = useState<SkillTab>('recommended');
  const [loadingSkills, setLoadingSkills] = useState(true);
  const [generating, setGenerating] = useState(false);

  // Simulate a lazy load whenever the skill tab changes.
  useEffect(() => {
    setLoadingSkills(true);
    const t = setTimeout(() => setLoadingSkills(false), 700);
    return () => clearTimeout(t);
  }, [tab]);

  const skills = tab === 'recommended' ? recommendedSkills : mySkills;

  const generate = (title: string) => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      addProject(title.length > 28 ? `${title.slice(0, 28)}…` : title);
      navigation.navigate('Tabs', { screen: 'Works' });
    }, 3000);
  };

  const onSend = (prompt: string, _model: ModelTier) => generate(prompt);
  const onApply = (skill: Skill) => Alert.alert(skill.title, 'Skill applied. Add your content in the prompt box to continue.');

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <ScreenHeader title="AiPPT" showLogo rightIcon="menu" onRightPress={() => Alert.alert('Menu', 'Menu coming soon.')} />
        <View style={styles.pad}>
          <SegmentedPill<CreateMode>
            options={[{ label: 'Agent', value: 'agent' }, { label: 'Classic', value: 'classic' }]}
            value={mode}
            onChange={setMode}
          />
          <View style={{ height: 16 }} />
          <PromptCard mode={mode} onSend={onSend} />
          <View style={{ height: 20 }} />
          <UnderlineTabs<SkillTab>
            options={[{ label: 'Recommended Skills', value: 'recommended' }, { label: 'My Skills', value: 'mine' }]}
            value={tab}
            onChange={setTab}
          />
          <View style={styles.grid}>
            {loadingSkills
              ? [0, 1, 2, 3].map((i) => <SkillCardSkeleton key={i} width={colWidth} />)
              : skills.map((s) => <SkillCard key={s.id} skill={s} width={colWidth} onApply={onApply} />)}
          </View>
          {!loadingSkills && skills.length === 0 && <EmptyState title="No skills yet" />}
        </View>
      </ScrollView>
      <UpgradeBanner onPress={() => navigation.navigate('PremiumModal')} />
      <GeneratingOverlay visible={generating} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.surface },
  content: { paddingBottom: 16 },
  pad: { paddingHorizontal: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 16 },
});

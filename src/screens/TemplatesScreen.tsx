import React, { useMemo, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenHeader } from '../components/ui/ScreenHeader';
import { FilterDrawer, FilterState } from '../components/FilterDrawer';
import { SlideCover } from '../components/SlideCover';
import { EmptyState } from '../components/mascot/EmptyState';
import { useGridWidth } from '../hooks/useGridWidth';
import { filterColors, filterScenes, filterStyles, templates } from '../data/mock';
import { Template } from '../types';
import { colors } from '../theme';

export function TemplatesScreen() {
  const colWidth = useGridWidth(2, 16, 12);
  const [filters, setFilters] = useState<FilterState>({ style: null, scene: null, color: null });

  const data = useMemo(
    () =>
      templates.filter(
        (t) => (!filters.style || t.style === filters.style) && (!filters.scene || t.scene === filters.scene) && (!filters.color || t.color === filters.color),
      ),
    [filters],
  );

  const onUse = (t: Template) => Alert.alert(t.title, 'Template selected. Opening editor…');

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="Templates" rightIcon="search" />
      <FlatList
        data={data}
        keyExtractor={(t) => t.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 12, paddingHorizontal: 16 }}
        contentContainerStyle={{ gap: 12, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <FilterDrawer styles={filterStyles} scenes={filterScenes} swatches={filterColors} value={filters} onChange={setFilters} />
            <Text style={styles.count}>{data.length} templates</Text>
          </View>
        }
        ListEmptyComponent={
          <EmptyState title="No matches" subtitle="Try removing a filter." actionLabel="Clear filters" onAction={() => setFilters({ style: null, scene: null, color: null })} />
        }
        renderItem={({ item }) => <SlideCover template={item} width={colWidth} onUse={onUse} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.surface },
  header: { paddingHorizontal: 16, paddingBottom: 4, gap: 12 },
  count: { fontSize: 13, color: colors.textMuted },
});

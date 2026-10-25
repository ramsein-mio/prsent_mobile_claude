import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Project } from '../types';
import { initialProjects } from '../data/mock';

type Ctx = {
  projects: Project[];
  addProject: (title: string) => void;
  removeProject: (id: string) => void;
};

const ProjectsContext = createContext<Ctx | null>(null);

const palette: [string, string][] = [
  ['#7C3AED', '#C084FC'],
  ['#0EA5E9', '#22C55E'],
  ['#F97316', '#DB2777'],
];

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const addProject = useCallback((title: string) => {
    const now = new Date();
    const editedAt = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    setProjects((prev) => [
      { id: `p${Date.now()}`, title, editedAt, colors: palette[prev.length % palette.length] },
      ...prev,
    ]);
  }, []);

  const removeProject = useCallback((id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const value = useMemo(() => ({ projects, addProject, removeProject }), [projects, addProject, removeProject]);
  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
}

export function useProjects() {
  const ctx = useContext(ProjectsContext);
  if (!ctx) throw new Error('useProjects must be used inside ProjectsProvider');
  return ctx;
}

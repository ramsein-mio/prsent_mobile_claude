import { CreditPack, Language, Project, Skill, Template } from '../types';

export const recommendedSkills: Skill[] = [
  { id: 's1', title: 'Document to PPT', icon: 'document-text', colors: ['#1E3A8A', '#7C3AED'] },
  { id: 's2', title: 'Text to PPT', icon: 'text', colors: ['#F59E0B', '#EF4444'] },
  { id: 's3', title: 'Image to PPT', icon: 'image', colors: ['#06B6D4', '#3B82F6'] },
  { id: 's4', title: 'Web Page to PPT', icon: 'globe', colors: ['#10B981', '#0EA5E9'] },
  { id: 's5', title: 'Outline to PPT', icon: 'list', colors: ['#C084FC', '#7C3AED'] },
  { id: 's6', title: 'Pitch Deck', icon: 'rocket', colors: ['#F97316', '#DB2777'] },
];

export const mySkills: Skill[] = [
  { id: 'm1', title: 'Weekly Report', icon: 'calendar', colors: ['#6D28D9', '#C084FC'] },
  { id: 'm2', title: 'Lesson Plan', icon: 'school', colors: ['#0EA5E9', '#22C55E'] },
];

export const filterStyles = ['Business', 'Education', 'Creative', 'Minimal', 'Tech'];
export const filterScenes = ['Pitch', 'Report', 'Class', 'Marketing', 'Portfolio'];
export const filterColors = ['#7C3AED', '#EF4444', '#F97316', '#FACC15', '#22C55E', '#06B6D4', '#3B82F6', '#C084FC'];

export const templates: Template[] = [
  { id: 't1', title: 'Corporate Pitch Deck', style: 'Business', scene: 'Pitch', color: '#7C3AED' },
  { id: 't2', title: 'Quarterly Report', style: 'Business', scene: 'Report', color: '#3B82F6' },
  { id: 't3', title: 'Classroom Science', style: 'Education', scene: 'Class', color: '#22C55E' },
  { id: 't4', title: 'Creative Portfolio', style: 'Creative', scene: 'Portfolio', color: '#F97316' },
  { id: 't5', title: 'Product Launch', style: 'Tech', scene: 'Marketing', color: '#06B6D4' },
  { id: 't6', title: 'Minimal Story', style: 'Minimal', scene: 'Pitch', color: '#C084FC' },
  { id: 't7', title: 'Lesson Plan', style: 'Education', scene: 'Class', color: '#FACC15' },
  { id: 't8', title: 'Brand Campaign', style: 'Creative', scene: 'Marketing', color: '#EF4444' },
];

export const initialProjects: Project[] = [
  { id: 'p1', title: 'Corporate Pitch Deck', editedAt: 'Sep 20', colors: ['#44403C', '#A8A29E'] },
  { id: 'p2', title: 'Q3 Marketing Review', editedAt: 'Sep 14', colors: ['#7C3AED', '#C084FC'] },
  { id: 'p3', title: 'Biology Chapter 4', editedAt: 'Aug 30', colors: ['#16A34A', '#86EFAC'] },
];

export const creditPacks: CreditPack[] = [
  { id: 'c1', credits: 100, price: '$1.99' },
  { id: 'c2', credits: 500, price: '$7.99' },
  { id: 'c3', credits: 1100, price: '$14.99' },
  { id: 'c4', credits: 3000, price: '$34.99' },
];

export const languages: Language[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'zh', label: 'Chinese', native: '中文' },
  { code: 'es', label: 'Spanish', native: 'Español' },
  { code: 'fa', label: 'Persian', native: 'فارسی' },
  { code: 'ar', label: 'Arabic', native: 'العربية' },
  { code: 'fr', label: 'French', native: 'Français' },
  { code: 'de', label: 'German', native: 'Deutsch' },
  { code: 'ja', label: 'Japanese', native: '日本語' },
];

export const benefits = {
  plus: ['Unlimited AI generation', 'HD exports', 'Remove watermark', '500 monthly credits'],
  pro: ['Everything in Plus', 'Pro model access', 'Priority generation queue', '2000 monthly credits', 'Brand kit & custom fonts'],
};

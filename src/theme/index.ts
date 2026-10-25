import { ViewStyle } from 'react-native';

export const colors = {
  primary: '#7C3AED',
  primaryLight: '#C084FC',
  primarySoft: '#F3E8FF',
  gold: '#D97706',
  orange: '#F97316',
  surface: '#F4F4F5',
  card: '#FFFFFF',
  text: '#18181B',
  textMuted: '#71717A',
  border: '#E4E4E7',
  danger: '#DC2626',
  success: '#16A34A',
};

export const radius = { sm: 8, md: 12, lg: 16, pill: 999 };
export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 };

export const shadow: ViewStyle = {
  shadowColor: '#18181B',
  shadowOpacity: 0.08,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 4 },
  elevation: 3,
};

export const type = {
  title: { fontSize: 24, fontWeight: '800' as const, color: colors.text },
  heading: { fontSize: 18, fontWeight: '700' as const, color: colors.text },
  body: { fontSize: 15, color: colors.text },
  caption: { fontSize: 12, color: colors.textMuted },
};

import { useWindowDimensions } from 'react-native';

/** Width of one column in an N-column grid with horizontal padding and gap. */
export function useGridWidth(columns = 2, padding = 16, gap = 12) {
  const { width } = useWindowDimensions();
  return (width - padding * 2 - gap * (columns - 1)) / columns;
}

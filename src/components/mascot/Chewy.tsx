import React from 'react';
import Svg, { Circle, Ellipse, G, Line, Path } from 'react-native-svg';

export type ChewyPose = 'idle' | 'search' | 'wizard';

type Props = { pose?: ChewyPose; size?: number };

const GREEN = '#6DBE5B';
const DARK = '#4E9A43';
const BELLY = '#E3F2B0';

/** Chewy, the baby alligator. Drawn with react-native-svg so it scales crisply. */
export function Chewy({ pose = 'idle', size = 160 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      {/* ground shadow */}
      <Ellipse cx="100" cy="190" rx="52" ry="7" fill="#18181B" opacity={0.08} />

      {/* tail */}
      <Path d="M64 158 C34 170 14 150 8 128 C26 138 42 134 64 124 Z" fill={GREEN} />
      <Path d="M20 140 l-4 -9 l9 4 Z M34 148 l-3 -9 l9 3 Z" fill={DARK} />

      {/* feet */}
      <Ellipse cx="82" cy="182" rx="15" ry="8" fill={DARK} />
      <Ellipse cx="120" cy="182" rx="15" ry="8" fill={DARK} />

      {/* body + belly */}
      <Ellipse cx="100" cy="142" rx="38" ry="44" fill={GREEN} />
      <Ellipse cx="104" cy="150" rx="22" ry="31" fill={BELLY} />

      {/* back spikes */}
      <Path d="M63 116 l-9 -9 l13 -1 Z M61 136 l-10 -7 l14 -2 Z M63 156 l-10 -6 l14 -3 Z" fill={DARK} />

      {/* left arm (viewer's left) */}
      <Ellipse cx="66" cy="144" rx="8" ry="13" fill={DARK} transform="rotate(12 66 144)" />

      {/* head */}
      <Ellipse cx="98" cy="80" rx="42" ry="35" fill={GREEN} />
      {/* snout */}
      <Path d="M112 76 Q172 66 174 90 Q172 110 112 106 Z" fill={GREEN} />
      <Path d="M118 96 Q146 104 170 94" stroke={DARK} strokeWidth={3} fill="none" strokeLinecap="round" />
      <Path d="M130 98 l3 6 l3 -5 Z M148 98 l3 6 l3 -6 Z" fill="#FFFFFF" />
      <Circle cx="160" cy="80" r="2.6" fill={DARK} />
      {/* brow spikes */}
      <Path d="M70 52 l6 -12 l7 11 Z M88 46 l7 -12 l7 12 Z" fill={DARK} />
      {/* eye */}
      <Circle cx="102" cy="68" r="12" fill="#FFFFFF" />
      <Circle cx="105" cy="69" r="6" fill="#18181B" />
      <Circle cx="107" cy="66" r="2" fill="#FFFFFF" />
      {/* cheek */}
      <Circle cx="92" cy="94" r="7" fill="#F97316" opacity={0.35} />

      {pose === 'idle' && <Ellipse cx="136" cy="140" rx="8" ry="13" fill={DARK} transform="rotate(-12 136 140)" />}

      {pose === 'search' && (
        <G>
          {/* raised right arm holding magnifier */}
          <Path d="M130 150 Q148 144 152 124" stroke={DARK} strokeWidth={14} strokeLinecap="round" fill="none" />
          <Line x1="156" y1="132" x2="146" y2="152" stroke="#8B5E34" strokeWidth={6} strokeLinecap="round" />
          <Circle cx="158" cy="116" r="20" fill="#BFDBFE" opacity={0.7} />
          <Circle cx="158" cy="116" r="20" fill="none" stroke="#3B82F6" strokeWidth={5} />
          <Path d="M148 110 Q152 103 160 103" stroke="#FFFFFF" strokeWidth={3} fill="none" strokeLinecap="round" />
        </G>
      )}

      {pose === 'wizard' && (
        <G>
          {/* hat */}
          <Path d="M52 56 Q100 44 146 56 Q130 60 100 60 Q72 60 52 56 Z" fill="#5B21B6" />
          <Path d="M72 54 L102 6 L124 54 Z" fill="#7C3AED" />
          <Path d="M78 46 Q100 52 120 46 L118 54 Q100 58 80 54 Z" fill="#C084FC" />
          <Path d="M101 20 l3 6 l6 1 l-4 4 l1 6 l-6 -3 l-6 3 l1 -6 l-4 -4 l6 -1 Z" fill="#FACC15" />
          {/* wand arm */}
          <Path d="M130 152 Q150 148 156 130" stroke={DARK} strokeWidth={14} strokeLinecap="round" fill="none" />
          <Line x1="156" y1="132" x2="176" y2="104" stroke="#18181B" strokeWidth={4} strokeLinecap="round" />
          <Path d="M178 90 l4 9 l9 2 l-7 6 l2 9 l-8 -5 l-8 5 l2 -9 l-7 -6 l9 -2 Z" fill="#FACC15" />
        </G>
      )}
    </Svg>
  );
}

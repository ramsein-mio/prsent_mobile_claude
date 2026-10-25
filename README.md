# AiPPT (clone) – Expo + React Native + TypeScript

## Run
```bash
npm install
npx expo install --fix   # aligns package versions with your installed Expo SDK
npx expo start
```

## Structure
```
App.tsx
src/
  theme/            colors, radius, shadow, type scale
  types/            shared TS types
  data/mock.ts      skills, templates, projects, languages, credit packs
  context/          ProjectsContext (Works state shared with Create)
  hooks/            useGridWidth
  navigation/       RootNavigator (stack + Premium modal), TabNavigator (5 tabs + Account stack)
  components/
    ui/             Button, Card, Chip, CornerBadge, SegmentedPill, UnderlineTabs,
                    BottomSheet, ScreenHeader, Skeleton
    mascot/         Chewy (SVG, poses: idle/search/wizard), EmptyState, LoadingState
    ...             PromptCard, SkillCard, UpgradeBanner, FilterDrawer, SlideCover,
                    ProjectCard, DeleteSheet, PricingCard, BenefitsCard,
                    SettingsList, PlanCarousel, GeneratingOverlay
  screens/          Create, Templates, Premium, Works, account/{Account,Credits,Language}
```

## Notes
- Styling uses plain StyleSheet (no NativeWind config needed).
- Chewy is drawn with react-native-svg. Swap `Chewy.tsx` for your final illustration assets when ready.
- Prices, user ID and purchase flows are mock; wire to RevenueCat/StoreKit/Billing and your backend.

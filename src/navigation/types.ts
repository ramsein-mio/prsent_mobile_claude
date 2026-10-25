import { NavigatorScreenParams } from '@react-navigation/native';

export type AccountStackParamList = {
  AccountHome: undefined;
  Credits: undefined;
  Language: undefined;
};

export type TabParamList = {
  Create: undefined;
  Templates: undefined;
  Premium: undefined;
  Works: undefined;
  Account: NavigatorScreenParams<AccountStackParamList> | undefined;
};

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  PremiumModal: undefined;
};

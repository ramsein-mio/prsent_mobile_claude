export type Skill = { id: string; title: string; icon: string; colors: [string, string] };

export type Template = {
  id: string;
  title: string;
  style: string;
  scene: string;
  color: string;
};

export type Project = { id: string; title: string; editedAt: string; colors: [string, string] };

export type PlanTier = 'plus' | 'pro';
export type BillingPlan = 'yearly' | 'lifetime';
export type ModelTier = 'Lite' | 'Pro';
export type CreateMode = 'agent' | 'classic';

export type CreditPack = { id: string; credits: number; price: string };
export type Language = { code: string; label: string; native: string };

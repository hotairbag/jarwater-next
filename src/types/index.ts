export interface Project {
  id: string;
  title: string;
  category: 'Explainer' | 'Commercial' | 'Brand Film' | '3D Motion';
  image: string;
  description: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

export const BUDGET_RANGES = [
  "Select a range",
  "$5k - $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k+",
  "Retainer / Ongoing"
];

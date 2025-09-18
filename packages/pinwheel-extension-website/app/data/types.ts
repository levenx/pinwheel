// Feature card type
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

// FAQ item type
export interface FAQItem {
  question: string;
  answer: string;
}

// Quick start guide step type
export interface QuickStartStep {
  step: number;
  title: string;
  description: string;
}

// Keyboard shortcut type
export interface KeyboardShortcut {
  shortcut: string;
  description: string;
}

// Advanced feature type
export interface AdvancedFeature {
  title: string;
  description: string;
  steps: string[];
}

// Usage guide type
export interface UsageGuide {
  quickStart: QuickStartStep[];
  keyboardShortcuts: KeyboardShortcut[];
  advancedFeatures: AdvancedFeature[];
}

// User testimonial type
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

// Update log type
export interface UpdateLog {
  version: string;
  date: string;
  changes: string[];
}

// Blog post type
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}
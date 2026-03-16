export type SceneType = "technical" | "interpersonal" | "strategic" | "execution";
export type Complexity = "simple" | "complex" | "chaotic";
export type Impact = "low" | "medium" | "high";

export interface Scene {
  type: SceneType;
  complexity: Complexity;
  impact: Impact;
}

export type Framework = "four-questions" | "six-dimensions" | "nine-masters";
export type OutputFormat = "markdown" | "json";

export interface FourQuestionsAnalysis {
  whatMatters: string;
  howToBreakdown: string;
  missingPerspectives: string[];
  nextActions: string[];
}

export interface SixDimensionsAnalysis {
  core: {
    essence: string;
    contradiction: string;
    keyTwenty: string;
  };
  breakdown: string;
  perspectives: string[];
  synthesis: string;
  priority: string[];
}

export interface SixHatsAnalysis {
  white: string;
  red: string;
  black: string;
  yellow: string;
  green: string;
  blue: string;
}

export interface PriorityMatrix {
  urgent_important: string[];
  important_not_urgent: string[];
  urgent_not_important: string[];
  neither: string[];
}

export interface NineMastersAnalysis {
  essence: string;
  contradiction: string;
  keyTwenty: string;
  structure: string;
  rootCause: string;
  sixHats: SixHatsAnalysis;
  mentalModels: string[];
  synthesis: string;
  priority: PriorityMatrix;
}

export type ReviewAnalysis =
  | FourQuestionsAnalysis
  | SixDimensionsAnalysis
  | NineMastersAnalysis;

export interface ReviewOptions {
  framework?: Framework;
  format?: OutputFormat;
}

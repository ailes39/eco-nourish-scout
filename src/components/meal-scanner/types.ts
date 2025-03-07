
export interface ScanResultsData {
  food: string;
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
  sustainability: {
    score: number;
    footprint: string;
    suggestions: string[];
  };
  ingredients: string[];
}

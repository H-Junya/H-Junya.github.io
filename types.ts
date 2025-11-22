export enum Category {
  ARCHITECTURE = 'Architectural Works',
  MICRO_CONSTRUCTION = 'Micro-Construction Works'
}

export interface Work {
  id: string;
  title: string;
  category: Category;
  description: string;
  imageUrl: string;
  date: string;
}

export interface ReadmeData {
  markdown: string;
  isLoading: boolean;
  error: string | null;
}
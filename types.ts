export enum Category {
  ARCHITECTURE = 'ARCHITECTURE',
  MICRO_CONSTRUCTION = 'MICRO_CONSTRUCTION', // 微筑
}

export interface Project {
  id: string;
  title: string;
  year: string;
  category: Category;
  imageUrl: string;
  description?: string;
}

export type FilterType = Category | 'ALL';

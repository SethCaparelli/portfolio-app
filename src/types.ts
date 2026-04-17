export type CategoryKey =
  | 'app'
  | 'cactus'
  | 'tree'
  | 'sculpture'
  | 'vessel'
  | 'painting'
  | 'advertising'
  | 'design';

export interface AppWork {
  kind: 'app';
  name: string;
  description: string;
  technologies: string[];
  url: string;
  code: string;
  site?: string;
}

export interface ImageWork {
  kind: 'image';
  url: string;
  name?: string;
  caption?: string;
}

export type Work = AppWork | ImageWork;

export interface Category {
  key: CategoryKey;
  title: string;
  works: Work[];
}

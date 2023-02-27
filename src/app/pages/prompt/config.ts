export type TMethodOfDrawing = 'any' | 'pencil' | 'painting' | 'digital';
export type TDifficulty = 'easy' | 'medium' | 'hard';
export type TTime = 'timed' | 'unlimited';
export type TInterval = '0' | '5 min' | '10 min' | '30 min' | '1 hr';
export type TPromptType = 'story' | 'categories';
export type TCategories = 'style' | 'inspiration' | 'focus' | 'color palette';

export interface IPromptConfig {
  methodOfDrawing: {
    title: string;
    options: TMethodOfDrawing[];
  };
  difficulty: {
    title: string;
    options: TDifficulty[];
  };
  time: {
    title: string;
    options: TTime[];
  };
  interval: {
    title: string;
    options: TInterval[];
  };
  promptType: {
    title: string;
    options: TPromptType[];
  };
  categories: {
    title: string;
    options: TCategories[];
  };
}

export const PromptConfig: IPromptConfig = {
  methodOfDrawing: {
    title: 'Method of drawing',
    options: ['any', 'pencil', 'painting', 'digital'],
  },
  difficulty: {
    title: 'Difficulty',
    options: ['easy', 'medium', 'hard'],
  },
  time: {
    title: 'Time',
    options: ['timed', 'unlimited'],
  },
  interval: {
    title: 'Interval',
    options: ['5 min', '10 min', '30 min', '1 hr'],
  },
  promptType: {
    title: 'Prompt Type',
    options: ['story', 'categories'],
  },
  categories: {
    title: 'Categories',
    options: ['style', 'inspiration', 'focus', 'color palette'],
  },
};

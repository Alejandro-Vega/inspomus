import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  TCategories,
  TDifficulty,
  TInterval,
  TMethodOfDrawing,
  TPromptType,
  TTime,
} from 'app/pages/prompt/config';

type TConfigState = {
  methodOfDrawing: TMethodOfDrawing;
  difficulty: TDifficulty;
  time: TTime;
  interval: TInterval;
  promptType: TPromptType;
  categories: TCategories[];
};

const initialState: TConfigState = {
  methodOfDrawing: 'any',
  difficulty: 'easy',
  time: 'timed',
  interval: '5 min',
  promptType: 'story',
  categories: ['style', 'inspiration', 'focus', 'color palette'],
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setMethodOfDrawing: (state, action: PayloadAction<TMethodOfDrawing>) => {
      state.methodOfDrawing = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<TDifficulty>) => {
      state.difficulty = action.payload;
    },
    setTime: (state, action: PayloadAction<TTime>) => {
      state.time = action.payload;
      state.interval = action.payload === 'unlimited' ? '0' : initialState.interval;
    },
    setInterval: (state, action: PayloadAction<TInterval>) => {
      state.interval = action.payload;
    },
    setPromptType: (state, action: PayloadAction<TPromptType>) => {
      state.promptType = action.payload;
      state.categories = action.payload === 'story' ? [] : initialState.categories;
    },
    setCategories: (state, action: PayloadAction<TCategories[]>) => {
      state.categories = action.payload;
    },
  },
});

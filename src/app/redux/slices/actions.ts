import { createAction } from '@reduxjs/toolkit';
import {
  TCategories,
  TDifficulty,
  TInterval,
  TMethodOfDrawing,
  TPromptType,
  TTime,
} from 'app/pages/prompt/config';

export const setMethodOfDrawing = createAction<TMethodOfDrawing>('config/setMethodOfDrawing');
export const setDifficulty = createAction<TDifficulty>('config/setDifficulty');
export const setTime = createAction<TTime>('config/setTime');
export const setInterval = createAction<TInterval>('config/setInterval');
export const setPromptType = createAction<TPromptType>('config/setPromptType');
export const setCategories = createAction<TCategories[]>('config/setCategories');

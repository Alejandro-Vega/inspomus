import { useReducer } from 'react';
import {
  TCategories,
  TDifficulty,
  TInterval,
  TMethodOfDrawing,
  TPromptType,
  TTime,
} from '../config';

export type TState = {
  methodOfDrawing: TMethodOfDrawing;
  difficulty: TDifficulty;
  time: TTime;
  interval: TInterval;
  promptType: TPromptType;
  categories: TCategories[];
};

export type TAction =
  | { type: 'SET_METHOD_OF_DRAWING'; payload: TMethodOfDrawing }
  | { type: 'SET_DIFFICULTY'; payload: TDifficulty }
  | { type: 'SET_TIME'; payload: TTime }
  | { type: 'SET_PROMPT_TYPE'; payload: TPromptType }
  | { type: 'SET_INTERVAL'; payload: TInterval }
  | { type: 'SET_CATEGORIES'; payload: TCategories[] };

const initialState: TState = {
  methodOfDrawing: 'any',
  difficulty: 'easy',
  time: 'timed',
  interval: '5 min',
  promptType: 'story',
  categories: ['style', 'inspiration', 'focus', 'color palette'],
};

const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'SET_METHOD_OF_DRAWING':
      return {
        ...state,
        methodOfDrawing: action.payload,
      };
    case 'SET_DIFFICULTY':
      return {
        ...state,
        difficulty: action.payload,
      };
    case 'SET_TIME':
      return {
        ...state,
        time: action.payload,
        ...(action.payload === 'unlimited'
          ? { interval: '0' }
          : { interval: initialState.interval }),
      };
    case 'SET_INTERVAL':
      return {
        ...state,
        interval: action.payload,
      };
    case 'SET_PROMPT_TYPE':
      return {
        ...state,
        promptType: action.payload,
        ...(action.payload === 'story'
          ? { categories: [] }
          : { categories: initialState.categories }),
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

const useConfig = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setMethodOfDrawing = (methodOfDrawing: TMethodOfDrawing) => {
    dispatch({ type: 'SET_METHOD_OF_DRAWING', payload: methodOfDrawing });
  };

  const setDifficulty = (difficulty: TDifficulty) => {
    dispatch({ type: 'SET_DIFFICULTY', payload: difficulty });
  };

  const setTime = (time: TTime) => {
    dispatch({ type: 'SET_TIME', payload: time });
  };

  const setInterval = (interval: TInterval) => {
    dispatch({ type: 'SET_INTERVAL', payload: interval });
  };

  const setPromptType = (promptType: TPromptType) => {
    dispatch({ type: 'SET_PROMPT_TYPE', payload: promptType });
  };

  const setCategories = (categories: TCategories[]) => {
    dispatch({ type: 'SET_CATEGORIES', payload: categories });
  };

  return {
    state,
    setMethodOfDrawing,
    setDifficulty,
    setTime,
    setInterval,
    setPromptType,
    setCategories,
  };
};

export default useConfig;

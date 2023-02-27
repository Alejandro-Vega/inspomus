import { combineReducers } from '@reduxjs/toolkit';
import { configSlice } from 'app/redux/slices/configSlice';

const rootReducer = combineReducers({
  config: configSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

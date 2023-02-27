import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'app/redux/slices';

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postReducer from './component/PostSlice'
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    // counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

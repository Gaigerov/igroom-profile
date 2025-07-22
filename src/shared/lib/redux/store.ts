// shared/lib/redux/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import profileReducer, { ProfileState } from '@/features/profile/api/profileSlice';

export interface RootState {
  profile: ProfileState;
}

const rootReducer = combineReducers({
  profile: profileReducer,
});

export const makeStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];

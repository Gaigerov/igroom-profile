import {configureStore} from '@reduxjs/toolkit';
import profileReducer, {ProfileState} from '@/features/profile/api/profileSlice';

export interface RootState {
    profile: ProfileState;
}

export const makeStore = (preloadedState?: RootState) => {
    return configureStore({
        reducer: {
            profile: profileReducer
        },
        preloadedState: preloadedState ? preloadedState : undefined,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false
            })
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];

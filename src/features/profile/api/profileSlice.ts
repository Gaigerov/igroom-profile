import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '@/entities/user/model/types';

export interface ProfileState {
    data: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: ProfileState = {
    data: null,
    loading: false,
    error: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        fetchProfileStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchProfileSuccess(state, action: PayloadAction<User>) {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchProfileFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchProfileStart,
    fetchProfileSuccess,
    fetchProfileFailure
} = profileSlice.actions;

export default profileSlice.reducer;

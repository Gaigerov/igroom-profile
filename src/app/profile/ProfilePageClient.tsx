'use client';

import {useEffect} from 'react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {makeStore, AppStore, RootState} from '@/shared/lib/redux/store';
import {useAppDispatch, useAppSelector} from '@/shared/lib/redux/hooks';
import {fetchProfileClient} from '@/entities/user/api/profileApi';
import {
    fetchProfileStart,
    fetchProfileSuccess,
    fetchProfileFailure
} from '@/features/profile/api/profileSlice';
import Header from '@/widgets/Header/Header';
import Footer from '@/widgets/Footer/Footer';
import ProfileInfo from '@/widgets/ProfileInfo/ProfileInfo';

const queryClient = new QueryClient();

interface ProfilePageClientProps {
    initialState?: RootState;
}

export default function ProfilePageClient({initialState}: ProfilePageClientProps) {

    const store: AppStore = makeStore(initialState);

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ProfileContent />
            </QueryClientProvider>
        </Provider>
    );
}

function ProfileContent() {
    const dispatch = useAppDispatch();
    const {data} = useAppSelector(state => state.profile);

    useEffect(() => {
        if (!data) {
            const loadProfile = async () => {
                try {
                    dispatch(fetchProfileStart());
                    const profileData = await fetchProfileClient();
                    dispatch(fetchProfileSuccess(profileData));
                } catch (err) {
                    const message = err instanceof Error ? err.message : 'Unknown error';
                    dispatch(fetchProfileFailure(message));
                }
            };

            loadProfile();
        }
    }, [data, dispatch]);

    return (
        <div className="max-w-md mx-auto pb-16 bg-gray-50 min-h-screen">
            <Header />
            <ProfileInfo />
            <Footer />
        </div>
    );
}

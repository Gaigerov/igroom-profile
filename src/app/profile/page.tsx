import {makeStore} from '@/shared/lib/redux/store';
import {fetchProfileServer} from '@/entities/user/api/serverApi';
import ProfilePageClient from './ProfilePageClient';
import {fetchProfileSuccess} from '@/features/profile/api/profileSlice';
import {mockProfile} from '@/src/entities/user/model/mocks';

export default async function ProfilePage() {
    const store = makeStore();

    try {
        const profileData = await fetchProfileServer();
        store.dispatch(fetchProfileSuccess(profileData));
    } catch (error) {
        console.error('Error in server-side profile loading:', error);
        store.dispatch(fetchProfileSuccess(mockProfile));
    }

    return <ProfilePageClient initialState={store.getState()} />;
}
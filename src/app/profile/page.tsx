import {makeStore} from '@/shared/lib/redux/store';
import {fetchProfileServer} from '@/entities/user/api/serverApi';
import ProfilePageClient from './ProfilePageClient';

export default async function ProfilePage() {
    try {
        const profileData = await fetchProfileServer();
        const store = makeStore();

        store.dispatch({
            type: 'profile/fetchProfileSuccess',
            payload: profileData
        });

        const initialState = store.getState();

        return <ProfilePageClient initialState={initialState} />;
    } catch (error) {
        console.error('Error in server-side profile loading:', error);

        return <ProfilePageClient />;
    }
}
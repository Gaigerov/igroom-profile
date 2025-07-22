
import {mockProfile} from '../model/mocks';
import {User} from '../model/types';


interface ApiResponse {
    data: {
        id: string;
        avatar_url?: string;
        name: string;
        nickname: string;
        about?: string;
        telegram?: string;
        city?: {
            name?: string;
        };
        calling_limit?: number;
        going_limit?: number;
        points?: number;
    };
}

export const fetchProfileServer = async (): Promise<User> => {
    try {
        const response = await fetch(
            'https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591'
        );

        if (!response.ok) throw new Error('Failed to fetch profile');

        const data: ApiResponse = await response.json();

        return {
            id: data.data.id,
            avatarUrl: data.data.avatar_url || '/icons/avatar.png',
            name: data.data.name,
            username: `@${data.data.nickname}`,
            city: data.data.city?.name || 'Город не указан',
            description: data.data.about || '',
            telegram: data.data.telegram || '',
            stats: {
                months: data.data.calling_limit || 0,
                meets: data.data.going_limit || 0,
                rumers: data.data.points || 0,
            },
        };
    } catch (error) {
        console.error('Server fetch failed, using mock data', error);
        return mockProfile;
    }
};

import axios from 'axios';
import {User} from '../model/types';
import {mockProfile} from '../model/mocks';

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

export const fetchProfileClient = async (): Promise<User> => {
    try {
        const response = await axios.get<ApiResponse>(
            'https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591'
        );

        return {
            id: response.data.data.id,
            avatarUrl: response.data.data.avatar_url
                ? response.data.data.avatar_url.replace('.svg', '.png')
                : '/icons/avatar_publicuser.png',
            name: response.data.data.name,
            username: `@${response.data.data.nickname}`,
            city: response.data.data.city?.name || 'Город не указан',
            description: response.data.data.about || '',
            telegram: response.data.data.telegram || '',
            stats: {
                months: response.data.data.calling_limit || 0,
                meets: response.data.data.going_limit || 0,
                rumers: response.data.data.points || 0,
            },
        };
    } catch (error) {
        console.error('API request failed, using mock data', error);
        return mockProfile;
    }
};

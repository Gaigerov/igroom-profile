import axios from 'axios';
import {User} from '../model/types';
import {mockProfile} from '../model/mocks';

export const fetchProfileServer = async (): Promise<User> => {
    try {
        const response = await axios.get(
            'https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591',
            {
                timeout: 5000,
                headers: {
                    'User-Agent': 'IgroomProfileApp/1.0',
                    'Accept': 'application/json'
                }
            }
        );

        return {
            id: response.data.data.id,
            avatarUrl: response.data.data.avatar_url || '/icons/avatar_publicuser.png',
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
        console.error('Failed to fetch profile from server, using mock data', error);
        return mockProfile;
    }
};

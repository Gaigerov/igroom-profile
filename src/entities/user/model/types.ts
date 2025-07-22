export type UserStats = {
    months: number;
    meets: number;
    rumers: number;
};

export interface User {
    id: string;
    avatarUrl?: string;
    name: string;
    username: string;
    city: string;
    description: string;
    telegram: string;
    stats: {
        months: number;
        meets: number;
        rumers: number;
    };
}


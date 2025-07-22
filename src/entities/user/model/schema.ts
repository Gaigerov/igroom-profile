import {z} from 'zod';

export const UserStatsSchema = z.object({
    months: z.number(),
    meets: z.number(),
    rumers: z.number()
});

export const UserSchema = z.object({
    id: z.string(),
    avatarUrl: z.string(),
    name: z.string(),
    username: z.string(),
    city: z.string(),
    description: z.string(),
    telegram: z.string(),
    stats: UserStatsSchema
});

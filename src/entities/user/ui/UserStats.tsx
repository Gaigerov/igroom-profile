import React from 'react';
import styles from './UserStats.module.scss';

interface UserStatsProps {
    stats: {
        months: number;
        meets: number;
        rumers: number;
    };
}

export const UserStats = ({stats}: UserStatsProps) => (
    <div className={styles.stats}>
        {[
            {value: stats.months + ' месяцев', label: 'в игруме'},
            {value: stats.meets, label: 'встреч'},
            {value: stats.rumers, label: 'румеров'},
        ].map((item, index) => (
            <div key={index} className={styles.statsItem}>
                <div className={styles.statsValue}>{item.value}</div>
                <div className={styles.statsLabel}>{item.label}</div>
            </div>
        ))}
    </div>
);

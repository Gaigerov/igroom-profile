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
            {value: stats.months, label: 'месяц в игре'},
            {value: stats.meets, label: 'встреч'},
            {value: stats.rumers, label: 'румеров'},
        ].map((item, index, array) => (
            <React.Fragment key={index}>
                <div className={styles.statsItem}>
                    <div className={styles.statsValue}>{item.value}</div>
                    <div className={styles.statsLabel}>{item.label}</div>
                </div>
                {index < array.length - 1 && <div className={styles.divider} />}
            </React.Fragment>
        ))}
    </div>
);

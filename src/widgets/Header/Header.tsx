'use client';

import React from 'react';
import Icon from '@/shared/ui/Icon/Icon';
import styles from './Header.module.scss';

const Header = () => (
    <header className={styles.header}>
        <span className={styles.title}>Профиль</span>
        <button className={styles.menuButton}>
            <Icon name="burger" className={styles.icon} />
        </button>
    </header>
);

export default Header;

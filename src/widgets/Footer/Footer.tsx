'use client';

import React from 'react';
import Icon from '@/shared/ui/Icon/Icon';
import styles from './Footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        {['heart', 'message', 'globe', 'ring', 'profile'].map((icon) => (
            <button key={icon} className={styles.iconButton}>
                <Icon name={icon} className={styles.icon} />
            </button>
        ))}
    </footer>
);

export default Footer;

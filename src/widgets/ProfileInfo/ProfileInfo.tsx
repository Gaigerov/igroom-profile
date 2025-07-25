/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import {useAppSelector} from '@/shared/lib/redux/hooks';
import Icon from '@/shared/ui/Icon/Icon';
import {UserStats} from '@/entities/user/ui/UserStats';
import styles from './ProfileInfo.module.scss';


const ProfileInfo = () => {
    const {data, loading, error} = useAppSelector(state => state.profile);
    const [avatarError, setAvatarError] = React.useState(false);
    if (!data && loading) {
        return <div>Загрузка...</div>;
    }

    if (!data) {
        return <div>Данные не загружены</div>;
    }

    const profileData = data;

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <Icon name="warning" className={styles.errorIcon} />
                <p className={styles.errorText}>{error}</p>
            </div>
        );
    }

    return (
        <div className={styles.profile}>
            {/* Шапка профиля */}
            <div className={styles.header}>
                <Icon name="chevronLeft" className={styles.icon} />
                <div className={styles.avatarContainer}>
                    <img
                        src={avatarError ? '/icons/avatar_publicuser.png' : profileData.avatarUrl}
                        alt="Аватар"
                        width={180}
                        height={180}
                        className={styles.avatar}
                        loading="eager"
                        onError={() => setAvatarError(true)}
                    />
                    <div className={styles.badge}>
                        <span>P</span>
                    </div>
                </div>

                <div className={styles.actions}>
                    <div className={styles.actionItem}>
                        <Icon name="send" className={styles.actionIcon} />
                    </div>
                    <div className={styles.actionItem}>
                        <Icon name="eye" className={styles.actionIcon} />
                        <span>Это я</span>
                    </div>
                    <div className={styles.actionItem}>
                        <Icon name="face" className={styles.actionIcon} />
                        <span>Котум</span>
                    </div>
                </div>
            </div>

            {/* Основная информация */}
            <div className={styles.mainInfo}>
                <h1 className={styles.name}>
                    <span className={styles.rumerLabel}>румер:</span>
                    <span className={styles.rumerName}>{profileData.name}</span>
                </h1>
                <div className={styles.metaInfo}>
                    <span className={styles.username}>{profileData.username}</span>
                    <span className={styles.time}>Вчера 18:00</span>
                </div>
            </div>

            {/* Статистика */}
            <UserStats stats={profileData.stats} />

            {/* Геолокация и действия */}
            <div className={styles.locationActions}>
                <button className={styles.locationButton}>
                    {profileData.city}
                </button>
                <button className={styles.editButton}>
                    <Icon name="settings" className={styles.editIcon} />
                    <span className={styles.editText}>РЕДАКТ</span>
                </button>
            </div>

            {/* Секции меню */}
            <div className={styles.accountSection}>
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionTitle}>
                        <div className={`${styles.bullet} ${styles.green}`} />
                        <span>ЗОВЫ</span>
                    </div>
                    <div className={styles.sectionRight}>
                        <span className={styles.countBadge}>2</span>
                        <Icon name="chevronDown" className={styles.chevronIcon} />
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionTitle}>
                        <div className={`${styles.bullet} ${styles.orange}`} />
                        <span>ИДУ</span>
                    </div>
                    <div className={styles.sectionRight}>
                        <span className={styles.countBadge}>2</span>
                        <Icon name="chevronDown" className={styles.chevronIcon} />
                    </div>
                </div>
            </div>

            {/* Игровые действия */}
            <div className={`${styles.accountSection} ${styles.gameActionsSection}`}>
                <div className={`${styles.menuItem} ${styles.gameCreate}`}>
                    <span>СОЗДАТЬ ИГРУМ</span>
                </div>
                <div className={styles.divider} />
                <div className={`${styles.menuItem}  ${styles.myGame}`}>
                    <span>МОИ ИГРУМЫ</span>
                </div>
            </div>

            {/* Истории встреч */}
            <div className={styles.accountSection}>
                <div className={styles.menuItem}>
                    <div className={styles.iconContainer}>
                        <Icon name="time" className={styles.menuIcon} />
                    </div>
                    <span>ИСТОРИИ ВСТРЕЧ</span>
                </div>
            </div>

            {/* Настройки аккаунта */}
            <div className={styles.accountSection}>
                <div className={styles.menuItem}>
                    <div className={styles.iconContainer}>
                        <Icon name="eyes" className={styles.menuIcon} />
                    </div>
                    <span>Публичный аккаунт</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.menuItem}>
                    <div className={styles.iconContainer}>
                        <Icon name="threeLines" className={styles.menuIcon} />
                    </div>
                    <span>Взрослый</span>
                </div>
            </div>

            {/* Меню профиля */}
            <div className={styles.accountSection}>
                <div className={styles.menuItem}>
                    <div className={styles.iconContainer}>
                        <Icon name="chevronOK" className={styles.menuIcon} />
                    </div>
                    <span>Мои подписки</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.menuItem}>
                    <div className={styles.iconContainer}>
                        <Icon name="blacklist" className={styles.menuIcon} />
                    </div>
                    <span>Черный список</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.menuItem}>
                    <div className={styles.iconContainer}>
                        <Icon name="flag" className={styles.menuIcon} />
                    </div>
                    <span>Закладки</span>
                </div>
            </div>

            {/* Описание и контакты */}
            <div className={styles.bioSection}>
                <div className={styles.descriptionContainer}>
                    <p className={styles.descriptionText}>{profileData.description}</p>
                    <Icon name="chevronRight" className={styles.bioIcon} />
                </div>
                <div className={styles.contactInfo}>
                    <span>Мой телеграмм</span>
                    <span className={styles.telegramLink}>
                        @{profileData.telegram}
                    </span>
                </div>
            </div>

            {/* Ссылки */}
            <div className={styles.accountSection}>
                {[
                    'Возможности ИГРУМА',
                    'Правила ИГРУМА',
                    'Инструкция РУМЕРА',
                    'Инструкция МАСТЕРА',
                    'Инструкция МЕСТА',
                    'Пользовательское соглашение',
                ].map((text, index, array) => (
                    <React.Fragment key={index}>
                        <div className={styles.menuItem}>
                            <div className={styles.greyBullet} />
                            <span>{text}</span>
                        </div>
                        {index < array.length - 1 && <div className={styles.divider} />}
                    </React.Fragment>
                ))}
            </div>

            {/* Выход */}
            <button className={styles.logoutButton}>
                <Icon name="exit" className={styles.logoutIcon} />
                <span>Выйти из профиля</span>
            </button>
        </div>
    );
};

export default ProfileInfo;

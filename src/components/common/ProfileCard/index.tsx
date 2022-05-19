import React from 'react';

import styles from './styles.module.css';

import profileModel from '../../../models/ProfileModel/ProfileModel';

const ProfileCard = () => {
    return (
        <div className={styles['user-container']}>
            <img className={styles['user-avatar']} src={profileModel.getImgUrl()} alt="User avatar" />

            <div className={styles['user-info']}>
                <span className={styles['username']}>{profileModel.getUsername()}</span>
                <span className={styles['user-email']}>{profileModel.getEmail()}</span>
            </div>
        </div>
    );
};

export default ProfileCard;

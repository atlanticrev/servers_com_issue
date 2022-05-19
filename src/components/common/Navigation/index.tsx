import React from 'react';

import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import Button from '../Button';

const Navigation = () => {
    return (
        <nav>
            <ul className={styles['list']}>
                <li className={styles['list-item']}>
                    <Link to="/">
                        <Button title="Feed" />
                    </Link>
                </li>
                <li className={styles['list-item']}>
                    <Link to="/profile">
                        <Button title="Profile" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

import React, { FC } from 'react';

import styles from './styles.module.css';

import { ButtonProps } from './types';

const Button: FC<ButtonProps> = (props) => {
    const { title, onClick } = props;

    return (
        <button className={styles['btn']} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;

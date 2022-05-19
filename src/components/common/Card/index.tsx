import React from 'react';

import styles from './styles.module.css';

import { CardProps } from './types';

const Card: React.FC<CardProps> = (props) => {
    const { orientation = 'vertical', children, className } = props;

    const cssClass = `
        ${styles['card']}
        ${orientation === 'vertical' ? styles['card_vertical'] : styles['card_horizontal']}
        ${className}
    `;

    return <div className={cssClass}>{children}</div>;
};

export default Card;

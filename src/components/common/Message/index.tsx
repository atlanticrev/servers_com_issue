import React, { ReactNode } from 'react';

import Card from '../Card';

import styles from './styles.module.css';

import { MessageProps } from './types';

const Message: React.FC<MessageProps> = (props) => {
    const { message } = props;

    return (
        <Card orientation="vertical" className={styles['message-container']}>
            <span className={styles['author-block']}>{message.getAuthor()}</span>
            <span className={styles['text-block']}>{message.getText()}</span>
            <span className={styles['date-block']}>
                {new Date(message.getModifiedDate()).toLocaleDateString('ru-RU')}
            </span>
        </Card>
    );
};

export default Message;

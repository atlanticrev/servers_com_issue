import React from 'react';

import Message from '../Message';

import styles from './styles.module.css';

import Index from '../../../models/MessageModel';
import { MessageListProps } from './types';

const MessageList = (props: MessageListProps) => {
    const { messages } = props;

    messages.sort((a, b) => new Date(b.getModifiedDate()).getTime() - new Date(a.getModifiedDate()).getTime());

    return (
        <ul className={styles['list']}>
            {messages.map((message: Index) => (
                <li className={styles['list-item']}>
                    <Message message={message} />
                </li>
            ))}
        </ul>
    );
};

export default MessageList;

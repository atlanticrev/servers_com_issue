import React from 'react';

import Message from '../Message';

import styles from './styles.module.css';

import Index from '../../../models/MessageModel';
import { MessageListProps } from './types';
import Card from '../Card';

const MessageList = (props: MessageListProps) => {
    const { messages, filterValue } = props;

    let filteredMessages = [...messages];
    if (filterValue) {
        filteredMessages = filteredMessages.filter(
            (message) => message.getAuthor().includes(filterValue) || message.getText().includes(filterValue)
        );
    }

    filteredMessages.sort((a, b) => new Date(b.getModifiedDate()).getTime() - new Date(a.getModifiedDate()).getTime());

    return (
        <ul className={styles['list']}>
            {filteredMessages.length > 0 ? (
                filteredMessages.map((message: Index) => (
                    <li className={styles['list-item']}>
                        <Message message={message} />
                    </li>
                ))
            ) : (
                <li className={styles['list-item']}>
                    <Card orientation="vertical">
                        <h3>Messages not found</h3>
                    </Card>
                </li>
            )}
        </ul>
    );
};

export default MessageList;

import React, { useState } from 'react';

import ModalContainer from './components/ModalContainer';
import Overlay from '../Overlay';
import TextareaWithCounter from '../TextareaWithCounter';
import Button from '../Button';

import styles from './styles.modules.css';

import profileModel from '../../../models/ProfileModel/ProfileModel';

import { NewMessageModalProps } from './types';

const NewMessageModal: React.FC<NewMessageModalProps> = (props) => {
    const { title = 'Modal title placeholder', isOpen, onClose, onApply } = props;

    const [message, setMessage] = useState('');

    const onMessageChange = (text: string) => {
        setMessage(text);
    };

    const onCloseClick = () => {
        setMessage('');

        onClose();
    };

    const onSaveClick = () => {
        if (message === '') {
            return;
        }

        onApply({
            author: profileModel.getUsername(),
            text: message,
            date: new Date().toISOString()
        });

        setMessage('');

        onClose();
    };

    return isOpen ? (
        <ModalContainer>
            <Overlay onClick={onClose}>
                <div className={styles['modal-container']}>
                    <div className={styles['modal-title']}>
                        <span>{title}</span>
                    </div>

                    <div className={styles['modal-content']}>
                        <TextareaWithCounter text={message} onChange={onMessageChange} maxLength={200} />
                    </div>

                    <div className={styles['modal-actions']}>
                        <Button title="Cancel" onClick={onCloseClick} />
                        <Button title="Save" onClick={onSaveClick} />
                    </div>
                </div>
            </Overlay>
        </ModalContainer>
    ) : null;
};

export default NewMessageModal;

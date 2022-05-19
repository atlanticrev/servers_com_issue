import React, { useEffect, useState } from 'react';

import MessageList from '../../common/MessageList';
import PageContainer from '../../common/PageContainer';
import Toolbar from '../../common/Toolbar';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal';

import profileModel from '../../../models/ProfileModel/ProfileModel';
import allMessagesCollection from '../../../models/AllMessagesCollection';
import useModelSubscription from '../../../models/hooks/useModelSubscription';

import { ApiMessage } from '../../../models/types';

const FEED_PAGE_NAME = 'Feed page';

const FeedPage = () => {
    useModelSubscription(allMessagesCollection, 'AllMessagesCollection.messagesUpdate');

    useEffect(() => {
        allMessagesCollection.requestMessages();
    }, []);

    const [isNewMessageModalOpen, setIsNewMessageModalOpen] = useState(false);

    const toggleNewMessageModal = () => {
        setIsNewMessageModalOpen((isNewMessageModalOpen) => !isNewMessageModalOpen);
    };

    const onSaveNewMessage = (message: ApiMessage) => {
        allMessagesCollection.addMessage(message);
        profileModel.addMessage(message);
    };

    const messages = allMessagesCollection.getMessages();

    return (
        <PageContainer title={FEED_PAGE_NAME}>
            <Toolbar>
                <Button title="Add new message" onClick={toggleNewMessageModal} />
            </Toolbar>

            <MessageList messages={messages} />

            <Modal
                title="Please, input message text"
                isOpen={isNewMessageModalOpen}
                onClose={toggleNewMessageModal}
                onApply={onSaveNewMessage}
            />
        </PageContainer>
    );
};

export default FeedPage;

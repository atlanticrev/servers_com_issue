import React, { useEffect, useState } from 'react';

import MessageList from '../../common/MessageList';
import PageContainer from '../../common/PageContainer';
import Toolbar from '../../common/Toolbar';
import Button from '../../common/Button';

import profileModel from '../../../models/ProfileModel/ProfileModel';
import allMessagesCollection from '../../../models/AllMessagesCollection';
import useModelSubscription from '../../../models/hooks/useModelSubscription';

import { ApiMessage } from '../../../models/types';
import NewMessageModal from '../../common/NewMessageModal';
import FilterPanel from '../../common/FilterPanel';

const FEED_PAGE_NAME = 'Feed page';

const FeedPage = () => {
    useModelSubscription(allMessagesCollection, 'AllMessagesCollection.messagesUpdate');

    useEffect(() => {
        allMessagesCollection.requestMessages();
    }, []);

    const [isNewMessageModalOpen, setIsNewMessageModalOpen] = useState(false);

    const [filterValue, setFilterValue] = useState('');

    const onFilterApplied = (filterValue: string) => {
        setFilterValue(filterValue);
    };

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

                <FilterPanel onFilterApplied={onFilterApplied} />
            </Toolbar>

            <MessageList messages={messages} filterValue={filterValue} />

            <NewMessageModal
                title="Please, input message text"
                isOpen={isNewMessageModalOpen}
                onClose={toggleNewMessageModal}
                onApply={onSaveNewMessage}
            />
        </PageContainer>
    );
};

export default FeedPage;

import React, { useEffect } from 'react';

import useModelSubscription from '../../../models/hooks/useModelSubscription';

import profileModel from '../../../models/ProfileModel/ProfileModel';
import MessageList from '../../common/MessageList';
import PageContainer from '../../common/PageContainer';
import ProfileCard from '../../common/ProfileCard';

const PROFILE_PAGE_NAME = 'Profile page';

const ProfilePage = () => {
    useModelSubscription(profileModel, 'ProfileModel.profileUpdate');
    useModelSubscription(profileModel, 'ProfileModel.profileMessagesUpdate');

    useEffect(() => {
        profileModel.requestProfileMessages();
    }, []);

    const messages = profileModel.getMessages();

    return (
        <PageContainer title={PROFILE_PAGE_NAME}>
            <ProfileCard />
            <MessageList messages={messages} />
        </PageContainer>
    );
};

export default ProfilePage;

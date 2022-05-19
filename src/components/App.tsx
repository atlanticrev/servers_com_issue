import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import profileModel from '../models/ProfileModel/ProfileModel';
import allMessagesCollection from '../models/AllMessagesCollection';

import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/ProfilePage';
import Navigation from './common/Navigation';

const App = () => {
    useEffect(() => {
        profileModel.requestProfile();
    }, []);

    return (
        <Router>
            <Navigation />

            <Routes>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/" element={<FeedPage />} />
            </Routes>
        </Router>
    );
};

export default App;

// Todo Debug
declare global {
    interface Window {
        models: any;
    }
}

window.models = {
    profileModel,
    allMessagesCollection
};

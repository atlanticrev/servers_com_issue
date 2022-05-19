import { fetchProfile } from './api';

import { ApiMessage } from '../types';

import ProfileMessagesCollection from '../ProfileMessagesCollection';

export class ProfileModel extends EventTarget {
    private username: string;
    private imgUrl: string;
    private email: string;
    private readonly messages: ProfileMessagesCollection;

    constructor() {
        super();

        this.username = '';
        this.imgUrl = '';
        this.email = '';
        this.messages = new ProfileMessagesCollection();
    }

    public getUsername() {
        return this.username;
    }

    public getImgUrl() {
        return this.imgUrl;
    }

    public getEmail() {
        return this.email;
    }

    public getMessages() {
        return this.messages.getMessages();
    }

    public addMessage(message: ApiMessage) {
        this.messages.addMessage(message);

        this.dispatchEvent(new CustomEvent('ProfileModel.profileMessagesUpdate'));
    }

    public async requestProfile() {
        const profile = await fetchProfile();

        this.username = profile.username;
        this.imgUrl = profile.imgUrl;
        this.email = profile.email;

        this.dispatchEvent(new CustomEvent('ProfileModel.profileUpdate'));
    }

    public async requestProfileMessages() {
        await this.messages.requestMessages();

        this.dispatchEvent(new CustomEvent('ProfileModel.profileMessagesUpdate'));
    }
}

const profileModel = new ProfileModel();

export default profileModel;

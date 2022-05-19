import MessageModel from '../MessageModel';

import { fetchMessages } from './api';

import { ApiMessage } from '../types';

export class ProfileMessagesCollection extends EventTarget {
    private collection: MessageModel[];

    constructor() {
        super();

        this.collection = [];
    }

    public getMessages() {
        return this.collection;
    }

    public addMessage(message: ApiMessage) {
        this.collection.push(new MessageModel(message));
    }

    public async requestMessages() {
        if (this.getMessages().length > 0) {
            return;
        }

        const messages = await fetchMessages();

        this.collection = messages.map((message) => new MessageModel(message));
    }
}

const profileMessagesCollection = new ProfileMessagesCollection();

export default profileMessagesCollection;

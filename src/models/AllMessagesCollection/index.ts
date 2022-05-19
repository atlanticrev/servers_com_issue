import { fetchMessages } from './api';

import MessageModel from '../MessageModel';
import { ApiMessage } from '../types';

class AllMessagesCollection extends EventTarget {
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

        this.dispatchEvent(new CustomEvent('AllMessagesCollection.messagesUpdate'));
    }

    public async requestMessages() {
        if (this.getMessages().length > 0) {
            return;
        }

        const messages = await fetchMessages();

        this.collection = messages.map((message) => new MessageModel(message));

        this.dispatchEvent(new CustomEvent('AllMessagesCollection.messagesUpdate'));
    }
}

const allMessagesCollection = new AllMessagesCollection();

export default allMessagesCollection;

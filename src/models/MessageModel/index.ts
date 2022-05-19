import { ApiMessage } from '../types';

export default class MessageModel extends EventTarget {
    private readonly author: string;
    private readonly text: string;
    private readonly modifiedDate: string;

    constructor(message: ApiMessage) {
        super();

        this.author = message.author;
        this.text = message.text;
        this.modifiedDate = message.date;
    }

    public getAuthor() {
        return this.author;
    }

    public getText() {
        return this.text;
    }

    public getModifiedDate() {
        return this.modifiedDate;
    }
}

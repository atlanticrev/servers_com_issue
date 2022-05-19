import Index from '../../../models/MessageModel';

export type MessageListProps = {
    messages: Index[];
    filterValue?: string;
};

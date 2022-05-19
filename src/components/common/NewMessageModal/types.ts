import { ApiMessage } from '../../../models/types';

export type NewMessageModalProps = {
    title?: string;
    isOpen: boolean;
    onClose: () => void;
    onApply: (message: ApiMessage) => void;
};

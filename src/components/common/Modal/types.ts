import { ApiMessage } from '../../../models/types';

export type ModalProps = {
    title?: string;
    isOpen: boolean;
    onClose: () => void;
    onApply: (message: ApiMessage) => void;
};

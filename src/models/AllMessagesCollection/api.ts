import { ApiMessage } from '../types';

const fetchMessages = async (): Promise<ApiMessage[]> => {
    const response = await fetch('./allMessages.json');
    return await response.json();
};

export { fetchMessages };

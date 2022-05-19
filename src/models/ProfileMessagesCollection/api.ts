import { ApiMessage } from '../types';

const fetchMessages = async (): Promise<ApiMessage[]> => {
    const response = await fetch('./currentProfileMessages.json');
    return await response.json();
};

export { fetchMessages };

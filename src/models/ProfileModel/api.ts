import { ApiProfile } from '../types';

const fetchProfile = async (): Promise<ApiProfile> => {
    try {
        const response = await fetch('./currentProfile.json');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export { fetchProfile };

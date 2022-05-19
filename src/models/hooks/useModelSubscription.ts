import { useEffect, useReducer } from 'react';

import { ProfileModel } from '../ProfileModel/ProfileModel';
import { AllMessagesCollection } from '../AllMessagesCollection';

const useModelSubscription = (model: ProfileModel | AllMessagesCollection, event: string) => {
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
        const onModelUpdate = () => {
            forceUpdate();
        };

        model.addEventListener(event, onModelUpdate);
        return () => model.removeEventListener(event, onModelUpdate);
    }, []);
};

export default useModelSubscription;

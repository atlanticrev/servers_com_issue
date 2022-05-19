import { useEffect, useReducer } from 'react';

const useModelSubscription = (model: any, event: string) => {
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

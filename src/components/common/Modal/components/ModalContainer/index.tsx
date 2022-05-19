import React from 'react';
import ReactDOM from 'react-dom';

import { ModalContainerProps } from './types';

const ModalContainer: React.FC<ModalContainerProps> = (props) => {
    const { children } = props;

    return ReactDOM.createPortal(children, document.body);
};

export default ModalContainer;

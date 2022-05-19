import React, { useRef } from 'react';

import styles from './styles.modules.css';

import { OverlayProps } from './types';

const Overlay: React.FC<OverlayProps> = (props) => {
    const { onClick, children } = props;

    const overlayRef = useRef(null);

    const onOverlayClick = (e: React.MouseEvent) => {
        if (e.target !== overlayRef.current) {
            return;
        }

        onClick(e);
    };

    return (
        <div className={styles['overlay']} onClick={onOverlayClick} ref={overlayRef}>
            {children}
        </div>
    );
};

export default Overlay;

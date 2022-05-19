import React from 'react';

import styles from './styles.modules.css';

import { ToolbarProps } from './types';

const Toolbar: React.FC<ToolbarProps> = (props) => {
    const { children } = props;

    return <div className={styles['toolbar-container']}>{children}</div>;
};

export default Toolbar;

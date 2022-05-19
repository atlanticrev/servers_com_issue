import React from 'react';

import styles from './styles.module.css';
import { PageContainerProps } from './types';

const PageContainer: React.FC<PageContainerProps> = (props) => {
    const { title, children } = props;

    return (
        <div className={styles['page']}>
            <span className={styles['page-title']}>{title}</span>
            {children}
        </div>
    );
};

export default PageContainer;

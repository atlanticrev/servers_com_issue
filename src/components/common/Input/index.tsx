import React from 'react';

import styles from './styles.module.css';

import { InputProps } from './types';

const Input: React.FC<InputProps> = (props) => {
    const { value, onChange, placeholder } = props;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value);
    };

    return (
        <div className={styles['input-container']}>
            <input type="text" value={value} onChange={onInputChange} placeholder={placeholder} />
        </div>
    );
};

export default Input;

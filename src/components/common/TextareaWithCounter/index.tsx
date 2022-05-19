import React, { useState } from 'react';

import styles from './styles.module.css';

import { TextareaWithCounterProps } from './types';

const TextareaWithCounter: React.FC<TextareaWithCounterProps> = (props) => {
    const { text = '', onChange, maxLength = 255 } = props;

    const [count, setCount] = useState(0);

    const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCount(e.target.value.length);

        onChange && onChange(e.target.value);
    };

    return (
        <div className={styles['textarea-container']}>
            <textarea className={styles['textarea-text']} maxLength={maxLength} value={text} onChange={onTextChange}>
                Input some message...
            </textarea>

            <span className={styles['textarea-counter']}>{count.toString()}</span>
        </div>
    );
};

export default TextareaWithCounter;

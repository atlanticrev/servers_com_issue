import React from 'react';

export type TextareaWithCounterProps = {
    text?: string;
    onChange?: (text: string) => void;
    maxLength?: number;
};

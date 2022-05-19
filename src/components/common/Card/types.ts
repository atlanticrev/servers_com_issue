import React from 'react';

export type CardProps = {
    orientation: 'vertical' | 'horizontal';
    children?: React.ReactNode;
    className?: string;
};

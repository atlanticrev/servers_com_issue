import React, { useState } from 'react';

import Button from '../Button/Button';
import Input from '../Input';

import styles from './styles.module.css';

import { FilterPanelProps } from './types';

const FilterPanel: React.FC<FilterPanelProps> = (props) => {
    const { onFilterApplied } = props;

    const [filterText, setFilterText] = useState('');

    const onFilterTextChange = (text: string) => {
        setFilterText(text);
    };

    const onApplyFilter = () => {
        onFilterApplied && onFilterApplied(filterText);
    };

    const onResetFilter = () => {
        setFilterText('');

        onFilterApplied && onFilterApplied('');
    };

    return (
        <div className={styles['filter-panel-container']}>
            <Input
                value={filterText}
                onChange={onFilterTextChange}
                placeholder="Type in some author or message text fragment..."
            />

            <Button title="Apply filters" onClick={onApplyFilter} />
            <Button title="Reset filters" onClick={onResetFilter} />
        </div>
    );
};

export default FilterPanel;

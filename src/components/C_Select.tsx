import React from 'react';
import { Select } from '@apixjs/ui';

const C_Select: React.FC<C_SelectProps> = () => {

    return (
        <>
            <Select
                name="select"
                options={[
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' },
                    { label: 'Option 3', value: '3' },
                    { label: 'Option 4', value: '4' },
                    { label: 'Option 5', value: '5' },
                    { label: 'Option 6', value: '6' },
                    { label: 'Option 7', value: '7' },
                    { label: 'Option 8', value: '8' },
                    { label: 'Option 9', value: '9' },
                ]}
                defaultValue='1'
                clearable
            />
        </>
    )
}

type C_SelectProps = Record<string, Record<any, any>>;

export default C_Select;
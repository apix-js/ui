import { default as React } from '../../../node_modules/react';

/**
 * @name Select
 * @example <Select
                name="select"
                options={[
                    { label: 'Option 1', value: 1 },
                    { label: 'Option 2', value: 2 },
                    { label: 'Option 3', value: 3 },
                    { label: 'Option 4', value: 4 },
                ]}
            />
 * @param {string} name
 * @param {string} placeholder
 * @param {SelectOption[]} options
 * @param {string} defaultValue
 * @param {Record<string, string>} customStyles
 * @param {(value: string) => void} onChange
 */
declare const Select: React.FC<SelectProps>;
export interface SelectOption {
    label: string;
    value: string;
}
interface SelectProps {
    name: string;
    placeholder?: string;
    options: SelectOption[];
    defaultValue?: string;
    customStyles?: {
        wrapper?: string;
        inputContainer?: string;
        selectedContainer?: string;
        valueContainer?: string;
        optionsList?: string;
        option?: string;
    };
    clearable?: boolean;
    onChange?: (value: string) => void;
}
export default Select;

import { default as React } from '../../../node_modules/react';

declare const Select: React.FC<SelectProps>;
export interface SelectOption {
    label: string;
    value: string;
}
export interface SelectProps {
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

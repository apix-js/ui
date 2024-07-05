import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useClickOutside from '../../hooks/useClickOutside';
import useDebounce from '../../hooks/useDebounce';
import { Icon } from '../../main';
import useAnim from '../../hooks/useAnim';
import ScrollBar from '../ScrollBar/ScrollBar';

import styles from './Select.module.scss'

{
    process.env.NODE_ENV !== 'storybook' && (
        /**
         * @name Select
         * @example <Select
         *     name="select"
         *     options={[
         *         { label: 'Option 1', value: 1 },
         *         { label: 'Option 2', value: 2 },
         *         { label: 'Option 3', value: 3 },
         *         { label: 'Option 4', value: 4 },
         *     ]}
         * />
         * @param {string} name
         * @param {string} placeholder
         * @param {SelectOption[]} options
         * @param {string} defaultValue
         * @param {Record<string, string>} customStyles
         * @param {(value: string) => void} onChange
         */
        null
    )
}

const Select: React.FC<SelectProps> = (props) => {

    const { defaultValue, options, placeholder, customStyles, clearable } = props;

    const selected: SelectOption = options.find(opt => opt.value === defaultValue) ?? { label: '', value: '' }

    /* States */
    const [value, setValue] = useState<SelectOption>(selected)
    const [filteredOptions, setFilteredOptions] = useState<SelectOption[]>(options ?? [])
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [query, setQuery] = useState<string>('')

    /* Hooks */
    const inputRef = useRef<HTMLInputElement>(null)
    const _query = useDebounce(query, 150)

    const anim = useAnim("slideDown", { transition: { duration: .2 } })

    const wrapperClasses = useMemo(() => {

        const _classNames: string[] = [styles.wrapper]

        if (customStyles?.wrapper) _classNames.push(customStyles.wrapper)
        // if (isOpen) _classNames.push(styles.open)
        if (!isOpen) _classNames.filter(_class => _class !== styles.open)

        return _classNames.join(' ')
    }, [customStyles, isOpen])

    /* Effects */
    useEffect(() => {
        if (!_query) {
            setFilteredOptions(options)
            return
        }

        const regex = new RegExp(_query.toLowerCase(), 'g')
        const filtered = options.filter(opt => opt.label.toLowerCase().match(regex) ?? opt.value.toLowerCase().match(regex))
        setFilteredOptions(filtered)

    }, [_query, options])

    /* Handler Functions */
    const handleValueChange = (option: SelectOption) => {
        setValue(option)
        setQuery('')
        setIsOpen(false)
    }

    const handleFocus = () => {
        setIsOpen(true)
    }

    const handleClickOutside = () => {
        setIsOpen(false)
    }
    const wrapperRef = useClickOutside<HTMLDivElement | null>(handleClickOutside)

    return (
        <div
            ref={wrapperRef}
            className={wrapperClasses}
        >
            <div className={styles.selectedContainer}>
                {!isOpen && <span className={styles.valueContainer}>{value.label}</span>}
                <input
                    title='"Select'
                    role='combobox'
                    ref={inputRef}
                    className={styles.inputContainer}
                    type='text'
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                    placeholder={!value?.label ? placeholder : isOpen ? placeholder : ""}
                    readOnly={!isOpen}
                    onFocus={handleFocus}
                />

                <div className={styles.expandIcon} onClick={() => setIsOpen(!isOpen)}>
                    <Icon.IO5.IoChevronDown />
                </div>

                {clearable &&
                    <div className={styles.clearIcon} onClick={() => setValue({ value: "", label: "" })}>
                        <Icon.IO5.IoClose />
                    </div>
                }

            </div>

            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        className={[styles.optionsList, styles.top].join(' ')}
                        {...anim}
                    >
                        <ScrollBar style={{ maxHeight: 200 }}>
                            {filteredOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className={styles.option}
                                    onClick={handleValueChange.bind(null, option)}
                                >
                                    {option.value === value.value &&
                                        <Icon.IO5.IoCheckmark />
                                    }

                                    {option.value !== value.value &&
                                        <div className={styles.emptyIcon} />
                                    }

                                    <span>{option.label}</span>
                                </div>
                            ))}
                        </ScrollBar>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

Select.defaultProps = {
    placeholder: "Select...",
    defaultValue: ''
}

export interface SelectOption {
    label: string,
    value: string
}

export interface SelectProps {
    name: string;
    placeholder?: string;
    options: SelectOption[];
    defaultValue?: string;
    customStyles?: {
        wrapper?: string,
        inputContainer?: string,
        selectedContainer?: string,
        valueContainer?: string,
        optionsList?: string,
        option?: string,
    };
    clearable?: boolean;
    onChange?: (value: string) => void;
}

export default Select;
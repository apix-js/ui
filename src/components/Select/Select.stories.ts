import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: "Select",
        options: [
            { label: 'Option 1', value: "1" },
            { label: 'Option 2', value: "2" },
            { label: 'Option 3', value: "3" },
            { label: 'Option 4', value: "4" },
        ]
    }
};
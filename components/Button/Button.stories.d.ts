import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../node_modules/react').FC<import('./Button').ButtonProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Button3D: Story;
export declare const ButtonRipple: Story;
export declare const ButtonBubbly: Story;

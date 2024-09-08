import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../node_modules/react').FC<import('./PDFViewer').PDFViewerProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;

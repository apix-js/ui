import type { Meta, StoryObj } from '@storybook/react';
import PDFViewer from "./PDFViewer";

const meta = {
    title: 'Components/PDFViewer',
    component: PDFViewer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PDFViewer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        pdf: "/Get_Started_With_Smallpdf.pdf",
    }
};
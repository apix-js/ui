import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { useState } from 'react';
import { Button } from '../Button/Button';

const meta = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Modal',
        position: 'bottomRight'
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(true);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

                <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
                        hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                        venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                </Modal>
            </>
        );
    }
};

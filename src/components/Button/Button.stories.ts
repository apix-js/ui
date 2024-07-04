import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "./Button";

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Button'
  }
};

export const Button3D: Story = {
  args: {
    children: '3D Button',
    effect: '3D'
  }
};

export const ButtonRipple: Story = {
  args: {
    children: 'Ripple Button',
    effect: 'ripple'
  }
};

export const ButtonBubbly: Story = {
  args: {
    children: 'Bubbly Button',
    effect: 'bubbly'
  }
};
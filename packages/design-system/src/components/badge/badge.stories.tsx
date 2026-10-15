import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta = {
  title: 'Foundations/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge',
    variant: 'success',
    size: 'md',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'info', 'neutral'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {};
export const Warning: Story = { args: { variant: 'warning' } };
export const Danger: Story = { args: { variant: 'danger' } };
export const Info: Story = { args: { variant: 'info' } };
export const Neutral: Story = { args: { variant: 'neutral' } };

export const Loading: Story = { args: { loading: true, children: 'Saving' } };

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge {...args} size="sm">
        Small
      </Badge>
      <Badge {...args} size="md">
        Medium
      </Badge>
      <Badge {...args} size="lg">
        Large
      </Badge>
    </div>
  ),
};

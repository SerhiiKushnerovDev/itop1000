import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from './Button';

 const meta: Meta = {
  title: 'components/Button',
  component: Button,
  args: {
    children : "Click me"
  },
  argTypes : {onclick : {action: "clicked"}}
}


const Template: Story<ButtonProps> = args => <Button {...args} />

export const primary = Template.bind({})

export default meta;
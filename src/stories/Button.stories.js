import React from 'react'

import { Button } from '../ui'

export default {
  title: 'ui Components/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Button'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  variant: 'tertiary',
  children: 'Button'
}

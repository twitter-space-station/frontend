import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateSpacePage/organisms/Header',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    picture: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => <Component {...args} />;

Primary.args = {
  title: `タイトル 1`,
  hostUser: {
    displayName: 'Test User',
    uniqueName: 'testuser',
    picture: random.icon(),
  },
};

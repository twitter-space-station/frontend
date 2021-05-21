import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateNewSpacePage',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    onSubmit: {table: {disable: true}},
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full', 'min-h-screen')} />
);

Primary.args = {};

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Viewport } from './Viewport';

export default {
  title: 'UI/Organisms/Viewport',
  component: Viewport,
} as ComponentMeta<typeof Viewport>;

const Template: ComponentStory<typeof Viewport> = () => <Viewport />;

export const _Viewport = Template.bind({});

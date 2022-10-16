import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './components';

export default {
  title: 'UI/Molecules/Footer',
  component: Footer,
  args: {
    isLoggedIn: false
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const _Footer = Template.bind({});

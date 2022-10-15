import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './components';

export default {
  title: 'UI/Molecules/Header',
  component: Header,
  args: {
    isLoggedIn: false
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const UserNotLoggedIn = Template.bind({});
UserNotLoggedIn.args = {
  isLoggedIn: false,
};

export const UserLoggedIn = Template.bind({});
UserNotLoggedIn.args = {
  isLoggedIn: true,
};

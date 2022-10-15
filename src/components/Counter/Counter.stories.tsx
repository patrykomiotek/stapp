import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Counter } from './Counter';

export default {
  title: 'App/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Counter> = () => <Counter />;

// export const Primary = Template.bind({});

export const _Counter = Template.bind({});
_Counter.args = {};
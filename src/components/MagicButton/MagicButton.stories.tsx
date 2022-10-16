import { ComponentMeta } from '@storybook/react';

import { MagicButton } from './MagicButton';

export default {
  title: 'UI/Atoms/MagicButton',
} as ComponentMeta<typeof MagicButton>;


export const _MagicButton = () => (
  <MagicButton handleMouseEnter={() => null}>
    Click me
  </MagicButton>
);

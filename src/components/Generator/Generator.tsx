import { MouseEventHandler, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Generator.css';
import { Text } from '../Text';
import { useThemeContext, ThemeSwitcher } from '../Theme';

const Generator = () => {
  // const [uid, setUid] = useState(() => uuidv4());
  const [uid, setUid] = useState(uuidv4());
  const context = useThemeContext();
  // state[0] - var
  // state[1] - callback

  // const handleClick = (e: MouseEvent) => {
  const handleClick: MouseEventHandler<HTMLHeadingElement | HTMLButtonElement> = (e) => {
    console.log('event: ', e)
    setUid(uuidv4());
  }

  return (
    <div className={context.theme}>
      <h2 onClick={handleClick}>Generator</h2>
      <button onClick={handleClick}>Generate</button>
      <Text>{uid}</Text>
      <ThemeSwitcher />
    </div>
  );
}

export { Generator };

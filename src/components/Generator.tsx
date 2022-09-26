import { MouseEventHandler, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Text } from './Text';

const Generator = () => {
  // const [uid, setUid] = useState(() => uuidv4());
  const [uid, setUid] = useState(uuidv4());
  // state[0] - var
  // state[1] - callback

  // const handleClick = (e: MouseEvent) => {
  const handleClick: MouseEventHandler<HTMLHeadingElement | HTMLButtonElement> = (e) => {
    console.log('event: ', e)
    setUid(uuidv4());
  }

  return (
    <div>
      <h2 onClick={handleClick}>Generator</h2>
      <button onClick={handleClick}>Generate</button>
      <Text>{uid}</Text>
    </div>
  );
}

export { Generator };

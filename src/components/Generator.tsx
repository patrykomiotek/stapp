import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Text } from './Text';

const Generator = () => {
  const state = useState(uuidv4());
  // state[0] - var
  // state[1] - callback

  // let uid = uuidv4();

  const handleClick = () => {
    state[1](uuidv4());
  }

  return (
    <div>
      <h2>Generator</h2>
      <button onClick={handleClick}>Generate</button>
      <Text>{state[0]}</Text>
    </div>
  );
}

export { Generator };

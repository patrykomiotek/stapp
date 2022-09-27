import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // React v18
    // mounting
    // unmounting
    // mounting

    const intervalId = setInterval(() => {
      setCount((value) => value + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }

  }, []);

  return (
    <div>
      <p>Counter: {count}</p>
    </div>
  );
}

export { Counter };

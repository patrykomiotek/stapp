import { useState, useEffect } from 'react';

// const useViewPort = () => {
//   const [size, setSize] = useState({ x: 0, y: 0});

//   console.log('Component mount');

//     // init
//     const resize = () => {
//       console.log(size);

//       setSize({
//         x: window.innerWidth,
//         y: window.innerHeight,
//       });
//     }

//     // resize();
//     window.addEventListener('resize', resize);


//   return size;
// }

const useViewPort = () => {
  const [size, setSize] = useState({ x: 0, y: 0});
  console.log('useViewPort: recreate');

  useEffect(() => {
    // init
    console.log('mount');
    const resize = () => {
      setSize({
        x: window.innerWidth,
        y: window.innerHeight,
      });
    }

    resize();

    window.addEventListener('resize', resize);

    return () => {
      // destructor
      console.log('unmount');
      window.removeEventListener('resize', resize);
    }

  }, []);

  return size;
}

export { useViewPort };

import './App.css';

import { useRef, MouseEventHandler } from 'react';

// import { Generator } from './components/Generator';
// import { Text } from './components/Text';
// import { LoginForm } from './components/LoginForm/LoginForm';
// import { LoginForm } from './components/LoginForm';
// import { LoginForm } from './components/LoginForm';
// import { MagicButton } from './components/MagicButton';
import { LoginPage } from './pages';

const App = () => {
  const buttonElemRef = useRef<HTMLButtonElement>(null);

  const handleMouseHandler: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonElemRef.current) {
      buttonElemRef.current.style.background = 'blue';
      buttonElemRef.current.style.color = 'white';
    }
  }

  return (
    <div className="App">
      <LoginPage />
      {/* <LoginForm /> */}
      {/* <Generator /> */}
      {/* <Text>Lorem ipsum #2</Text> */}
      {/* <MagicButton
        handleMouseEnter={handleMouseHandler}
        ref={buttonElemRef}
        >
        Click me
      </MagicButton> */}
    </div>
  );
}

export default App;

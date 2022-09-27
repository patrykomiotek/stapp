import './App.css';

import { useRef, MouseEventHandler } from 'react';

// import { Generator, Text } from './components';
// import { LoginForm } from './components/LoginForm/LoginForm';
// import { LoginForm } from './components/LoginForm';
// import { LoginForm } from './components/LoginForm';
// import { MagicButton } from './components/MagicButton';
import { LoginPage } from './pages';
import { Layout, Header, Footer } from './components/Layout';
import { Counter } from './components/Counter';

const App = () => {
  // const buttonElemRef = useRef<HTMLButtonElement>(null);

  // const handleMouseHandler: MouseEventHandler<HTMLButtonElement> = () => {
  //   if (buttonElemRef.current) {
  //     buttonElemRef.current.style.background = 'blue';
  //     buttonElemRef.current.style.color = 'white';
  //   }
  // }

  return (
    <div className="App">
      <Layout
        header={<Header isLoggedIn={true} />}
        footer={<Footer />}
      >
        <Counter />
        {/* <LoginPage /> */}
      </Layout>
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

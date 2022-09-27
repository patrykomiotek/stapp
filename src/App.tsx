import './App.css';

import { useRef, useState, MouseEventHandler } from 'react';

import { Generator, Text } from './components';
// import { LoginForm } from './components/LoginForm/LoginForm';
// import { LoginForm } from './components/LoginForm';
import { LoginForm } from './components/LoginForm';
// import { MagicButton } from './components/MagicButton';
import { LoginPage, UserPage } from './pages';
import { Layout, Header, Footer } from './components/Layout';
import { Counter } from './components/Counter';
import { Viewport } from './components/Viewport';
import { AuthProvider } from './components/Auth';
import { ThemeProvider } from './components/Theme';

const App = () => {
  const [show, setShow] = useState(true);

  // const buttonElemRef = useRef<HTMLButtonElement>(null);

  // const handleMouseHandler: MouseEventHandler<HTMLButtonElement> = () => {
  //   if (buttonElemRef.current) {
  //     buttonElemRef.current.style.background = 'blue';
  //     buttonElemRef.current.style.color = 'white';
  //   }
  // }

  return (
    <div className="App">
      <AuthProvider> {/* useContext.Provider */}
        <ThemeProvider>
          <Generator />

          <UserPage />
          <LoginPage />

          {/* <Layout
            header={<Header isLoggedIn={true} />}
            footer={<Footer />}
          > */}
          {/* </Layout> */}
          {/* <LoginForm /> */}
          {/* <Generator /> */}
          {/* <Text>Lorem ipsum #2</Text> */}
          {/* <Counter />
            {show && <Viewport />}
            <button onClick={() => setShow((show) => !show)}>Toggle</button> */}
          {/* <MagicButton
            handleMouseEnter={handleMouseHandler}
            ref={buttonElemRef}
            >
            Click me
          </MagicButton> */}
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

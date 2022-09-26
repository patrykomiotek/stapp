import './App.css';

// import { Generator } from './components/Generator';
// import { Text } from './components/Text';
// import { LoginForm } from './components/LoginForm/LoginForm';
// import { LoginForm } from './components/LoginForm';
import { LoginForm } from './components/LoginForm';
import { MagicButton } from './components/MagicButton';
// import { LoginPage } from './pages';

const App = () => {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/* <LoginForm /> */}
      {/* <Generator /> */}
      {/* <Text>Lorem ipsum #2</Text> */}
      <MagicButton>Click me</MagicButton>
    </div>
  );
}

export default App;

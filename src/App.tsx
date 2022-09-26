import './App.css';

import { Generator } from './components/Generator';
import { Text } from './components/Text';

const App = () => {
  return (
    <div className="App">
      <Generator />
      <Text>Lorem ipsum #2</Text>
    </div>
  );
}

export default App;

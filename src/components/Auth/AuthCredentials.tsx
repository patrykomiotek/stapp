// import { useContext } from 'react';
// import { AuthContext } from './AuthProvider';
import { useAuthContext } from './AuthProvider';
import { Text } from '../Text';

const AuthCredentials = () => {
  // const context = useContext(AuthContext);
  const context = useAuthContext();

  console.log('render: AuthCredentials');
  return (
    <div>
      <p>Logged in: {context?.isLogged ? 'YES' : 'NO'}</p>
      <button onClick={() => context?.toggleLogin()}>Toggle login</button>
    </div>
  );
}

export { AuthCredentials };

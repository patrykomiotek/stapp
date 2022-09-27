import { useContext } from 'react';

import { AuthContext } from './AuthProvider';

const AuthCredentials = () => {
  const context = useContext(AuthContext);
  console.log('context', context);
  return (
    <div>
      <p>Logged in: {context?.isLogged ? 'YES' : 'NO'}</p>
    </div>
  );
}

export { AuthCredentials };

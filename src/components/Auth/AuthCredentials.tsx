// import { useContext } from 'react';
// import { AuthContext } from './AuthProvider';
import { useAuthContext } from './AuthProvider';

const AuthCredentials = () => {
  // const context = useContext(AuthContext);
  const context = useAuthContext();

  return (
    <div>
      <p>Logged in: {context?.isLogged ? 'YES' : 'NO'}</p>
    </div>
  );
}

export { AuthCredentials };

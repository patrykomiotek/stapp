import { useAuthContext } from './AuthProvider';

const AuthCredentials = () => {
  const context = useAuthContext();

  return (
    <div>
      <p>Logged in: {context?.isLogged ? 'YES' : 'NO'}</p>
    </div>
  );
}

export { AuthCredentials };

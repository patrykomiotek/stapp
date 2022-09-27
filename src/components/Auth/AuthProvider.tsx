import { useState, useContext, createContext, Dispatch, SetStateAction } from 'react';

import { User } from '../../types/User';

type Auth = {
  isLogged: boolean;
  user: User;
  logIn: () => void;
  logOut: () => void;
  setUser: Dispatch<SetStateAction<User>>;
}

// 1. create context
export const AuthContext = createContext<Auth | null>(null);
// AuthContext.Provider
// AuthContext.Consumer
AuthContext.displayName = 'AuthContext';

// 2. create hook
const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    language: '',
  });

  const logIn = () => setIsLogged(true);

  const logOut = () => setIsLogged(false);

  return { isLogged, user, setUser, logIn, logOut };
}

type Props = {
  children: React.ReactNode;
}

// 3. return Provider with values form hook
export const AuthProvider = ({ children }: Props) => {
  const { isLogged, logIn, logOut, user, setUser } = useAuth();

  return (
    <AuthContext.Provider value={{
      isLogged,
      logIn,
      logOut,
      user,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// 4. hook which returns current context
export const useAuthContext = () => useContext(AuthContext);

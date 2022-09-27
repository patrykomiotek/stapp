import { useState, useContext, createContext } from 'react';

type Auth = {
  isLogged: boolean;
  user?: {
    email?: string;
  }
  // setIsLogged: (value: boolean) => void;
  // setIsLogged: Dispatch<SetStateAction<boolean>>;
  logIn: () => void;
  logOut: () => void;
  // setUser: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<Auth | null>(null);
// AuthContext.Provider
// AuthContext.Consumer

AuthContext.displayName = 'AuthProvider';

export const useAuthContext = () => useContext(AuthContext);

const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [_user, setUser] = useState(false);

  const logIn = () => setIsLogged(true);

  const logOut = () => setIsLogged(false);

  return { isLogged, setUser, logIn, logOut };
}

type Props = {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const { isLogged, logIn, logOut } = useAuth();

  return (
    <AuthContext.Provider value={{
      isLogged,
      logIn,
      logOut,
      // setUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}
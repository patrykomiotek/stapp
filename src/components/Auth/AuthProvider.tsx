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

// 1. create context
export const AuthContext = createContext<Auth | null>(null);
// AuthContext.Provider
// AuthContext.Consumer
AuthContext.displayName = 'AuthProvider';

// 2. create hook
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

// 3. return Provider with values form hook
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

// 4. hook which returns current context
export const useAuthContext = () => useContext(AuthContext);

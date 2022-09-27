import { useContext, createContext, Dispatch, SetStateAction } from 'react';

type Auth = {
  isLogged: boolean;
  email: string;
  // setIsLogged: (value: boolean) => void;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<Auth | null>(null);
// AuthContext.Provider
// AuthContext.Consumer

AuthContext.displayName = 'AuthProvider';

export const useAuthContext = () => useContext(AuthContext);
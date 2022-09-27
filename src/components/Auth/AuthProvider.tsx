import { createContext } from 'react';

type Auth = {
  isLogged: boolean;
  email: string;
}

export const AuthContext = createContext<Auth | null>(null);
// AuthContext.Provider
// AuthContext.Consumer

AuthContext.displayName = 'AuthProvider';

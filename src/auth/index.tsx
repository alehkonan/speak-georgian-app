import { createContext, PropsWithChildren, useContext } from 'react';
import { useSession } from 'src/api/session';

const AuthContext = createContext({
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { session, isLoading } = useSession();

  if (isLoading) return null;

  return (
    <AuthContext.Provider value={{ isAuthenticated: Boolean(session) }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthContext);

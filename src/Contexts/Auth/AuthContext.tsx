import { createContext, useState, ReactNode, useEffect } from "react";
import { useApi } from "../../Hooks/useApi";
import { User } from "../../Types/User";

type AuthContextType = {
  user: User | null;
  signin: (username: string, password: string) => Promise<boolean>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const api = useApi();

  const [user, setUser] = useState<User | null>(null);

  const signin = async (username: string, password: string) => {
    const data = await api.signin(username, password);

    if (data.user) {
      setUser(data.user);
      setLocalStorage(data.user);
      return true;
    }
    return false;
  };

  const signout = () => {
    setUser(null);
    setLocalStorage("");
  };

  const setLocalStorage = (user: string) => {
    localStorage.setItem("auth-portal", JSON.stringify(user));
  };

  useEffect(() => {
    const isLoggedUser = localStorage.getItem("auth-portal"); // Busca um item no localStorage cuja chave "auth"
    if (isLoggedUser) {
      // Verifica se tem algum usuário setado no localStorage
      const foundUser = JSON.parse(isLoggedUser);
      // Seta esse usuário no STATE
      setUser(foundUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

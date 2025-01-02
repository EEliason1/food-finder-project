import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string,
    rememberMe: boolean
  ) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const { setUser, clearUser } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user") || sessionStorage.getItem("user");
    if (storedUser) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    const fakeResponse = { id: "1", name: "John Doe", email, favorites: [] };
    const storage = rememberMe ? localStorage : sessionStorage;
    if (email === "test@email.com" && password === "asdf") {
      setUser(fakeResponse);
      storage.setItem("user", JSON.stringify(fakeResponse));
      setIsAuthenticated(true);
      navigate("/");
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    const fakeResponse = { id: "2", name, password, email, favorites: [] };
    setUser(fakeResponse);
    localStorage.setItem("user", JSON.stringify(fakeResponse));
    setIsAuthenticated(true);
    navigate("/");
  };

  const logout = () => {
    clearUser();
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

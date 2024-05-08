import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export function useContextProvider() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user_info"));
      setUser(user);
    } else {
      setUser({
        id: null,
        username: "",
        email: "",
        password: "",
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
  //   const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  //   const logout = () => {
  //     localStorage.removeItem('token');
  //     setIsAuthenticated(false);
  //   };

  //   return (
  //     <AuthContext.Provider value={{ isAuthenticated, logout }}>
  //       {children}
  //     </AuthContext.Provider>
  //   );
};

export const useAuth = () => useContext(AuthContext);

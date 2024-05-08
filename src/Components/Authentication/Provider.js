// import { useContext, createContext, useState, useEffect } from "react";

//  const AuthCOntext = createContext();
// export function useContextProvider() {
//   // return useContext(ContextData);
// }
// //*
// export const  Provider=({ children })=> {

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



//   // // A piece of state that will be passed to other files
//   // const [user, setUser] = useState({
//   //   id: null,
//   //   username: "",
//   //   email: "",
//   //   password: "",
//   // });

//   // useEffect(() => {
//   //   const token = localStorage.getItem("jwtToken");
//   //   if (token) {
//   //     const user = JSON.parse(localStorage.getItem("user_info"));
//   //     setUser(user);
//   //   } else {
//   //     setUser({
//   //       id: null,
//   //       username: "",
//   //       email: "",
//   //       password: "",
//   //     });
//   //   }
//   // }, []);

//   // return (
//   //   <ContextData.Provider value={{ user, setUser }}>
//   //     {children}
//   //   </ContextData.Provider>
//   // );
// }


// export const useAuth = () => useContext(AuthContext);
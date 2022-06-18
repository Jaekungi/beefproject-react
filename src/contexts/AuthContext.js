import { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState("");

  const fetchUser = async () => {
    try {
      const token = getAccessToken();
      if (token) {
        const res = await axios.get("/user/me");
        setUser(res.data.user);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const login = async (username, password) => {
    try {
      const res = await axios.post("/auth/login", { username, password });
      setAccessToken(res.data.token);
      fetchUser();
      setUser(res.data.user);
      return res.data.token;
    } catch (err) {
      console.log(err);
    }
  };

  const register = async (username, password, confirmPassword) => {
    try {
      const res = await axios.post("/auth/register", {
        username,
        password,
        confirmPassword,
      });
      setAccessToken(res.data.token);
      fetchUser();
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, user, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { useAuth };

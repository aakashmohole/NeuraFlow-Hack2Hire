import { useEffect, useState } from "react";
import Login from "../../pages/Login";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      setUser(user);
    }

    if (!user?.token) {
      navigate("/login");
    }
  }, []);
  return <div>{user?.token && children}</div>;
};

export default AuthProvider;

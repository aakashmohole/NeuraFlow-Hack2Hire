import { useEffect, useState } from "react";
import Login from "../../pages/Login";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const user = JSON.parse("userInfo");
    if (user) {
      setUser(user);
    }
  }, []);
  return <div>{user.token ? children : <Login />}</div>;
};

export default AuthProvider;

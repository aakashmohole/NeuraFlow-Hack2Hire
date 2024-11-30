import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminRouteProvider = ({ children }) => {
  const user = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.account_type === "freelancer") {
      navigate("/explore");
    }
  }, [user]);

  return (
    <>
      {user && user.account_type === "client" ? (
        children
      ) : (
        <>
          <div className="relative top-0 left-0 bg-[#04152d] text-white w-full h-screen p-2">
            <h1 className="absolute top-20 left-8">User must be logged in</h1>
            <Link
              to="/login"
              className="absolute top-[15vh] left-8 hover:text-[#da2f68]"
            >
              Login
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default AdminRouteProvider;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../api/userApi";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";

import { useNavigate } from "react-router-dom";
const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  console.log(user);

  const handleLogout = async () => {
    const { data, error } = await logoutUser();

    if (data) {
      console.log(data.message);
      dispatch(logout());
      navigate("/");
    }

    if (error) {
      console.error(error);
    }
  };

  return (
    <header className="z-30 mt-2 w-full md:mt-5 absolute top-0 left-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-3 items-center text-white">Logo</div>

          {/* Desktop sign in links */}
          <ul
            className={`flex flex-9  items-center justify-end gap-3 ${
              user && "hidden"
            }`}
          >
            <li>
              <Link
                to="/login"
                className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] px-4 py-1 rounded-md  tracking-tighter font-semibold"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="btn-sm bg-gradient-to-t from-violet-500 to-fuchsia-500 bg-[length:100%_100%] bg-[bottom]  text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] px-2 py-1 font-medium rounded-md"
              >
                Register
              </Link>
            </li>
          </ul>

          <div
            className={`w-8 h-8 md:w-10 md:h-10 mr-4 rounded-full cursor-pointer ${
              !user && "hidden"
            }`}
          >
            <button
              className="w-full h-full"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              {user?.profile_photo ? (
                <img
                  src={user.profile_photo}
                  alt="profile photo"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                user && (
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 flex justify-center items-center text-white p-2 font-semibold">
                    {user.firstname[0].toUpperCase()}
                    {user.lastname[0].toUpperCase()}
                  </div>
                )
              )}
            </button>
          </div>

          <div
            className={`absolute top-14 right-0 mt-2 w-44 md:w-48 bg-gray-950 backdrop-blur-md shadow-lg rounded-lg p-2 md:p-4 border border-gray-700 ${
              isProfileOpen ? "block" : "hidden"
            }  ${!user && "hidden"}`}
          >
            <ul className="space-y-2">
              <li className="w-full text-left text-gray-400 hover:bg-gray-800 rounded-md p-2">
                <Link className="" to={`/profile`}>
                  Profile
                </Link>
              </li>
              <li className="w-full text-left text-gray-400 hover:bg-gray-800 rounded-md p-2">
                <Link to="/applications">My Applications</Link>
              </li>
              <li>
                <button
                  className="w-full text-left text-gray-400 hover:bg-gray-800 rounded-md p-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

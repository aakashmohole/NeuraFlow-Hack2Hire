import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserSchema } from "../schemas/userSchema";
import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../api/userApi";
import { login } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";

import { IoEyeOff, IoEye } from "react-icons/io5";
import { BackgroundBeams } from "../components/ui/Beams";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginUserSchema),
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSubmit = async (d) => {
    const { data, error } = await loginUser(d, setLoading);

    if (data) {
      console.log(data);

      toast.success(data.message, {
        autoClose: "1000",
      });

      dispatch(login(data.user));

      setTimeout(() => {
        navigate("/explore");
      }, 1500);
    }

    if (error) {
      setServerError(error);
    }

    reset();
  };

  return (
    <>
      <section className="bg-[#030712] h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 z-10">
          <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-10 dark:bg-gray-800 dark:border-gray-700 h-full lg:h-[90%]">
            <div className="p-8 space-y-4 md:space-y-6 sm:p-10">
              <div className="text-center mb-4">
                <p className="text-xl text-white font-medium">
                  SignIn Your Account
                </p>
              </div>

              <div className="flex space-x-4">
                <button className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-xs px-4 py-1.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                  <svg
                    className="w-3 h-3 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sign in with Google
                </button>

                <button className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-xs px-4 py-1.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                  <svg
                    className="w-4 h-4 me-2 -ms-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="currentColor"
                      d="M12 .296c-6.63 0-12 5.373-12 12 0 5.304 3.438 9.8 8.207 11.387.6.113.793-.263.793-.584 0-.288-.011-1.05-.017-2.06-3.338.725-4.042-1.614-4.042-1.614-.546-1.387-1.334-1.756-1.334-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.235 1.84 1.235 1.07 1.834 2.807 1.303 3.493.996.108-.775.418-1.303.76-1.603-2.665-.303-5.467-1.332-5.467-5.933 0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.007-.323 3.301 1.23a11.51 11.51 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.293-1.554 3.297-1.23 3.297-1.23.654 1.653.243 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.479 5.92.429.37.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.293 0 .324.19.702.801.583C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12z"
                    ></path>
                  </svg>
                  Sign in with GitHub
                </button>
              </div>
              <hr className="my-4 border-gray-600 opacity-35" />
            </div>

            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white ml-14"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[80%] mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  {...register("email")}
                />
                {errors?.email && (
                  <p className="text-red-600 ml-14 mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white dark:text-white ml-14"
                >
                  Password
                </label>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[80%] mx-auto  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  required=""
                  {...register("password")}
                />
                {isPasswordVisible ? (
                  <IoEyeOff
                    className="text-white absolute right-14 top-10 cursor-pointer text-xl"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <IoEye
                    className="text-white absolute right-14 top-10 cursor-pointer text-xl"
                    onClick={togglePasswordVisibility}
                  />
                )}

                {errors?.passowrd && (
                  <p className="text-red-600 ml-14 mt-2">
                    {errors.passowrd.message}
                  </p>
                )}
              </div>

              <div className="flex items-center ">
                <Link
                  to="/forget-password"
                  className="text-sm font-medium text-white hover:underline dark:text-white ml-14"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="w-1/2 py-3 px-6 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="w-7 h-7 rounded-full mx-auto loader"></div>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>

              <p className="text-sm font-light text-gray-400 dark:text-white-400 text-center">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-green-400"
                >
                  Sign Up
                </Link>
              </p>

              <p className="text-red-600 mb-32 text-center">{serverError}</p>
            </form>
          </div>
        </div>
        <BackgroundBeams />
      </section>
      <ToastContainer theme="dark" />
    </>
  );
};

export default Login;

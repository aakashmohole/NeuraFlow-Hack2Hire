import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema } from "../../schemas/userSchema";
import { Link } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerUserSchema),
  });

  const onSubmit = async (d) => {
    try {
      setLoading(true);
      const response = await axios.post("http://127.0.0.1:5000/register", d);
      console.log(response);
    } catch (error) {
      if (error?.response.data.error) {
        setServerError(error.response.data.error);
      }
      console.error(error);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <section className="bg-[#030712]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex w-full h-[95%] rounded-lg shadow dark:border md:mt-0 sm:max-w-4xl xl:p-10 dark:bg-gray-800 dark:border-gray-700">
          <div className="w-full p-8 space-y-6 sm:p-10">
            <div className="text-center -mt-8">
              <p className="text-2xl font-medium text-white">Register</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="first-name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="John"
                    required
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="last-name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Doe"
                    required
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="mobile"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobileNo"
                    id="mobile"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="+1234567890"
                    required
                    {...register("mobileNo")}
                  />
                  {errors.mobileNo && (
                    <p className="text-red-500">{errors.mobileNo.message}</p>
                  )}
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="••••••••"
                    required
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirm-password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="••••••••"
                    required
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-4 text-white px-4 py-2">
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value="freelancer"
                    {...register("accountType")}
                  />{" "}
                  Freelancer
                </label>
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value="client"
                    {...register("accountType")}
                  />{" "}
                  Client
                </label>
                {errors.accountType && (
                  <p className="text-red-500">{errors.accountType.message}</p>
                )}
              </div>

              <hr className="my-4 border-gray-600 opacity-50" />
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

              <button
                className={`w-1/2 py-3 px-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-[#4B90F9] ${
                  loading && "disabled:cursor-not-allowed"
                } cursor-pointer`}
                disabled={loading}
              >
                {loading ? (
                  <div className="w-7 h-7 rounded-full mx-auto loader"></div>
                ) : (
                  "Register→"
                )}
              </button>

              <p className="mt-4 text-sm text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-green-400 font-medium hover:underline"
                >
                  Log In
                </Link>
              </p>

              <p className="text-red-600">{serverError}</p>
            </form>
          </div>

          <div className="hidden sm:block sm:w-1/2 lg:w-2/3 xl:w-3/4 p-4">
            <img
              src="https://images.unsplash.com/photo-1595683363301-1e94594a550d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Your Image"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

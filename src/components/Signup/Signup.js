import { updateProfile } from "firebase/auth";
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import signup from "../../images/Sign up-amico.png";
import useToken from "../Hooks/useToken";
import Loading from "../Loading/Loading";

export default function Signup() {
  const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [token] = useToken(user || gUser);

  if (user || gUser) {
    navigate("/");
  }

  if (loading || gloading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    toast.error(error?.message || gError?.message);
  }

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cpassword = event.target.cpassword.value;

    if (error) {
      return toast.warning(error);
    }

    if (/@g(oogle)?mail\.com$/.test(email) && password === cpassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    }
  };
  return (
    <>
      <div className=" 2xl:container m-auto sm:p-4 lg:p-4 relative flex justify-center">
        <span className="absolute top-0 left-0 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="w-full h-[610px] dark:bg-gray-900 bg-[#f6f7fb]"
            preserveAspectRatio="none"
            viewBox="0 0 1440 560"
          >
            <g mask='url("#SvgjsMask1013")' fill="none">
              <rect width="1440" height="560" x="0" y="0" fill=""></rect>
              <path
                d="M0,478.773C86.963,464.829,147.894,392.868,219.759,341.952C287.954,293.636,369.356,260.171,410.9,187.652C454.237,112.003,478.016,18.379,452.961,-65.126C428.74,-145.854,344.143,-187.551,281.43,-243.86C226.963,-292.766,180.255,-354.116,109.638,-373.393C39.582,-392.516,-31.209,-363.127,-102.366,-348.626C-180.59,-332.685,-264.442,-332.522,-327.996,-284.21C-398.358,-230.723,-461.052,-155.562,-471.753,-67.828C-482.403,19.489,-417.604,94.077,-384.052,175.391C-348.981,260.388,-342.403,363.523,-270.251,420.519C-196.444,478.823,-92.872,493.664,0,478.773"
                fill="#0a1d32"
              ></path>
              <path
                d="M1440 1001.557C1525.194 1016.21 1621.864 1001.511 1687.863 945.683 1752.335 891.146 1746.326 792.683 1778.987 714.81 1810.318 640.106 1874.251 578.317 1875.907 497.326 1877.679 410.69399999999996 1851.676 317.293 1788.325 258.175 1726.336 200.32799999999997 1627.857 220.55 1548.1970000000001 191.514 1460.907 159.697 1390.941 66.40100000000001 1299.007 79.82100000000003 1206.934 93.262 1137.699 177.29899999999998 1091.657 258.159 1049.7060000000001 331.83500000000004 1070.693 421.265 1056.95 504.926 1042.836 590.845 970.431 678.8050000000001 1009.802 756.465 1049.42 834.611 1165.35 825.5360000000001 1241.477 868.9069999999999 1312.059 909.119 1359.942 987.788 1440 1001.557"
                fill="#12375c"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1013">
                <rect
                  width="1440"
                  height="560"
                  className="fill-red-400 dark:fill-white"
                ></rect>
              </mask>
            </defs>
          </svg>
        </span>

        <div className=" flex justify-evenly rounded-md sm:shadow-2xl items-center md:flex-row-reverse lg:w-4/5 ">
          <div className="p-8 sm:1/3 lg:w-1/3">
            <h1 className="text-4xl font-serif dark:text-white mb-4 text-center text-black ">
              Sign Up
            </h1>
            <div className="text-center">
              <button
                onClick={() => signInWithGoogle()}
                type="button"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <svg
                  className="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign in with Google
              </button>
            </div>
            <p className="divider">
              <span>Or</span>
            </p>
            <form onSubmit={handleCreateAccount}>
              <div className="mb-2">
                <label
                  htmlFor="small-input"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="small-input"
                  className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tom Cruise"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="small-input"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  E-mail
                </label>
                <input
                  name="email"
                  type="email"
                  id="small-input"
                  className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="demo@gmail.com"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="small-input"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  id="small-input"
                  className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="anyPassword192"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="small-input"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Confirm Password
                </label>
                <input
                  name="cpassword"
                  type="password"
                  id="small-input"
                  className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="anyPassword192"
                  required
                />
              </div>
              <p>
                <small className="text-red-600 font-semibold mt-0">
                  {error?.message}
                </small>
              </p>
              {/* <div className='flex items-center '>
                        <input type='checkbox' checked='checked'/>
                        <p>Remember Me</p>
                    </div> */}
              <div className="text-center">
                <button
                  type="submit"
                  className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-24 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Sign Up
                  </span>
                </button>
              </div>
            </form>
            {/* <div className='flex items-center justify-between mb-3'>
                    <p>Forget your password?</p>
                    <a href='/'>Reset Password</a>
                </div> */}
            <div className="text-center">
              <Link
                to="/login"
                className="text-center cursor-pointer hover:underline mt-3 dark:text-white text-black"
              >
                Already Have account?
              </Link>
            </div>
          </div>

          <div className="w-1/2 lg:w-1/3 hidden md:block">
            <img src={signup} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";

const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="mt-12">
      <form className="w-96 m-auto p-12 bg-black text-white rounded-md bg-opacity-85">
        <h1 className="mb-6 text-xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            className="mb-6 p-2 w-full bg-gray-600 rounded-sm"
            placeholder="Full Name"
          />
        )}
        <input
          type="text"
          className="mb-6 p-2 w-full bg-gray-600 rounded-sm"
          placeholder="Email address"
        />
        <input
          type="password"
          className="mb-6 p-2 w-full bg-gray-600 rounded-sm"
          placeholder="Password"
        />
        <br />
        <button className="p-2 rounded-sm w-full mb-6 bg-red-500 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex">
          <p>{isSignIn ? "New to Netflix?" : "Already registed?"}</p>
          <buton onClick={toggleSignForm} className="ml-2 font-bold">
            {isSignIn ? "Sign Up" : "Sign In"} now.
          </buton>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

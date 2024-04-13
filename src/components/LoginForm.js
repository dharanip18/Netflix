import { useRef, useState } from "react";
import { checkValidData } from "../utils/useFormValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null); //email ref
  const password = useRef(null); //password ref
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    //console.log(email.current.value, password.current.value);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/51851865?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/network-request-failed")
            setErrorMessage("Your Email or Password is incorrect");
        });
    }
  };

  const toggleSignForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="mt-12">
      <form
        className="w-96 m-auto p-12 bg-black text-white rounded-md bg-opacity-85"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="mb-6 text-xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            className="mb-6 p-2 w-full bg-gray-600 rounded-sm"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          type="text"
          className="mb-6 p-2 w-full bg-gray-600 rounded-sm"
          placeholder="Email address"
        />
        <input
          ref={password}
          type="password"
          className="mb-6 p-2 w-full bg-gray-600 rounded-sm"
          placeholder="Password"
        />
        <br />
        <button
          onClick={handleFormSubmit}
          className="p-2 rounded-sm w-full mb-6 bg-red-500 "
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="mb-6 text-red-600 ml-2">{errorMessage}</p>
        <div className="flex">
          <p>{isSignIn ? "New to Netflix?" : "Already registed?"}</p>
          <button onClick={toggleSignForm} className="ml-2 font-bold">
            {isSignIn ? "Sign Up" : "Sign In"} now.
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="bg-gradient-to-b from-black z-10 ">
      <header className="max-w-[1216px] flex justify-between m-auto">
        <img
          alt="Netflix Logo"
          className="w-40"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
        {user && (
          <div className="flex items-center">
            <img className="w-12 h-12 p-2" src={user.photoURL} />
            <button
              onClick={handleSignOut}
              className="text-white ml-2 font-bold"
            >
              Sign Out
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;

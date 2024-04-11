import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="relative">
      <div className="absolute z-[-1]">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>
      <Header />
      <LoginForm />
    </div>
  );
};

export default Login;

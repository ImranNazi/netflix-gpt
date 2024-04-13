// login page
import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      {/* to add bg-image below the header */}
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>
      <form className="absolute bg-opacity-80 w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign in" : "sign up"}
        </h1>
        {/* to add input tag only in sign up form!! */}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name "
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address "
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password "
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 w-full bg-red-700 w-full">
          {isSignInForm ? "Sign in" : "sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "new to netflix? Sign up now"
            : "Already registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};
export default Login;

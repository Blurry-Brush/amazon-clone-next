import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { logIn, logOut, signUp } from "@/Context/reducer";
import Link from "next/link";

function Login() {
  const Router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      Router.push("/");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    
  };
  const register = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      Router.push("/");
    }
    catch (error) {
      console.log(error);
      alert(error.message);
    }
   
  };

  return (
    <div className="h-screen w-screen flex justify-center pt-[25vh]">
      <div className="w-[330px] sm:w-[500px] flex-shrink-0 flex flex-col gap-2 items-center px-10">
        <img
          className="h-auto object-contain w-24 mb-2"
          src="/vectorwiki-amazon-logo.png"
          alt=""
        />

        <div className="border w-full p-4 space-y-5">
          <h1 className="text-2xl font-semibold ">Sign In</h1>
          <TextField
            error={email === ""}
            fullWidth
            id="outlined-error-helper-text"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            type="password"
            error={password === ""}
            fullWidth
            id="outlined-error-helper-text"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            onClick={handleSignIn}
            className="bg-yellow-500 hover:bg-yellow-600 hover:scale-[101%] transition-all duration-300 w-full text-center px-2 py-2 rounded-sm text-lg font-semibold"
          >
            Sign In
          </button>
          <button
            onClick={register}
            className="bg-gray-200 hover:bg-gray-300  hover:scale-[101%] transition-all duration-300 w-full text-center px-2 py-2 rounded-sm text-lg font-semibold"
          >
            Create your amazon account
          </button>
          <Link to="/" href={"/"}>Back to home</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiNote } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
// connection to api server
import axios from "axios";
// CONTEXT  Provider
import { useContextProvider , AuthContext,AuthProvider} from "../Authentication/AuthProvider";


//**** *
const API = process.env.REACT_APP_API_URL;

export const SignUp = () => {
  const { navigate } = useNavigate();
  // seting up provate routers for user
  // const { setUser } = AuthContext();
  const [setError] = useState("");
  // const { user, setUser } = useContextProvider();


  const onChange = (e) => {
    // setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = (newUser) => {
    axios
      .post(`${API}/user/signup`, newUser)
      .then((res) => {
        // setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        navigate("/login");
      })
      .catch((err) => {
        setError(
          err.response.data.message || "An error occurred during signup."
        );
      });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    // handleSignup(user);
  };
  //
  return (
    <div className="max-w-[700px] mx-auto my-16 p-16">
      <div>
        <h1 className="text-3xl font-semibold">
          Sign Up for a <em>Free</em> account today{" "}
        </h1>
        <p>
          Already have have an account?{" "}
          <Link className="underline" to="/login">
            Sign In
          </Link>
        </p>
      </div>

      <form onSubmit={onSubmitForm}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium" htmlFor="username">
            Username
          </label>
          <input
            className="border p-3"
            type="text"
            name="username"
            id="username"
            // value={user.username}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="border p-3"
            type="email"
            name="email"
            id="email"
            // value={user.email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium" htmlFor="password">
            Password
          </label>
          <input
            className="border p-3"
            type="password"
            name="password"
            // value={user.password}
            id="password"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <button onClick={onSubmitForm }
            type="submit"
            className="flex items-center justify-center gap-2 shadow-xl border border-red-900 bg-red-500 w-full p-4 my-3 hover:bg-red-400 rounded-xl"
          >
            <BiNote  /> Sign Up with Note-It
          </button>
          <button className=" flex items-center justify-center gap-2 shadow-xl border border-red-900 bg-red-500 w-full p-4 my-3 hover:bg-red-400 rounded-xl">
            <FcGoogle /> Sign Up with Google
          </button>
          {/* <button className="shadow-xl border border-red-900 bg-red-500 w-full p-4 my-3 hover:bg-red-400">
            FaceBook
          </button> */}
        </div>
      </form>
    </div>
  );
};

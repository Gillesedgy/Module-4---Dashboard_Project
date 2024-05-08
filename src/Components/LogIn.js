import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BiNote } from "react-icons/bi";

const LogIn = () => {
  const API = process.env.REACT_APP_API_URL;
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  // const firebase = useFirebase();
  const navigate = useNavigate();
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API}/user/login`, {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="max-w-[700px] mx-auto my-16 p-16">
      <div>
        <h1 className="text-3xl font-semibold">Log in to you dashboard</h1>
        <div>
          <p className="py-2">
            Don't have an dashboard? No worries,{" "}
            <Link className="underline" to="/signup">
              Sign Up
            </Link>
          </p>
          <p className="p-2">
            Go to your{" "}
            <Link className="underline" to="/dashboard">
              Dashboard{" "}
            </Link>
          </p>
        </div>
      </div>

      <form onSubmit={onSubmitForm}>
        <div className="flex flex-col py-2">
          <label htmlFor="username"></label>
          <input
            className="border p-3"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* <div className="flex flex-col py-2">
          {" "}
          <label htmlFor="email"></label>
          <input
            className="border p-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div> */}

        <div className="flex flex-col py-2">
          <label htmlFor="password"></label>
          <input
            className="border p-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className=" flex flex-col ">
          <Link to="/dashboard
          ">
            {" "}
            <button className=" flex items-center justify-center gap-2 shadow-xl border border-sky-900 bg-sky-500 w-full p-4 my-3 hover:bg-sky-400 rounded-xl">
              <BiNote /> Log In
            </button>
          </Link>

          <button className=" flex items-center justify-center gap-2 shadow-xl border border-cyan-900 bg-cyan-500 w-full p-4 my-3 hover:bg-sky-400 rounded-xl ">
            <FcGoogle /> Google
          </button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default LogIn;

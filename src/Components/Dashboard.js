import React from "react";
import { useAuth } from "./Authentication/AuthProvider";
import { Link } from "react-router-dom";
export const Dashboard = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div
      className="Dashboard
    "
    >
      {isAuthenticated ? (
        <div
          className="Dashboard
        Page"
        >
          <h1 className="text-4xl ">Dashboard</h1>
          <p>First Name:</p>
          <p>Last Name:</p>
          <h3>Username:</h3>
          <Link to="/">
            <button onClick={logout}>Logout</button>{" "}
            <button className="border border-cyan-800 bg-cyan-800  m-20 p-4 my-3 hover:bg-cyan-700">
              Sing Out
            </button>
          </Link>
        </div>
      ) : (
        <p>
          Please <Link to="/login">log in </Link>to view this page.
        </p>
      )}
    </div>
  );
};

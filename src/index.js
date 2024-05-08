import React from "react";
import ReactDOM from "react-dom/client";
// Context Provider
import { AuthProvider } from "./Components/Authentication/AuthProvider";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider />
    <App />
    <AuthProvider />
  </React.StrictMode>
);

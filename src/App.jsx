import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import "normalize-css-ultimate/normalize-ultimate.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "./index";
import AppRoutes from "./components/AppRoutes";
function App() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <>
      <Navbar />
      <AppRoutes user={user} />
    </>
  );
}

export default App;

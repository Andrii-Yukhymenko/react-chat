import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import "normalize-css-ultimate/normalize-ultimate.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "./index";
function App() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <>
      <Navbar />
      <Routes>
        {/*<CheckRoute logined={user} alt="/login">*/}
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/chat" />} />
        {/*</CheckRoute>*/}
      </Routes>
    </>
  );
}

export default App;

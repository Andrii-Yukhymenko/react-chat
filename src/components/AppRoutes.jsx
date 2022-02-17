import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";

function AppRoutes({ user }) {
  if (user) {
    return (
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Navigate to='/chat'/>} />
        <Route path="/" element={<Navigate to="/chat" />} />
        <Route path="*" element={<Navigate to="/chat" />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Navigate to='/login'/>} />
        <Route path="/" element={<Navigate to="/chat" />} />
        <Route path="*" element={<Navigate to="/chat" />} />
      </Routes>
    );
  }
}

export default AppRoutes;

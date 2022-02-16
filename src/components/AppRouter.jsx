import React, {useContext} from "react";
import { privateRoutes, publicRoutes } from "../Routes";
import { Route, Routes, Navigate } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

function AppRouter(props) {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);
  console.log(user);
  return user ? (
    <Routes>
      {privateRoutes.map(({path, el}) => {
        return <Route key={path} path={path} element={el} />;
      })}
      <Route path="*" element={<Navigate to="/chat" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({path, el}) => {
        return <Route key={path} path={path} element={el} />;
      })}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRouter;

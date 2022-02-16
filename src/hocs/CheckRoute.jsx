import React from "react";
import {Navigate} from "react-router-dom";

function CheckRoute({ children, logined, alt }) {
  return logined ? children : <Navigate to={`/${alt}`} />;
}

export default CheckRoute;

import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRoutes = [
  {
    path: "/login",
    el: Login,
  },
];

export const privateRoutes = [
  {
    path: "/chat",
    el: Chat,
  },
];

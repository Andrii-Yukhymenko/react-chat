import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Context } from "../index";
import firebase from "firebase/compat/app";
function Login() {
  const { auth } = useContext(Context);
  const login = async () => {
    const provider = await new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    await console.log(user);
  };
  console.log(process.env.REACT_APP_FIREBASE_API_KEY)
  console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN)
  console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID);
  console.log(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET);
  console.log(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID);
  console.log(process.env.REACT_APP_FIREBASE_APP_ID);
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          style={{ width: 400, background: "lightgray" }}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box p={5}>
            <Button onClick={login} variant="outlined">
              Войти через Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;

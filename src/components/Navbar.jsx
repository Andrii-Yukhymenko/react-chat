import React, {useContext} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom'
import Typography from "@mui/material/Typography";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";
function Navbar() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar variant='dense'>
        <Grid container justify="flex-end" alignItems="center">
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            React Chat
          </Typography>
          {user ? (
            <Button onClick={() => auth.signOut()} color="inherit" variant="outlined">
              Выйти
            </Button>
          ) : (
            <Button onClick={() => navigate('/login')} color="inherit" variant="outlined">
              Логин
            </Button>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

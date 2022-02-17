import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Avatar } from "@mui/material";

function Chat() {
  const { auth, firestore, firebase } = useContext(Context);
  const [user, error] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createData")
  );
  const sendMessage = async () => {
    await firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createData: firebase.firestore.FieldValue.serverTimestamp(),
    });
    await setValue("");
  };
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <Container>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ height: window.innerHeight - 50, marginTop: "20px" }}
      >
        <div
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid gray",
            overflowY: "auto",
            padding: "20px",
            marginBottom: "30px",
          }}
        >
          {messages.map((message) => {
            return (
              <div
                key={Math.random()}
                style={{
                  border:
                    message.uid === user.uid
                      ? "2px solid green"
                      : "2px solid red",
                  marginLeft: message.uid === user.uid ? "auto" : "0px",
                  width: "fit-content",
                  marginBottom: "10px",
                }}
              >
                <Grid direction='row' container>
                  <Avatar src={message.photoURL} />
                  <Grid direction='column' container>
                    <div>{message.displayName}</div>
                    <div>{message.text}</div>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </div>
        <Grid
          container
          alignItems="flex-start"
          justifyContent="space-between"
          style={{ width: "80%" }}
        >
          <TextField
            onChange={(e) => setValue(e.target.value)}
            variant="outlined"
            style={{ width: "80%", background: "#212121", color: "#898989" }}
            value={value}
          />
          <Button
            onClick={sendMessage}
            variant="outlined"
            style={{ width: "15%", color: "#898989", background: "#212121" }}
          >
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Chat;

import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { Container, Button } from "@mui/material";

const login = () => {

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };


  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 7 }}
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </Button>
      </Container>
    </>
  );
};

export default login;

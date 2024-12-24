import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Sign In clicked with", username, password);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Sign In
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSignIn}>Sign In</Button>
    </Box>
  );
}

export default SignIn;

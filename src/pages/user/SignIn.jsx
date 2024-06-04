import React, { useState } from "react";
import {
  TextField,
  Button,
  Link,
  Container,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slices/authSlice";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });
  const users = useSelector((state) => state.data.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    console.log("User:", user); // Log the user object

    if (user && user.id) {
      setAlert({ type: "success", message: "Login successful!" });
      dispatch(login(user.id));
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setAlert({ type: "error", message: "Invalid username or password" });
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        boxShadow: 3,
        borderRadius: 2,
        p: 4,
        bgcolor: "background.paper",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSignIn}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {alert.message && (
            <Alert severity={alert.type} sx={{ mt: 2, mb: 2 }}>
              {alert.message}
            </Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Box display="flex" justifyContent="center">
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

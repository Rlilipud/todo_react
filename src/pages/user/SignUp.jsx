import React, { useState } from "react";
import {
  TextField,
  Button,
  Link,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/todoSlice";
import { Link as RouterLink } from 'react-router-dom';

export default function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const userId = generateUserId();
    const userData = { username: name, password: password, userId, email };
    dispatch(setUser(userData));
    setName("");
    setPassword("");
    setEmail("");
  };

  const generateUserId = () => {
    const randomId = Math.floor(Math.random() * 1000000) + Date.now();
    return randomId;
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
          Sign Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSignUp}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Box display="flex" justifyContent="center">
            <Link component={RouterLink} to="/signin" variant="body2">
              {"Already have an account? Sign In"}
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

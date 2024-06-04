import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Paper,
} from "@mui/material";
import Navbar from "../../components/Layout/Navbar";
import './index.css';
import { Button } from "bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/slices/todoSlice";

function HomePage(props) {

  return (
    <Box sx={{ display: "flex" , height : '100vh', background:"linear-gradient(to bottom, #2c3e50, #f1eaea)"}}>
        <Navbar />
      <Box component="main" sx={{  margin:'auto' }}>
        <Paper elevation={2} sx={{height:'300px',padding:'16px' , width:'60%' , margin:'auto', textAlign:'center', display:'flex' ,flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
          <Typography className="typing-todo" variant="h5" sx={{fontWeight:'600' , marginBottom:'16px'}}>
            Welcome to your personalized todo app
          </Typography>
          <Typography>
             With this app, you can easily add, manage, and check off tasks from your to-do list, keeping track of your daily goals.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

HomePage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HomePage;
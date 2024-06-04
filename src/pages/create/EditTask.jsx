import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../../store/slices/todoSlice";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../components/Layout/Navbar";

export default function EditTask() {
  const { taskId } = useParams();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const users = useSelector((state) => state.data.users);
  const user = users.find((user) => user.id === userId);
  const task = user.todos.find((task) => task.id === parseInt(taskId));
  const navigate = useNavigate(); // Initialize useNavigate

  const [newTaskTitle, setNewTaskTitle] = useState(task.title);
  const [newTaskDescription, setNewTaskDescription] = useState(task.task);

  const handleEditTask = () => {
    dispatch(
      editTodo({
        userId,
        id: task.id,
        title: newTaskTitle,
        task: newTaskDescription,
        done: task.done,
      })
    );
    navigate("/create"); // Navigate back to the create page
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          maxWidth: "400px", // Set maximum width to control the size
          margin: "auto", // Center horizontally
          my: "50px", // Add margin from the top for spacing
          p: "20px", // Add padding to the box
          bgcolor: "background.paper", // Set background color
          borderRadius: "10px", // Add border radius for a rounded appearance
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow for depth
        }}
      >
        <Typography variant="h4" gutterBottom>
          Edit Task
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          multiline
          label="Task Description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleEditTask}
          sx={{ mt: 2 }}
        >
          Save Changes
        </Button>
      </Box>
    </>
  );
}

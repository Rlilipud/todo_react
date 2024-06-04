import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../../store/slices/todoSlice";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";

export default function EditTask() {
  const { taskId } = useParams();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const users = useSelector((state) => state.data.users);
  const user = users.find((user) => user.id === userId);
  const task = user.todos.find((task) => task.id === parseInt(taskId));
  const navigate = useNavigate();

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
    navigate("/create");
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
          maxWidth: "400px",
          margin: "auto",
          my: "50px",
          p: "20px",
          bgcolor: "background.paper",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
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

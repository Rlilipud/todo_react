import React, { useState } from "react";
import { Box, Button, TextField, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/slices/todoSlice";

export default function EnterTask() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleCreateTask = () => {
    if (newTaskTitle.length > 0 && newTaskDescription.length > 0) {
      dispatch(
        addTodo({
          userId,
          todo: {
            id: Date.now(),
            title: newTaskTitle,
            task: newTaskDescription,
            done: false,
          },
        })
      );
      setAlertMessage("Task created successfully.");
      setNewTaskTitle("");
      setNewTaskDescription("");
      setAlertOpen(true);
    } else {
      setAlertMessage("Please fill out both the title and description fields.");
      setAlertOpen(true);
    }
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <TextField
        label="Title"
        id="fullWidth"
        size="small"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        InputProps={{
          style: { width: "400px" },
        }}
      />
      <TextField
        label="Enter your Task ..."
        id="fullWidth"
        size="small"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        InputProps={{ style: { width: "400px" } }}
      />
      <Button variant="contained" onClick={handleCreateTask}>
        Create Task
      </Button>
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        message={alertMessage}
      />
    </Box>
  );
}

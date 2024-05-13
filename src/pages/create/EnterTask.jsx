import React, { useState } from "react";
import {
  Box,
  Button,
  TextField
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../../store/slices/todoSlice"; 

export default function EnterTask() {
  const dispatch = useDispatch();

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [alertType, setAlertType] = useState("error");
  const [showAlert, setShowAlert] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleCreateTask = () => {
    if (newTaskTitle.length > 1 && newTaskDescription.length > 1) {
      if (editingTaskId !== null) {
        dispatch(
          editTodo({
            id: editingTaskId,
            title: newTaskTitle,
            task: newTaskDescription,
            done: false,
          })
        );
        setEditingTaskId(null);

        setAlertType("success");
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      } else {
        dispatch(
          addTodo({
            id: Date.now(),
            title: newTaskTitle,
            task: newTaskDescription,
            done: false,
          })
        );
        setAlertType("success");
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
      setNewTaskTitle("");
      setNewTaskDescription("");
    } else {
      setShowAlert(true);
      setAlertType("error");
    }
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
        color="success"
        label="Title"
        id="fullWidth"
        size="small"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        InputProps={{
          style: {
            color: "#074955",
            width: "400px",
            outlineColor: "red",
          },
        }}
      />
      <TextField
        color="success"
        label="Enter your Task ..."
        id="fullWidth"
        size="small"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        InputProps={{ style: { color: "#074955", width: "400px" } }}
      />
      <Button
        variant="contained"
        sx={{
          ml: "8px",
          background: "#74b816",
          "&:hover": { backgroundColor: "#66a80f" },
        }}
        onClick={handleCreateTask}
      >
        {editingTaskId !== null ? "Update Task" : "Create Task"}
      </Button>
    </Box>
  );
}

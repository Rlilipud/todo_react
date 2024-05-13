import React, { useState } from "react";
import { Box, Card, Stack, Typography, Divider, Alert } from "@mui/material";
import { Done as DoneIcon, Edit as EditIcon } from "@mui/icons-material";
import Navbar from "../../components/Layout/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  editTodo,
  deleteTodo,
  toggleDone,
} from "../../store/slices/todoSlice";

export default function TaskCard() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleTaskEdit = (taskId) => {
    const taskToEdit = todos.todos.find((task) => task.id === taskId);
    setNewTaskTitle(taskToEdit.title);
    setNewTaskDescription(taskToEdit.task);
    setEditingTaskId(taskId);
  };

  const handleTaskDone = (taskId) => {
    dispatch(toggleDone({ id: taskId }));
  };

  return (
    <>
      {todos &&
        todos.todos &&
        todos.todos.map((task) =>
          !task.done ? (
            <Card key={task.id} variant="outlined" sx={{ minWidth: 360 }}>
              <Box sx={{ p: 2, minHeight: 100 }}>
                <EditIcon
                  onClick={() => handleTaskEdit(task.id)}
                  sx={{
                    color: "#f59f00",
                    cursor: "pointer",
                    pr: "4px",
                    float: "right",
                  }}
                />
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {task.title}
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  {task.task}
                </Typography>
              </Box>
              <Divider />
              <Box
                sx={{
                  p: 2,
                  justifyContent: "center",
                  display: "flex",
                  color: "#66a80f",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#74b816", color: "#fff" },
                }}
                onClick={() => handleTaskDone(task.id)}
              >
                <Typography>Click To Done</Typography>
                <DoneIcon sx={{ pl: "4px" }} />
              </Box>
            </Card>
          ) : null
        )}
    </>
  );
}

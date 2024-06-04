import React from "react";
import { Box, Card, Typography, Button } from "@mui/material";
import {
  TaskAlt as TaskAltIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import Navbar from "../components/Layout/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../store/slices/todoSlice";

export default function Done() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const doneTasks = useSelector((state) =>
    state.data.users
      .filter((user) => user.id === userId)
      .flatMap((user) => user.todos.filter((task) => task.done))
  );
  const state = useSelector((state) => state);
  console.log(state);

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTodo({ userId, todoId: taskId }));
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginTop: "64px",
          background: "#fafcf6",
          display: "grid",
          justifyItems: "center",
          alignItems: "start",
          gridTemplateColumns: "1fr 1fr 1fr",
          columnGap: "16px",
          rowGap: "16px",
          height: "100vh",
          gridTemplateRows: "auto",
        }}
      >
        {doneTasks.length > 0 ? (
          doneTasks.map((task) => (
            <Card
              key={task.id}
              variant="outlined"
              sx={{ minWidth: 360, mt: 2 }}
            >
              <Box sx={{ p: 2, minHeight: 100 }}>
                <TaskAltIcon sx={{ color: "#66a80f", float: "right" }} />
                <Typography gutterBottom variant="h5" component="div">
                  {task.title}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {task.task}
                </Typography>
              </Box>
              <Button
                onClick={() => handleDeleteTask(task.id)}
                sx={{ color: "error.main", width: "100%" }}
              >
                Delete Task <DeleteIcon />
              </Button>
            </Card>
          ))
        ) : (
          <Typography variant="h6" sx={{ gridColumn: "2/3", margin: 0 }}>
            No tasks are marked as done.
          </Typography>
        )}
      </Box>
    </>
  );
}

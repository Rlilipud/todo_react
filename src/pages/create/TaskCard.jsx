import React, { useState, useEffect } from "react";
import { Box, Card, Stack, Typography, Divider } from "@mui/material";
import { Done as DoneIcon, Edit as EditIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, deleteTodo, toggleDone } from "../../store/slices/todoSlice";
import { useNavigate } from "react-router";

export default function TaskCard() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId); // Access userId from auth slice
  const users = useSelector((state) => state.data.users);
  const user = users.find((user) => user.id === userId);
  const todos = user ? user.todos : [];

  useEffect(() => {
    console.log("userId:", userId);
  }, [userId]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const navigate = useNavigate();

  const handleTaskEdit = (taskId) => {
    navigate(`/edit-task/${taskId}`);
  };

  const handleTaskDone = (taskId) => {
    dispatch(toggleDone({ userId, id: taskId }));
  };

  return (
    <>
      {todos.map((task) =>
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
                "&:hover": { backgroundColor: "#7ba14aa1", color: "#3f3f3f" },
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

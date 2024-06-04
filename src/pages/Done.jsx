import {
  Box,
  Card,
  Stack,
  Typography,
} from "@mui/material";
import { TaskAlt as TaskAltIcon } from "@mui/icons-material";
import Navbar from "../components/Layout/Navbar";
import { useSelector } from "react-redux";

export default function Done() {
  const doneTasks = useSelector(state => state.data.users.filter(task => task.done));


  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginTop: "64px",
          background: "#e9fac8",
          display: "grid",
          justifyItems: "center",
          alignItems: "start",
          gridTemplateColumns: "1fr 1fr 1fr",
          columnGap: '16px',
          rowGap: '16px',
          height:'100vh',
          gridTemplateRows: "auto",
        }}
      >
        {doneTasks.length > 0 ? (
          doneTasks.map(task => (
            <Card key={task.id} variant="outlined" sx={{ minWidth: 360, mt: 2 }}>
              <Box sx={{ p: 2, minHeight: 100 }}>
                <TaskAltIcon sx={{ color: "#66a80f", float: 'right' }} />
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
                  {task.description}
                </Typography>
              </Box>
            </Card>
          ))
        ) : (
          <Typography variant="h6" sx={{ gridColumn:'2/3', margin: 0 }}>No tasks are marked as done.</Typography>
        )}
      </Box>
    </>
  );
}

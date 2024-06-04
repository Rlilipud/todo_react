import React, { useState } from "react";
import { Box, Alert } from "@mui/material";
import Navbar from "../../components/Layout/Navbar";
import { useDispatch, useSelector } from "react-redux";

import EnterTask from "./EnterTask";
import TaskCard from "./TaskCard";

export default function CreateTask() {
  const todos = useSelector((state) => console.log(state));

  const [alertType, setAlertType] = useState("error");
  const [showAlert, setShowAlert] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  console.log(todos);
  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginTop: "64px",
          background: "#fafcf6",
          display: "grid",
          justifyItems: "center",
          alignItems: "center",
          gridTemplateColumns: "1fr 1fr 1fr",
          columnGap: "16px",
          rowGap: "16px",
          height: "100vh",
          gridTemplateRows: "100px 200px ",
        }}
      >
        <Box
          sx={{
            gridColumn: "1/4",
            padding: "16px",
          }}
        >
          {showAlert && (
            <Alert
              variant="filled"
              onClose={handleCloseAlert}
              severity={alertType}
              sx={{ my: 2 }}
            >
              {alertType === "success"
                ? editingTaskId !== null
                  ? "Task updated successfully."
                  : "Task created successfully."
                : "Fill out Title and Description"}
            </Alert>
          )}
          <EnterTask />
        </Box>
        <TaskCard />
      </Box>
    </>
  );
}

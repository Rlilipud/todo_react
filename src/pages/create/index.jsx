import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/Layout/Navbar";

import EnterTask from "./EnterTask";
import TaskCard from "./TaskCard";

export default function CreateTask() {
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
          <EnterTask />
        </Box>
        <TaskCard />
      </Box>
    </>
  );
}

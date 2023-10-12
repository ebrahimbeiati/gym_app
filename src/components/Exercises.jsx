import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Pagination from '@mui/material/Pagination'; // Import Pagination from @mui/material
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [page, setPage] = useState(1); // Define the page state

  const paginate = (event, value) => {
    // Define the paginate function to handle page changes
    setPage(value);
  };

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px", xs: "60px" },
      }}
      mt="50px"
      p="20px"
      maxWidth="1280px"
      margin="auto"
      width="100%"
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        color="#3A1212"
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" }}}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "40px",
        }}
      >
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={page}
            onChange={paginate}
            size="large"
          />
        )}
      </Box>
    </Box>
  
  );
}

export default Exercises;

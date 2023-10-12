import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography
        variant="h3"
        fontWeight={600}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        justifyContent="center"
        flexWrap="wrap"
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        variant="h3"
        fontWeight={600}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        justifyContent="center"
        flexWrap="wrap"
      >
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
}

export default SimilarExercises
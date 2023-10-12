import React from 'react'
import{Box, Typography,Stack} from '@mui/material'



const ExerciseVideos = ({exerciseVideos,name}) => {

  return (
    <Box
      sx={{ marginTop: { lg: "200px", xs: "20px" } }}
      p="20px"
      alignItems="center"
    >
      <Typography variant="h3" sx={{ fontSize: { lg: "54px", xs: "30px" } }}>
        {name} Videos
      </Typography>
      <Stack
        gap="50px"
        sx={{ width: { lg: "700px" }, textAlign: { lg: "left" } }}
      >
        <Typography variant="h6" sx={{ fontSize: { lg: "26px", xs: "20px" } }}>
          Here are some videos to help you with your {name} exercise.
        </Typography>
        <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center">
          {exerciseVideos?.slice(0, 3).map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                loading="lazy"
              />
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontSize: { lg: "28px", xs: "20px" } }}
                >
                  {item.video.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { lg: "22px", xs: "16px" } }}
                >
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default ExerciseVideos
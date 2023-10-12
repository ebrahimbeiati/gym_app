// import React from 'react'
// import{Box, Typography,Stack} from '@mui/material'



// const ExerciseVideos = ({exerciseVideos,name}) => {

//   return (
//     <Box
//       sx={{ marginTop: { lg: "200px", xs: "20px" } }}
//       p="20px"
//       alignItems="center"
//     >
//       <Typography variant="h3" sx={{ fontSize: { lg: "54px", xs: "30px" } }}>
//         {name} Videos
//       </Typography>
//       <Stack
//         gap="50px"
//         sx={{ width: { lg: "700px" }, textAlign: { lg: "left" } }}
//       >
//         <Typography variant="h6" sx={{ fontSize: { lg: "26px", xs: "20px" } }}>
//           Here are some videos to help you with your {name} exercise.
//         </Typography>
//         <Stack
//           sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
//           justifyContent="flex-start"
//           flexWrap="wrap"
//           alignItems="center"
//         >
//           {exerciseVideos?.slice(0, 3).map((item, index) => (
//             <a
//               key={index}
//               className="exercise-video"
//               href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
//               target="_blank"
//               rel="noreferrer"
//             >
//               <img
//                 src={item.video.thumbnails[0].url}
//                 alt={item.video.title}
//                 loading="lazy"
//               />
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "flex-start",
//                 }}
//               >
//                 <Typography
//                   sx={{ fontSize: { lg: "20px", xs: "14px" } }}
//                   fontWeight={600}
//                   color="#000"
//                 >
//                   {item.video.title}
//                 </Typography>
//                 <Typography fontSize="14px" color="#000">
//                   {item.video.channelName}
//                 </Typography>
//               </Box>

//               <Box>
//                 <Typography
//                   sx={{ fontSize: { lg: "28px", xs: "18px" } }}
//                   fontWeight={600}
//                   color="#000"
//                 >
//                   {item.video.title}
//                 </Typography>
//                 <Typography fontSize="14px" color="#000">
//                   {item.video.channelName}
//                 </Typography>
//               </Box>
//             </a>
//           ))}
//         </Stack>
//       </Stack>
//     </Box>
//   );
// }

// export default ExerciseVideos
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "20px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      p="20px"
    >
      <Typography variant="h3" sx={{ fontSize: { lg: "54px", xs: "30px" }}}>
        {name} Videos
      </Typography>
      <Stack
        gap="50px"
        sx={{
          width: "100%", // Use full width on all devices
          textAlign: "left",
        }}
      >
        <Typography variant="h6" sx={{ fontSize: { lg: "26px", xs: "20px" }}}>
          Here are some videos to help you with your {name} exercise.
        </Typography>
        <Stack
          sx={{
            flexDirection: { lg: "row", xs: "column" }, // Use row on lg and column on xs
            justifyContent: "flex-start",
            gap: { lg: "110px", xs: "0px" },
          }}
          alignItems="center"
        >
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  sx={{ fontSize: { lg: "20px", xs: "14px" }}}
                  fontWeight={600}
                  color="#000"
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#000">
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

export default ExerciseVideos;

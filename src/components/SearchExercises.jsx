// import React from 'react';
// import { useEffect, useState } from 'react';
// import { Box, Button, Stack, TextField, Typography} from '@mui/material'
// import { exerciseOptions, fetchData } from '../utils/fetchData';
// import HorizontalScrollbar from './HorizontalScrollbar';
// const SearchExercises = (
//   {setExercises,bodyPart, setBodyPart}
// ) => {
  
//   const [bodyPart, setBodyPart] = useState([]);
//   const [search, setSearch] = useState('');


// useEffect(() => {
//   const fetchExercisesData = async () => {
//     const bodyPartsData = await fetchData(
//       'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//       exerciseOptions);
//     setBodyPart(['all', ...bodyPartsData]);
//   }
//   fetchExercisesData();
 
// }, []);


// const handleSearch = async ()=>{
//   if (search){
//     const exercisesData = await fetchData(
//       'https://exercisedb.p.rapidapi.com/exercises',
//       exerciseOptions
//     );
//     const searchedExercises = exercisesData.filter(
//       (exercise) => exercise.name.toLowerCase().includes(search)
//       || exercise.target.toLowerCase().includes(search)
//       || exercise.equipment.toLowerCase().includes(search)
//       || exercise.bodyPart.toLowerCase().includes(search)

//     );
//     setSearch('');
//     setExercises(searchedExercises);
//   }
//   else{
//     const exercisesData = await fetchData(
//       'https://exercisedb.p.rapidapi.com/exercises',
//       exerciseOptions
//     );
//     setExercises(exercisesData);
//   }
    
//   }
// const handleBodyPart = (e)=>{
  
//   const value = e.target.value;
//   setBodyPart(value);
//   if (value === 'all'){
//     const fetchExercisesData = async () => {
//       const exercisesData = await fetchData(
//         'https://exercisedb.p.rapidapi.com/exercises',
//         exerciseOptions
//       );
//       setExercises(exercisesData);
//     };
//     fetchExercisesData();
//   }
//   else{
//     const fetchExercisesData = async () => {
//       const exercisesData = await fetchData(
//         `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${value}`,
//         exerciseOptions
//       );
//       setExercises(exercisesData);
//     };
//     fetchExercisesData();

// }
// }
// return (
//   <Stack
//     alignItems="center"
//     mt="37px"
//     justifyContent="start"
//     p="20px"
//     gap="40px"
//     width="100%"
//     sx={{
//       flexDirection: { lg: 'row' },
//       p: "20px",
//       gap: { lg: '110px', xs: '0' },
//     }}
//   >
//     <Typography variant="h3" fontWeight={700}
//      mb="23px"
//      sx={{
//        fontSize: { lg: '44px', xs: '30px' }
//      }}
//      color="#3A1212">
//       Awesome Exercises you can do at the Gym
//     </Typography>
//     <Box position="relative" mb="72px">
//       <TextField 
//         sx={{
//           input: { fontWeight: "700", border: "none", borderRadius: "4px"},
//           width: { lg: "800px", xs: "350px"},
//           backgroundColor: "#FFF",
//           borderRadius: "40px",
//         }}
//         height="76px"
//         value={search}
//         onChange={(e) => 
//           setSearch(e.target.value.toLowerCase())
//           }
//         placeholder="Search Exercises"
//         type="text"
//       />
//       <Button className="search-btn" sx={{
//         bgcolor: "#FF2625",
//         color: "#fff",
//         textTransform: "none",
//         width: { lg: "175px", xs: "80px"},
//         fontSize: { lg: "20px", xs: "14px"},
//         height: "56px",
//         position: "absolute",
//         right: "0",
//         top: "0",
//         "&:hover": {
//           color: "white",
//           bgcolor: "black",
//         },
//       }}
//       onClick={handleSearch}>
//         Search
//       </Button>
//     </Box>
//     <Box
//       display="flex"
//       gap="40px"
//       justifyContent="center"
//       alignItems="center"
//       sx={
//         {
//          position: "relative",width: "100%", p:'20px'
//         }
//       }
//     >
//     <HorizontalScrollbar data={bodyPart}
//      setBodyPart={setBodyPart}
//      bodyPart={bodyPart}
    
//      />
//       <Button onClick={handleBodyPart} sx={{
//         padding: "10px",
//       }}>
//         {bodyPart[0]}
//       </Button>
//       <Button onClick={handleBodyPart} sx={{
//         padding: "10px",
//       }}>
//         {bodyPart[1]}
//       </Button>
//       <Button onClick={handleBodyPart} sx={{
//         padding: "10px",
//       }}>
//         {bodyPart[2]}
//       </Button>
//       <Button onClick={handleBodyPart} sx={{
//         padding: "10px",
//       }}>
//         {bodyPart[3]}
//       </Button>
//     </Box>
  

      
//   </Stack>
//   );
// };

// export default SearchExercises;
import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises }) => {
  const [bodyPart, setBodyPart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyPart(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    } else {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      setExercises(exercisesData);
    }
  };

  const handleBodyPart = (value) => {
    setBodyPart(value);
    if (value === "all") {
      const fetchExercisesData = async () => {
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
        setExercises(exercisesData);
      };
      fetchExercisesData();
    } else {
      const fetchExercisesData = async () => {
        const exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${value}`,
          exerciseOptions
        );
        setExercises(exercisesData);
      };
      fetchExercisesData();
    }
  };

  return (
    <Box sx={{ mt: "37px" }}>
      <Stack
        alignItems="center"
        justifyContent="start"
        p="20px"
        gap="40px"
        width="100%"
        sx={{
          flexDirection: { lg: "row" },
          p: "20px",
          gap: { lg: "110px", xs: "0" },
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          mb="23px"
          sx={{
            fontSize: { lg: "44px", xs: "30px" },
            color: "#3A1212",
          }}
        >
          Awesome Exercises you can do at the Gym
        </Typography>
        <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "800px", xs: "350px" },
              backgroundColor: "#FFF",
              borderRadius: "40px",
            }}
            height="76px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: "#FF2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
              right: "0",
              top: "0",
              "&:hover": {
                color: "white",
                bgcolor: "black",
              },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Box
          display="flex"
          gap="40px"
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "relative",
            width: "100%",
            p: "20px",
          }}
        >
          <HorizontalScrollbar
            data={bodyPart}
            setBodyPart={handleBodyPart}
            bodyPart={bodyPart}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchExercises;

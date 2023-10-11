import React from 'react'
import {stack, Typography} from '@mui/material';
import gym from '../assets/icons/gym.png';

const BodyPart = ( {item,setBodyPart, bodyPart}) => {
  return (
    <stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      {
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px"
      }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({top: 1800, left: 100, behavior: "smooth"});
    }}
    >
    <img src="{gym}" alt="dumbbell" 
        style={{width: '40px', height: '40px'}}
    />
    <Typography
    fontSize="24px"
    fontWeight="bold"
    color="#3A1212"
    textTransform="capitalize"
    >
      {item}
    </Typography>

    </stack>
  )
}

export default BodyPart
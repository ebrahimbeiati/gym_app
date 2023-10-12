import React from 'react';
import { Typography, Stack,Button,Box } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
    const {name,description,bodyPart,target,equipment, gifUrl} = exerciseDetail;
    const extraDetail =[
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]



  return (
    <Stack
      gap="60px"
      sx={{flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />
      <Stack
        gap="50px"
        sx={{ width: { lg: '700px' }, textAlign: { lg: 'left' } }}
      >
        <Typography
          variant="h3"
          sx={{ fontSize: { lg: '54px', xs: '30px' } }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: { lg: '26px', xs: '20px' } }}
        >
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your{' '}
          <span style={{ textTransform: 'capitalize' }}>{target}</span>{' '}
          as well as your <br /> mood and energy.
        </Typography>
        {extraDetail.map((item) => (
            
            <Stack
                key={item.name}
                direction="row"
                gap="24px"
                alignItems="center"
            >
                <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
                    <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                </Button>
                <Typography variant="h5" textTransform="capitalize">
                    {item.name}
                </Typography>
            </Stack>

        ))}
        <Box component="div">
            <Typography variant="h5">Description</Typography>
            <Typography variant="body1">{description}</Typography>
            </Box>
            </Stack>
    </Stack>
    );
    }



export default Detail
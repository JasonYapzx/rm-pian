'use client'
import Box from '@mui/material/Box';
import ResponsiveAppBar from '@/app/components/header';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import sam from '../../../../public/sam.jpeg';

const MerchantPage = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#ffffff' }}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box sx={{ my: 3, mx: 5 }}>
        <Typography
          gutterBottom
          sx={{
            py: 2,
            px: 2,
            letterSpacing: '.1rem',
            fontWeight: 400,
            color: 'ffffff',
            textDecoration: 'none',

            fontSize: 40,
          }}
        >
          Minting
        </Typography>
        <Divider variant='middle' />
      </Box>
      <div className="flex md:flex-row flex-col">

      <Box boxShadow={3} borderRadius={3} width={700} margin={6} padding={3}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ fontWeight: 300, fontSize: 40, marginBottom: 4 }}
          >
            Mint a New Item
          </Typography>

          <Typography sx={{ fontSize: 16, fontWeight: 500, marginBottom: 1 }}>
            <span style={{ color: 'red' }}>*</span>
            Name
          </Typography>
          <TextField
            id='outlined-basic'
            label='Sam Smith: GLORIA the tour'
            variant='outlined'
            sx={{ width: '90%', marginBottom: 3 }}
          />

          <Typography sx={{ fontSize: 16, fontWeight: 500, marginBottom: 1 }}>
            <span style={{ color: 'red' }}>*</span>
            Description
          </Typography>
          <TextField
            id='outlined-basic'
            label='Item description'
            variant='outlined'
            sx={{ width: '90%' }}
          />
        </CardContent>
        <CardActions>
          <Fab variant='extended'>
            <AddCircleIcon sx={{ mr: 1 }} />
            Mint Item
          </Fab>
        </CardActions>
      </Box>

      <Tilt className="flex items-center justify-center mx-auto md:py-28 py-5  ">
              <div>
                  <div className="shadow-xl shadow-black icon bg-black rounded-xl px-4 flex flex-col justify-around text-white md:w-[400px] md:h-[400px] w-[200px] h-[200px]">
                    <div className="font-serif align-top md:text-lg text-[10px]">
                      <h1> Name: Sam Smith: GLORIA the tour</h1>
                      <h1> Description:  </h1>
                    </div>
                      <Image
                        src={sam}
                        alt="logo"
                        className="md:w-40 w-20 transition duration-200 hover:opacity-75 mx-auto"
                        width={160}
                        height={81.75}
                      />
                  </div>
              </div>
            </Tilt>
        </div>
</Box> );
};

export default MerchantPage;

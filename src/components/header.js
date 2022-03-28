import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Brain from "../images/brain.jpg";

function Header() {

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${Brain})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={Brain} alt="Brain" />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.6)',
          m: 0,
        }}
      />
      <Grid container>
        <Grid item md={12}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 12, md: 12 },
              pr: { md: 0 },
              m: 0,
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Cryptococcal Meningitis Repository
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              A central source for information on cryptococcal meningitis
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;
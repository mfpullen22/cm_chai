import * as React from 'react';
import Header from './header';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Home() {
    return (
    <div>
    <Header />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              height: "100%",
              width: "100%",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              m: {md: 0},
              background: "rgb(173, 217, 244)",
            }}
          >
            <Typography component="h1" variant="h5" color="inherit" gutterBottom>
              A global disease with global implications
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              A central source for information on cryptococcal meningitis
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
        <Box
            sx={{
              position: 'relative',
              height: "100%",
              width: "100%",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              m: {md: 0} ,
              background: "rgb(173, 217, 244)",
            }}
          >
        </Box>
        </Grid>
      </Grid>
    </div>
    );
}

export default Home;

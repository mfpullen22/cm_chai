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
        <Grid item md={4}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              m: {md: 0},
              background: "white",
            }}
          >
            <Typography component="h4" variant="h4" color="inherit" gutterBottom>
              A global disease with global implications
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
            <Box
                sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                m: {md: 0} ,
                background: "white",
                }}
            >
                <Typography component="h6" variant="h6" color="inherit">
                    Cryptococcal meningitis is the cause of 15% of AIDS-related deaths worldwide.
                </Typography>
            </Box>
        </Grid>
        <Grid item md={4}>
            <Box
                sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                m: {md: 0} ,
                background: "white",
                }}
            >
                <Typography component="h6" variant="h6" color="inherit" paragraph>
                    Annually, this amounts to over 180,000 deaths globally.
                </Typography>
            </Box>
        </Grid>
      </Grid>
    </div>
    );
}

export default Home;

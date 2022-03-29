import * as React from 'react';
import { Link } from "react-router-dom";
import Header from './header';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import HandMap from "../images/handmap.jpg";
import Pills from "../images/pills.jpg";

//https://www.airbnb.com/d/designhost
//https://coolors.co/

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
                    Cryptococcal meningitis is the cause of 15% of AIDS-related deaths worldwide. Annually, this amounts to over 180,000 deaths globally.
                </Typography>
                <Typography></Typography>
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
                    Sub-Saharan Africa is disproportioantely affected, both in number of cryptococcal meningitis cases and deaths.
                </Typography>
            </Box>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignitems="center" spacing={12}>
        <Grid item>
          <Card sx={{ maxWidth: 345, mb: 10 }}>
            <CardMedia
              component="img"
              height="140"
              image={Pills}
              alt="medication"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Diagnosis and Treatment Guidelines
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Up-to-date guidelines for diagnosing and managing cryptococcal meningitis.
              </Typography>
            </CardContent>
            <CardActions style={{justifyContent: "center"}}>
                <Button variant="contained" size="large">
                  <Link style={{ textDecoration: "none", color: "white" }} to={`/Guidelines`}>
                      GUIDELINES
                  </Link>
                </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345, mb: 10}}>
              <CardMedia
                component="img"
                height="140"
                image={HandMap}
                alt="medication"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cryptococcus Epidemiology Map
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Global map of cryptococcal meningitis prevalence and related data.
                </Typography>
              </CardContent>
              <CardActions style={{justifyContent: "center"}}>
                <Button variant="contained" size="large">
                  <Link style={{ textDecoration: "none", color: "white" }} to={`/Map`}>
                      CRYPTOMAP
                  </Link>
                </Button>
              </CardActions>
            </Card>
        </Grid>
      </Grid>
    </div>
    );
}

export default Home;

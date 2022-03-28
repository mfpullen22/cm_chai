import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
    return (
        <Box component="footer" sx={{width: "100%", color: "white", bgcolor: '#1976d2', py: 1, position: "fixed", bottom: 0}}>
        <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
            Supported by the University of Minnesota and the Clinton Health Access Initiative
            </Typography>
            <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
            sx={{ color: "white"}}
            >
            Site created and maintained by <Link style={{ textDecoration: "underline", color: "white" }} href="https://med.umn.edu/bio/idim-faculty/matthew-pullen">Matthew F. Pullen MD</Link> 
            </Typography>
        </Container>
        </Box>
    );
}

export default Footer;
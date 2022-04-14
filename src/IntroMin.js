import * as React from 'react';
import Resume from './downloads/Justin_Tiell_Resume.pdf';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Social from './Social';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

function IntroMin() {
  return (
    <Paper sx={{
      px: 3,
      py: 2.5,
      mt: 3,
    }}>
      <h1 style={{ marginTop: 0 }}>Justin Tiell</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Button component={Link} to="/" sx={{mt: 2, mr: 2 }} variant="contained" ><HomeIcon /></Button>
          <Button sx={{ mt: 2, mr: 2 }} variant="outlined" href={Resume} download>Download Resume</Button>

          <Button sx={{ mt: 2, mr: 2 }} variant="outlined" component={Link} to="/dev-insights">Development Insights</Button>
          <Button sx={{ mt: 2 }} variant="outlined" component={Link} to="/design-case-study">Design Case Study</Button>
        </Grid>

        <Grid item xs={12} md={3}>
          <Social />
        </Grid>
      </Grid>
    </Paper >
  );
}

export default IntroMin;

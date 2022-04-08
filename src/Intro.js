import { Box } from '@mui/system';
import Resume from './downloads/Justin_Tiell_Resume.pdf';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import JustinPic from './downloads/me.jpg';
import Grid from '@mui/material/Grid';
import Social from './Social';

function App() {
  return (
    <Paper sx={{
      px: 3,
      py: 2.5,
      mt: 3,
    }}>
      <h1 style={{ marginTop: 0 }}>Justin Tiell</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <img
            src={JustinPic}
            alt="Justin Tiell"
            style={{
              maxWidth: '100%',
              maxHeight: '350px',
              borderRadius: '4px'
            }}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Box>
            <p style={{ marginTop: '0' }}>
              I am an experienced web developer and UX designer with more a decade of working in multiple team environments. I spend time with clients to establish their goals and the needs of the users. Creating mockups and prototypes with Adobe XD allows everyone to get a clear vision of how the solution will look and function. After an agreed upon mockup I then build the app/site with HTML, CSS, JS, and PHP.
            </p>

            <p>
              I am most proficient with frontend languages like HTML, CSS and JS I have also built multiple solutions using PHP (WordPress and Laravel) and React.js.
            </p>
          </Box>
        </Grid>

      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Box>
          <h3>Programming Languages</h3>
          <ul>
            <li>HTML</li>
            <li>CSS/Sass</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>React.js</li>
          </ul>
        </Box>
        <Box>
          <h3>Skills</h3>
          <ul>
            <li>User Experience Design</li>
            <li>User Research</li>
            <li>Presenting to Clients</li>
          </ul>
        </Box>
        <Box>
          <h3>Tools</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>Adobe XD</li>
            <li>Github</li>
          </ul>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Button sx={{ mt: 2 }} variant="contained" href={Resume} download>Download Resume</Button>
        </Grid>

        <Grid item xs={12} md={3}>
          <Social />
        </Grid>
      </Grid>
    </Paper >
  );
}

export default App;

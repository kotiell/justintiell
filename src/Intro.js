import { Box } from '@mui/system';
import Resume from './downloads/Justin_Tiell_Resume.pdf';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import JustinPic from './downloads/me.jpg'

function App() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Paper sx={{
        px: 3,
        py: 2.5,
        width: '50%',
        mt: 3,
      }}>
        <h1 style={{ marginTop: 0 }}>Justin Tiell</h1>
        <Box sx={{
          display: 'flex',
        }}>
          <Box>
            <p style={{marginTop: '0'}}>
              I am an experienced web developer and UX designer with more a decade of working in multiple team environments. I spend time with clients to establish their goals and the needs of the users. Creating mockups and prototypes with Adobe XD allows everyone to get a clear vision of how the solution will look and function. After an agreed upon mockup I then build the app/site with HTML, CSS, JS, and PHP.
            </p>

            <p>
              I am most profeciant with frontend langauges like HTML, CSS and JS I have also built multiple solutions using PHP (WordPress and Laravel) and React.js.
            </p>
          </Box>

          <Avatar sx={{
            height: 150,
            width: 150,
            boxShadow: 3,
            ml: 2
          }} src={JustinPic} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
        <Button sx={{ mt: 2 }} variant="contained" href={Resume} download>Download Resume</Button>
      </Paper>
    </Box>
  );
}

export default App;

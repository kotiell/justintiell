import { Box } from '@mui/system';
import Resume from './downloads/Justin_Tiell_Resume.pdf';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function App() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Box sx={{

        width: '50%'
      }}>
        <Paper sx={{px: 3, py: 2}}>
          <h1>Justin Tiell</h1>
          <p>I am an experienced web developer and designer. I spend most of my time with HTML, CSS, JS, and PHP. I also have experience with React and Laravel and I am always open to learning new skills.</p>

          <Button variant="contained" href={Resume} download>Download Resume</Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;

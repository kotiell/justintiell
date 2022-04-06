import { Box, ThemeProvider } from '@mui/system';
import Resume from './downloads/Justin_Tiell_Resume.pdf';
import Button from '@mui/material/Button';

function App() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Box sx={{

        width: '50%'
      }}>
        <h1>Justin Tiell</h1>
        <p>I am an experienced web developer and designer. I spend most of my time with HTML, CSS, JS, and PHP. I also have experience with React and Laravel and I am always open to learning new skills.</p>

        <Button variant="contained" href={Resume} download>Download Resume</Button>
      </Box>
    </Box>
  );
}

export default App;

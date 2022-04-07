import { Box } from '@mui/system';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

function App() {
  return (
    <Box>
        <h3 style={{marginBottom: '0.5rem'}}>Follow Me</h3>
        <Link href="https://www.linkedin.com/in/justintiell/" sx={{ mr: 1}}><LinkedInIcon /></Link>
        <Link href="https://twitter.com/justintiell" ><TwitterIcon /></Link>
        <Link href="https://www.instagram.com/thetiell/"  sx={{ ml: 1}}><InstagramIcon /></Link>

    </Box>
  );
}

export default App;

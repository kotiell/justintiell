import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import IntroMin from './IntroMin';

import StJoeRedesign from './downloads/st-joe-redesign.png';
import StJoeOrg from './downloads/st-joe-org.png';
import StJoeNewDesign from './downloads/st-joe-new-home.png';
import ComputerPhone from './downloads/st-joe-computer-phone.png';

function StJoeCaseStudy() {
  return (
    <Container maxWidth="lg">
      <IntroMin />
      <Paper sx={{
        px: 3,
        py: 2.5,
        mt: 3,
        mb: 3
      }}>
        <h1 id="st-joe-case-study">Site Redesign Case Study</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box>
              <p>
                The St. Joseph Catholic church was first recognized as a parish in 1873 and has served the community since. While the design seems to have been neglected, the site is still updated and used by the community.
              </p>
              <p>
                The goal of the redesign is to give the site a fresh and modern look that assists people quickly find the information the need.
              </p>

              <img src={StJoeRedesign} alt="St Joesph Parish Website" style={{ maxWidth: '100%' }} />
              <h3>Problem</h3>
              <p>Outdated design and hard to find information</p>

              <p>Quick access information such as mass times or a map of the campus were hard to find. While viewing the site on a mobile device worked, it was not an enjoyable experience.</p>


              <img src={StJoeOrg} alt="St Joesph Parish Website" style={{ maxWidth: '100%' }} />

              <h3>Design</h3>
              <p>What is the best flow for the content?</p>

              <p>
                Choosing what to highlight on the homepage was critical to the redesign. My instinct was to highlight Mass times, but based on the audience using the site I instead highlighted information that would fit a broader audience. This allowed me to give mass times its own section which broke up the flow and gave more order to the site.
              </p>

              <img src={StJoeNewDesign} alt="St Joesph Parish Website" style={{ maxWidth: '100%' }} />

              <h3>Outcome</h3>
              <p>Modern design with a hint to the past</p>

              <p>
                A site that works great both on desktop and mobile which allows people to find time sensitive information quickly. Giving space to elements, while making the page longer, makes them much easier to find. The bold serif font is a simple way to give a call back to the past, and their blue was able to shine within the updated design.
              </p>

              <img src={ComputerPhone} alt="St Joesph Parish Website" style={{ maxWidth: '100%' }} />

              <h3>Reflection</h3>
              <p>Clear, Crisp, Quick</p>
              <p> There is always the urge to put too much content on a page, or cut too much. I tend to cut too much. This was a good practice in thinking through what is needed, and where to place it.</p>
              <p>I personally like the serif font, and used it in a very decorative type of way. It typically gives off a more serious tone, but also fits well with a Catholic church feel.</p>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default StJoeCaseStudy;

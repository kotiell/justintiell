import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import IntroMin from './IntroMin';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

function DevInsights() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <Container maxWidth="lg">
      <IntroMin />
      <Paper sx={{
        px: 3,
        py: 2.5,
        mt: 3,
        mb: 3
      }}>
        <h1 id="devHome">Situation Overview</h1>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={4}>
            <Card sx={{
              height: '100%'
            }}>
              <CardContent>
                <h3>Client</h3>
                <p> One of the world's largest equipment rental companies, which owns more than 600,000 rental units worldwide.</p>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Card sx={{
              height: '100%'
            }}>
              <CardContent>
                <h3>Client Pain Points</h3>
                <p>
                  Client was hosting multiple live events for the various employee roles across the company needing a quick and easy way for each employee to find what live event they needed to attend each hour of a three-day conference.
                </p>
                <p>
                  Client recognized employee population contained a large count of users who were novices at attending events online.
                </p>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Card sx={{
              height: '100%'
            }}>
              <CardContent>
                <h3>Client Solution</h3>

                <p>
                  Build a custom live event portal making it easy for users to find specific live events for their role and permit quick access for joining.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card sx={{
              height: '100%'
            }}>
              <CardContent>
                <h3>Languages Used</h3>
                <ul>
                  <li>Laravel (PHP Framework)</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card sx={{
              height: '100%'
            }}>
              <CardContent>

                <h3>Features of the Deliverable</h3>
                <ul>
                  <li>Locking access of future events</li>
                  <li>Unlocking access of past events</li>
                  <li>Ability to highlight the current event</li>
                  <li>Custom and personalized event list display per user group</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
        <h2>Deliverables</h2>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <Card sx={{
              height: '100%'
            }}>
              <CardContent>
                <h3>Admin Interface:</h3>
                <ul>
                  <li>Custom CRUD/CMS interface for client updating and accessibility</li>
                  <li>Event panels including title, time, description, image and ability to house a button linking users to a live stream</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Card sx={{
              height: '100%'
            }}>
              <CardContent>
                <h3>User Interface:</h3>
                <ul>
                  <li>Website with easy user interface showcasing the current event based on the use's group and time of day </li>
                  <li>Coding site to showcase the current event </li>
                  <li>Three panel UI that updated depending on what was selected in the others</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>


        <Paper elevation={1} sx={{
          p: 2,
          mt: 4
        }}>
          <h2>Development Insight</h2>
          <p>
            My main role was to focus on the user portal of the final product. This was built using HTML, CSS, JS and brought to life using React. The users were able to select days and see what events were available, while future events could be seen, however the buttons were locked.
          </p>

          <p>
            React Hooks were used to do a lot of the heavy lifting with this project. I used useContext to pass variables to components as needed. This relieved the need to reuse the same props and values in multiple components. Data such as current event, time, user group were able to be stored using the useState hook.
          </p>
        </Paper>
        <Paper elevation={1} sx={{
          p: 2,
          mt: 4
        }}>
          <h2>Individual Growth</h2>
          <p>
            This project involved creating API calls. Typically this is done by the backend developer but I stepped in to help create the APIs via the PHP framework Laravel. I enjoyed challenging myself and learning a new skill which only enhanced the site further.
          </p>

          <p>
            Because there were time based elements needing to update based on the time of the day when a site visitor arrives to the site, I would do processing on the server side to pull in data that didn't need so much work done on the client side. This helped create a faster user interface.
          </p>
        </Paper>

      </Paper>
    </Container >
  );
}

export default DevInsights;

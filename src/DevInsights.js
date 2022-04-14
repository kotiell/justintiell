
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Intro from './Intro';

function DevInsights() {
  return (
    <Container maxWidth="lg">
      <Intro />
      <Paper sx={{
        px: 3,
        py: 2.5,
        mt: 3,
        mb: 3
      }}>
        <h1>Event Schedule</h1>
        <h3>Client Ask:</h3>
        <p> Build a site that would serve as a portal that would make it easy for users to know which event was live and how to join. </p>

        <p>I worked with another developer who focused on creating the backend development and the CRUD (admin interface). </p>

        <h3>Key Growth:</h3>
        <p>
          This was the first project that I really stepped into creating API calls. I wanted to be able to use real data instead of relying on placeholder information. The other developer was busy with other projects so I stepped in to help create the APIs themselves via the PHP framework Laravel.</p>

        <p>
          <h3>Languages</h3>
          <ul>
            <li>Laravel (PHP Framework)</li>
            <li> React</li>
            <li> HTML</li>
            <li> CSS</li>
            <li>JavaScript</li>
          </ul>
        </p>


        <p>
          <h3> Features of the deliverable</h3>
          <ul>
            <li>Locked Future Events</li>
            <li>Unlocked past events</li>
            <li>Highlighted Current Event</li>
            <li>Was custom per user group</li>
          </ul>
        </p>

        <h2>Deliverables:</h2>

        <p>
          <h3>Admin Interface:</h3>
          Custom CRUD/CMS that a client can use to create events. The event has title, time, description, image, and can house a button that links users to a live stream. This is the data that would be pulled in via the APIs I created. Because there were time based elements, I would do processing on the server side to pull in data that didn’t need so much work done on the client side.
        </p>

        <p>
          <h3>User Interface:</h3>
          An easy to use website that showcased the current event based on the user’s group and time of day. By showcasing the current event, it was easy for users to know which event was live, and what to do. This was during the beginning of covid, there more less experienced users were being asked to join events online than in the past.
        </p>

        <p>
          <h3>Development insight:</h3>
          I focused on the user side. This was built using HTML, CSS, JS and brought to life using React. The users were able to select days and see what events were on them, while future events could be seen, the buttons were locked.
        </p>

        <p>I used React Hooks to pass data between the components. I used useContext to pass variables to components as needed. This relieved the need to reuse the same props and values in multiple components. Data such as current event, time, user group were able to be stored using the useState hook. </p>



      </Paper>
    </Container>
  );
}

export default DevInsights;

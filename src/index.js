import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './Intro';
import Social from './Social';
import reportWebVitals from './reportWebVitals';
import Container from '@mui/material/Container';

ReactDOM.render(
  <React.StrictMode>

    <Container sx={{
      width: '900px'
    }}>
      <Intro />
      <Social />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

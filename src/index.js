import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './Homepage';
import StJoeCaseStudy from './StJoeCaseStudy';
import DevInsights from './DevInsights';

ReactDOM.render(

  <React.StrictMode>
console.log('hello');
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="design-case-study" element={<StJoeCaseStudy />} />
        <Route path="dev-insights" element={<DevInsights />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

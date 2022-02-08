import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'

ReactDOM.render(
  <Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/myapps" element={<Navigate replace to="/learn"/>} />
    <Route path="/learn" element={<Learn/>} />
  </Routes>
</Router>,
  document.getElementById('root')
);

function Home(){
  return(
  <div>
    <h1> Home Route </h1>
    </div>
  );
}

function Learn(){
  return(
  <div>
    <h1> Learn </h1>
    <h4>All the course are here </h4>
    <Link className="btn btn-primary" to="/learn/course">Courses</Link> |
    <Link className="btn btn-success" to="/learn/bundle">Bundle</Link>
    </div>
  );
}


reportWebVitals();

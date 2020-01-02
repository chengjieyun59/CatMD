import React, { Component } from 'react';
import Posts from './Components/Posts.jsx';
import './styles.css';

const App = (props) => {
  return (
    <div className="container-main">
      <h2>App is rendered here:</h2>
      <Posts />
    </div>
  );
};

export default App;
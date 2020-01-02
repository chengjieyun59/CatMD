import React, { Component } from 'react';
import Posts from './Components/Posts.jsx';
import UserInput from './Components/UserInput.jsx';
import './styles.css';

const App = (props) => {
  return (
    <div className="container-main">
      <Posts />
      <UserInput />
    </div>
  );
};

export default App;
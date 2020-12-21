import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './Components/Join';
import Chat from './Components/Chat';
import './App.css';

export default function App () {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  )
}
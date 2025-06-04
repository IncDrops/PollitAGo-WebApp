import React from 'react';
import './App.css';
import firebase from './firebase'; // this stays
import PollCreator from './PollCreator';
import PollList from './PollList';

function App() {
  return (
    <div className="App">
      <h1>PollItAGo</h1>
      <PollCreator />
      <PollList />
    </div>
  );
}

export default App;

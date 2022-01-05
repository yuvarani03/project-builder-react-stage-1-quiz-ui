import React from 'react';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';
import './App.css';

function App() {
  return (
    <div className="App">
    <HomeComponent/>
    <QuizComponent/>
    <ResultComponent/>
    </div>
  );
}

export default App;

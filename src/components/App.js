import React from 'react';
import './App.css';
import Header from './Header';
import Diary from './Diary';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/"><Diary /></Route>
    </BrowserRouter>
  );
}

export default App;

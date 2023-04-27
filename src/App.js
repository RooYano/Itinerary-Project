import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddLocPage from './pages/AddLocPage';
import EditLocationPage from './pages/EditLocationPage';
import {useState} from  'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { computeHeadingLevel } from '@testing-library/react';

function App() {

  const [locationToEdit, setLocationToEdit] = useState();


  return (
    
    <div className="App">
      <Router>
        <div className="App-header">
          <Header />
          <Navigation />
          <Routes>
          <Route path="/" element={<HomePage setLocationToEdit = {setLocationToEdit}/>}>
          </Route>
            
          <Route path="/add-loc" element = {<AddLocPage />}>
          </Route>
          <Route path="/edit-location" element = {<EditLocationPage locationToEdit = {locationToEdit}/>}>
          </Route>
          </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
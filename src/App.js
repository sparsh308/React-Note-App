import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,

  
} from "react-router-dom";
import './App.css';

import Header from './components/Header'
import NotesListpage from './pages/NotesListpage';
import NotePage from './pages/NotePage'
function App() {
  return (
   <Router>

<div className="container dark">
  <div className="app">
     <Header/>
 
    <Routes>
    <Route path='/' exact element={<NotesListpage/>}></Route>
    <Route path='/Note/:id' exact element={<NotePage/>}></Route>

  </Routes>
  </div>
  </div>
   </Router>

    

     
    
  
  );
}

export default App;

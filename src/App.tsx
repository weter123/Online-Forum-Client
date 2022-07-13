import React from 'react';
import './App.css';
import Home from "./components/routes/Home";
import { Route, Routes} from 'react-router-dom';


function App() {
  
  return (

    <Routes>
      <Route  path="/" element = {<Home  />} />
      <Route path="/categorythreads/:categoryId" element = {<Home  />} />
    </Routes>

   
   
  );
}


export default App;

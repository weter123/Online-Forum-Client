import React from 'react';
import './App.css';
import Main from './components/areas/Main'
import SideBar from './components/areas/sidebar/SideBar';
import Nav from './components/areas/Nav';
import RightMenu from './components/areas/RightMenu';
import LeftMenu from './components/areas/LeftMenu';
function App() {
  return (
    <div className="App">
     <Nav />
     <SideBar />
     <LeftMenu />
     <Main />
     <RightMenu />
    
     
    </div>
  );
}

export default App;

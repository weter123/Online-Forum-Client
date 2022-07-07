import React from 'react';
import './App.css';
import Main from './components/Main'
import SideBar from './components/sidebar/SideBar';
import Nav from './components/Nav';
import RightMenu from './components/RightMenu';
import LeftMenu from './components/LeftMenu';
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

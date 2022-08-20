import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';
import MainHome from './components/MainHome';
// import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Haeundae from './components/Haeundae';



// const Home = styled.div`
//   width: 1440px;
//   margin: auto;
// `


function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/haeundae' element={<Haeundae />} />
      </Routes>
      </Router>
    </div>    
  );
}

export default App;

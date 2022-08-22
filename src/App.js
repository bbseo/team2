import './App.css';
import MainHome from './components/MainHome';
import HomeApp from './components/AppHome';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heaundae from './components/Haeundae';
import Jingu from './components/Jingu';
function App() {
  return (
    <>
    {/* <Jingu /> */}
    {/* <Users /> */}
   
    {/* <Foods/> */}

    <Router>
      <Routes>
      <Route path='/' element={<MainHome/>} />
      <Route path='/heaundae' element={<Heaundae />} />
      <Route path='/jingu' element={<Jingu />} />
      </Routes>
    </Router>

   
   
    </>
  );
}

export default App;

import './App.css';
// import HomePage from './components/HomePage';
// import Users from './components/Users';
// import Jingu from './components/Jingu';
// import Foods from './components/Foods';
import HomePage1 from './components/Homepage1';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heaundae from './components/Haeundae';
import TestContent from './components/TestContent';
function App() {
  return (
    <>
    {/* <Jingu /> */}
    {/* <Users /> */}
   
    {/* <Foods/> */}

    <Router>
      <Routes>
      <Route path='/' element={<HomePage1 />} />
      <Route path='/heaundae' element={<Heaundae />} />
      <Route path='/jingu' element={<TestContent />} />
      </Routes>
    </Router>

    
   
    </>
  );
}

export default App;

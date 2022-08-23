import './App.css';
import MainHome from './components/MainHome';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Heaundae from './components/Haeundae';
import Jingu from './components/Jingu';
import WishList from './components/WishList';





function App() {
  
  
  return (
    <>
    {/* <Jingu /> */}
    {/* <Users /> */}
   
    {/* <Foods/> */}

    <Router>
      <Routes>
        <Route path='/' element={<MainHome/>} />
        <Route path='/heaundae' element={<Heaundae/>} />
        <Route path='/jingu' element={<Jingu />} /> 
        <Route path='/wishList' element={<WishList />} />     
      </Routes>
    </Router>

    {/* <WishList /> */}

    
   
    </>
  );
}

export default App;

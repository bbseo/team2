import './App.css';
import MainHome from './components/MainHome';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Heaundae from './components/Haeundae';
import Jingu from './components/Jingu';
import Namgu from './components/Namgu'
import Suyoung from './components/Suyoung';
import WishList from './components/WishList';
import SearchPage from './components/SearchPage';







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
        <Route path='/namgu' element={<Namgu />} /> 
        <Route path='/suyoung' element={<Suyoung />} /> 
        <Route path='/wishList' element={<WishList />} />
        <Route path='/search' element={<SearchPage/>} />    
      </Routes>
    </Router>

    {/* <WishList /> */}

    
   
    </>
  );
}

export default App;

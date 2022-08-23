import './App.css';
import MainHome from './components/MainHome';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Heaundae from './components/Haeundae';
import Jingu from './components/Jingu';
import WishList from './components/WishList';
import Namgu from './components/Namgu';
import Suyoung  from './components/Suyoung';
import SearchPage  from './components/SearchPage';
import { useState } from 'react';
import Gangsegu from './components/Gangsegu';




function App() {
  const [wishid, setWishid]=useState()

  // console.log(wishid);
  
  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<MainHome/>} />
        <Route path='/heaundae' element={<Heaundae setWishid={setWishid}/>} />
        <Route path='/jingu' element={<Jingu setWishid={setWishid} />} /> 
        <Route path='/wishList' element={<WishList wishid={wishid}/>} /> 
        <Route path='/namgu' element={<Namgu setWishid={setWishid} />} /> 
        <Route path='/suyoung' element={<Suyoung setWishid={setWishid} />} /> 
        <Route path='/gangsegu' element={<Gangsegu setWishid={setWishid} />} /> 
        <Route path='/search' element={<SearchPage/>} />    
      </Routes>
    </Router>
  



    
   
    </>
  );
}

export default App;

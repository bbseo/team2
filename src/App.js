import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import MainHome from './components/MainHome';
import Heaundae from './pages/Haeundae';
import Jingu from './pages/Jingu';
import WishList from './components/WishList';
import Namgu from './pages/Namgu';
import Suyoung  from './pages/Suyoung';
import SearchPage  from './components/SearchPage';
import Gangseo from './pages/Gangseo';
import Gijang from './pages/Gijang';
import Yeongdo from './pages/Yeongdo';
import Saha from './pages/Saha';
import Junggu from './pages/Junggu';
import Dongnae from './pages/Dongnae';
import Yeonjae from './pages/Yeonje';
import Sasang from './pages/Sasang';

function App() {
  const [wishid, setWishid]=useState();
  
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
        <Route path='/gangsegu' element={<Gangseo setWishid={setWishid} />} /> 
        <Route path='/gijanggun' element={<Gijang setWishid={setWishid} />} /> 
        <Route path='/yeongdo' element={<Yeongdo setWishid={setWishid} />} /> 
        <Route path='/sahagu' element={<Saha setWishid={setWishid} />} /> 
        <Route path='/junggu' element={<Junggu setWishid={setWishid} />} /> 
        <Route path='/donglae' element={<Dongnae setWishid={setWishid} />} /> 
        <Route path='/yeanjaegu' element={<Yeonjae setWishid={setWishid} />} /> 
        <Route path='/sasanggu' element={<Sasang setWishid={setWishid} />} /> 
        <Route path='/search' element={<SearchPage/>} />    
      </Routes>
    </Router>
   
    </>
  );
}

export default App;

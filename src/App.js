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
  
    // 위시리스트 콘텐츠 id 값
  const [wishid, setWishid]=useState();
    // wishLists
  const [wishItem, setWishItem] = useState([]);
  
  const onAdd = (myWish) => {
    setWishItem([...wishItem, myWish]);
  };
  
  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<MainHome/>} />
        <Route path='/wishList' element={<WishList wishid={wishid} wishItem={wishItem} />} /> 
        <Route path='/heaundae' element={<Heaundae setWishid={setWishid} onAdd={onAdd} />} />
        <Route path='/jingu' element={<Jingu setWishid={setWishid} onAdd={onAdd} />} /> 
        <Route path='/namgu' element={<Namgu setWishid={setWishid} onAdd={onAdd} />} /> 
        <Route path='/suyoung' element={<Suyoung setWishid={setWishid} onAdd={onAdd} />} /> 
        <Route path='/gangsegu' element={<Gangseo setWishid={setWishid} onAdd={onAdd} />} /> 
        <Route path='/gijanggun' element={<Gijang setWishid={setWishid} onAdd={onAdd} />} /> 
        <Route path='/yeongdo' element={<Yeongdo setWishid={setWishid} onAdd={onAdd} />} /> 
        <Route path='/sahagu' element={<Saha setWishid={setWishid} onAdd={onAdd}/>} /> 
        <Route path='/junggu' element={<Junggu setWishid={setWishid} onAdd={onAdd} />}  /> 
        <Route path='/donglae' element={<Dongnae setWishid={setWishid} onAdd={onAdd} />} /> 
        <Route path='/yeanjaegu' element={<Yeonjae setWishid={setWishid} onAdd={onAdd} />} /> 
        <Route path='/sasanggu' element={<Sasang setWishid={setWishid} onAdd={onAdd} />} /> 
        <Route path='/search' element={<SearchPage/>} />    
      </Routes>
    </Router>
   
    </>
  );
}

export default App;

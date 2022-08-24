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
import Gijanggun from './components/Gijanggun';
import Yeongdo from './components/Yeongdo';
import Sahagu from './components/Shagu';
import Junggu from './components/Junggu';
import Donglae from './components/Donglae';
import Yeanjaegu from './components/Yeanjaegu';
import Sasanggu from './components/Sasanggu';
import FoodsLists from "./dataBase/FoodLists.json";


function App() {
  // 위시리스트 콘텐츠 id 값
  const [wishid, setWishid]=useState();


  // wishLists
  const [wishItem, setWishItem] = useState([]);

  const onAdd = (newwish) => {
    setWishItem([...wishItem, newwish]);
  }
  console.log(wishItem);

  
  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<MainHome/>} />
        <Route path='/heaundae' element={<Heaundae setWishid={setWishid} onAdd={onAdd}/>} />
        <Route path='/jingu' element={<Jingu setWishid={setWishid} onAdd={onAdd}/>} /> 
        <Route path='/wishList' element={<WishList wishid={wishid} wishItem={wishItem}/>} /> 
        <Route path='/namgu' element={<Namgu setWishid={setWishid} onAdd={onAdd}/>} /> 
        <Route path='/suyoung' element={<Suyoung setWishid={setWishid} onAdd={onAdd}/>} /> 
        <Route path='/gangsegu' element={<Gangsegu setWishid={setWishid} onAdd={onAdd}/>} /> 
        <Route path='/gijanggun' element={<Gijanggun setWishid={setWishid} onAdd={onAdd}/>} /> 
        <Route path='/yeongdo' element={<Yeongdo setWishid={setWishid} onAdd={onAdd}/>} /> 
        <Route path='/sahagu' element={<Sahagu setWishid={setWishid} onAdd={onAdd}/>} /> 
        <Route path='/junggu' element={<Junggu setWishid={setWishid} onAdd={onAdd}/>} /> 
        <Route path='/donglae' element={<Donglae setWishid={setWishid} onAdd={onAdd}/>} /> 
        <Route path='/yeanjaegu' element={<Yeanjaegu setWishid={setWishid} onAdd={onAdd}/>} /> 
        <Route path='/sasanggu' element={<Sasanggu setWishid={setWishid} onAdd={onAdd}/>} /> 
        <Route path='/search' element={<SearchPage/>} />    
      </Routes>
    </Router>
  



    
   
    </>
  );
}

export default App;

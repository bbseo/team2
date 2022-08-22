import './App.css';
import MainHome from './components/MainHome';
import HomeApp from './components/AppHome';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Heaundae from './components/Haeundae';
import Jingu from './components/Jingu';
import FoodHeader from './components/FoodHeader';
import Imfo from './components/Imfo';
import WishList from './components/WishList';
const Layout = () => {
  return (
    <div>
      <FoodHeader />
      <Outlet />
      

    </div>
  )
}

function App() {
  return (
    <>
    {/* <Jingu /> */}
    {/* <Users /> */}
   
    {/* <Foods/> */}

    <Router>
      <Routes>
      <Route index element={<MainHome/>} />
      <Route path='/' element={<Layout/>}>
        <Route path='/heaundae' element={<Heaundae />} />
        <Route path='/jingu' element={<Jingu />} />
      </Route>
      </Routes>
    </Router>

    {/* <Imfo /> */}
    {/* <WishList /> */}

    
   
    </>
  );
}

export default App;

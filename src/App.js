import './App.css';
import MainHome from './components/MainHome';
import HomeApp from './components/AppHome';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Haeundae from './components/Haeundae';
import Jingu from './components/Jingu';
import FoodHeader from './components/FoodHeader';
import Imfo from './components/Imfo';
import WishList from './components/WishList';
import SearchPage from './components/SearchPage';


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
        <Route path='/haeundae' element={<Haeundae />} />
        <Route path='/jingu' element={<Jingu />} />
        <Route path='/search' element={<SearchPage/>} />
      </Route>
      </Routes>
    </Router>

    {/* <Imfo /> */}
    {/* <WishList /> */}

    
   
    </>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Header/Navbar'
import Home from './components/Home/Home';
import Menu from './components/Menu/Menus';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/menu' element={<Menu></Menu>}></Route>
      <Route path='/gallery' element={<Gallery></Gallery>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      
    </Routes>
    <Footer></Footer>
    </>
  );

}

export default App;

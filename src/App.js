
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Header/Navbar'
import Home from './components/Home/Home';
import Menu from './components/Menu/Menus';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import Notifications from './components/Dashboard/Notifications';
import SingleItem from './Pages/SingleItem';
import Profile from './components/Dashboard/Profile';
import NotFound from './components/NotFound/NotFound';
import User from './components/Dashboard/User';
import AddItem from './components/Dashboard/AddItem';

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
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/profile' element={<Profile></Profile>}></Route>
      <Route path='/singleitem/:id' element={<SingleItem></SingleItem>}></Route>


      <Route path='/dashboard' element={<Dashboard></Dashboard>}>
        <Route index element={<MyOrders></MyOrders>}></Route>
        <Route path='notifications' element={<Notifications></Notifications>}></Route>
        <Route path='user' element={<User></User>}></Route>
        <Route path='additem' element={<AddItem></AddItem>}></Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer/>
    </>
  );

}

export default App;

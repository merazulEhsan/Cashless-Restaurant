
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
import RequireAdmin from './components/Auth/RequireAdmin';
import RequireAuth from './components/Auth/RequireAuth';
import { ManageItems } from './components/Dashboard/ManageItems';
import { AllOrders } from './components/Dashboard/AllOrders';
import IndexDash from './components/Dashboard/IndexDash';
import useChef from './components/Hooks/useChef';
import DeliveredItems from './components/Dashboard/DeliveredItems';

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
      <Route path='/profile' element={<RequireAuth><Profile></Profile></RequireAuth>}></Route>
      <Route path='/singleitem/:id' element={<RequireAuth><SingleItem></SingleItem></RequireAuth>}></Route>


      <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
        <Route path='indexdash' element={<RequireAdmin><IndexDash></IndexDash></RequireAdmin>}></Route>
        <Route index element={<MyOrders></MyOrders>}></Route>
        <Route path='notifications' element={<Notifications></Notifications>}></Route>
        <Route path='user' element={<RequireAdmin><User></User></RequireAdmin>}></Route>
        <Route path='additem' element={<RequireAdmin><AddItem></AddItem></RequireAdmin>}></Route>
        <Route path='manageitems' element={<RequireAdmin><ManageItems></ManageItems></RequireAdmin>}></Route>
        <Route path='allorders' element={<RequireAdmin><AllOrders></AllOrders></RequireAdmin>}></Route>
        <Route path='delivered' element={<RequireAdmin><DeliveredItems/></RequireAdmin>}></Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer/>
    </>
  );

}

export default App;

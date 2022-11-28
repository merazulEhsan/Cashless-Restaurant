
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
import DeliveredItems from './components/Dashboard/DeliveredItems';
import Review from './components/Dashboard/Review';
import Reservation from './components/Dashboard/Reservations';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import useChef from './components/Hooks/useChef';
import Payment from './components/Dashboard/Payment';

function App() {
  const [user] = useAuthState(auth);
  const [chef] = useChef(user);
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/profile' element={<RequireAuth><Profile/></RequireAuth>}></Route>
      <Route path='/singleitem/:id' element={<RequireAuth><SingleItem/></RequireAuth>}></Route>

      <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
        {chef ? <Route index element={<RequireAdmin><IndexDash/></RequireAdmin>}></Route>: <Route index element={<MyOrders></MyOrders>}></Route>}
        <Route path='notifications' element={<Notifications/>}></Route>
        <Route path='review' element={<Review/>}></Route>
        <Route path='user' element={<RequireAdmin><User/></RequireAdmin>}></Route>
        <Route path='additem' element={<RequireAdmin><AddItem/></RequireAdmin>}></Route>
        <Route path='manageitems' element={<RequireAdmin><ManageItems/></RequireAdmin>}></Route>
        <Route path='allorders' element={<RequireAdmin><AllOrders/></RequireAdmin>}></Route>
        <Route path='delivered' element={<RequireAdmin><DeliveredItems/></RequireAdmin>}></Route>
        <Route path='reservations' element={<RequireAdmin><Reservation/></RequireAdmin>}></Route>
        <Route path='payment/:id' element={<Payment/>}></Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer/>
    </>
  );

}

export default App;

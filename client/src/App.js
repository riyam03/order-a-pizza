import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import Signup from './components/SignUp'
import Login from './components/Login'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import PizzaMap from './PizzaHome/HomeScreen';
import CartScreen from './PizzaHome/CartScreen';
import OrderScreen from './PizzaHome/OrderScreen';
import AdminScreen from './PizzaHome/AdminScreen';
function App() {
  return (
    <div className="Container">
      <BrowserRouter>
      <div className='header'>
        <Header />
      </div>

        <Routes>
       
          <Route  path="/signup" element={<Signup />} exact/>
          <Route  path="/*" element={<Signup />} exact/>
         
          <Route path="/login" element={<Login />} exact/>
          <Route path="/admin/*" element={<AdminScreen />} />
          <Route path="/home" element={<Home />} exact/>
          <Route path="/cart" element={<CartScreen />} exact/>
          <Route path="/pizzamap" element={<PizzaMap />} exact/>
          <Route path="/orders" element={<OrderScreen />} exact/>
          <Route path="/about" element={<About />} exact/>
          <Route path="/contact" element={<Contact />} exact/>

        </Routes>


      </BrowserRouter>

      
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

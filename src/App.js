import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './LoginPopup/LoginPopup';


function App() {

  const[showlogin, setShowlogin] = useState(false)
  
  return (
    <>
    {showlogin ? <LoginPopup setShowlogin={setShowlogin} /> : <></>}
    <div className='app'>
     <Navbar setShowlogin={setShowlogin}/>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/cart' element={<Cart />} />
       <Route path='/order' element={<PlaceOrder />} />
     </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;

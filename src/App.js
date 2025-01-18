import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/home/home';
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';

import ExploreMune from './Component/ExploreMune/ExploreMune';
import React from 'react';
import CategoryDetails from './Component/CategoryDetail/CategoryDetails';
import Slider from './Component/Slider/Slider';

function App() {
  const [category, setCategory] = React.useState('All');
  return (
    <>
    <div className="App">
   
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element= {<About />} />
    <Route path='/slider' element = {<Slider />} />
    <Route path='/services' element = {<ExploreMune category={category} setCategory={setCategory}  />} />
    <Route path="/category/:categoryName" element={<CategoryDetails />} />
   </Routes>
   <Footer />
    </div>
    </>
  );
}

export default App;

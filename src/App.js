import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;

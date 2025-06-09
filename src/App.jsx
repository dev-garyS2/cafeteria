import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
     
        <Header />
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      
    </div>
  );
}

export default App;





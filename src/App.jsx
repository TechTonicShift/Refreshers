import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ColorSchemesExample from './components/Navbar';
import Nothinghere from './components/Nothinghere';
import DataFetchingComponent from './components/DataFetchingComponent';
import ProductPage from './components/ProductPage';
import TextExample from './components/ProductCatalogue';

function App() {
  return (
    <Router>
    <ColorSchemesExample/>
    {/* <DataFetchingComponent/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/prod' element={<DataFetchingComponent/>}/>
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="*" element={<Nothinghere/>} />
      </Routes>
    </Router>
  );
}

export default App;

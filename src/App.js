import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Slider from './components/slider';
import PdfViewer from './components/pdfViewer';

import { BrowserRouter, Route, Routes} from 'react-router-dom';


const App = () => {
    return (
      
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/pdfViewer" element={<PdfViewer />} />
        </Routes>
      </BrowserRouter>
      
    );
  };
  
  export default App;
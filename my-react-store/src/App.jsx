import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Top Import
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuantityPicker from './components/QuantityPicker';
import Catalog from './pages/Catalog';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import "bootstrap/dist/css/bootstrap.min.css"

// Middle Logic
function App() {

  return (
    <BrowserRouter>
    <div className='app'>
      <Navbar />

      <main className='container py-4'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

//Bottom export
export default App

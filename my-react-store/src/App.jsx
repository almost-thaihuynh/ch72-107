// Top Import
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuantityPicker from './components/QuantityPicker';
import Catalog from './pages/Catalog';

// Middle Logic
function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="main-content">
        <h1>Welcome to My Online Store</h1>
        <p>Discover amazing products at incredible prices.</p>
        {/* this is just and example */}
      <Catalog/>

      <QuantityPicker/>
      </main>
      <Footer />
    </div>
  );
}

//Bottom export
export default App

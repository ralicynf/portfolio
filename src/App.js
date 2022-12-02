import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

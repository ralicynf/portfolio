import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage';
import AboutMe from './components/AboutMe';
import Projects from './pages/Projects';


function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path='/ralicyn.github.io' element={<Home />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pessoas from './pages/Pessoas';
import Pesquisa from './pages/Pesquisa';
import Publicacoes from './pages/Publicacoes';
import Contato from './pages/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pessoas" element={<Pessoas />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
          <Route path="/publicacoes" element={<Publicacoes />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
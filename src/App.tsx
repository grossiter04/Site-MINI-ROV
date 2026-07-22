import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Equipe from './pages/equipe';
import Pesquisa from './pages/Pesquisa';
import Publicacoes from './pages/Publicacoes';
import Contato from './pages/Contato';
import Eventos from './pages/Eventos';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
          <Route path="/publicacoes" element={<Publicacoes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
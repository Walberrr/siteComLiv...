import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Planos from './pages/Planos';
import Sobre from './pages/Sobre';
import ComoFunciona from './pages/ComoFunciona';
import Cadastrar from './pages/Cadastrar';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comofunciona" element={<ComoFunciona />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

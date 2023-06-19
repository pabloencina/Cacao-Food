import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Clientes from './pages/Clientes';

function App() {
  return (
    <BrowserRouter>
      <header>
        {/* NavBar */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path='/clientes' element={<Clientes />} />
        </Routes>
      </main>
      <footer>
        {/* footer */}
      </footer>
    </BrowserRouter>
  );
}

export default App;

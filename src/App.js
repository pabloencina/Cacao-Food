import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import NavbarComponent from "./Components/Navbar/Navbar";
import SaladSection from "./Components/Menu/SaladSection";
import DessertsSection from "./Components/Menu/DessertsSection";
import CreamsSection from "./Components/Menu/CreamsSection";
import DrinksSection from "./Components/Menu/DrinksSection";
import Contactanos from "./Components/Contactanos/Contactanos";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.scss";
import Home from "./Components/Inicio/Home";
import Nosotros from "./Components/Nuestra-Historia/Nosotros";
import Clientes from "./Components/Clientes/Clientes";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ensaladas" element={<SaladSection />} />
        <Route path="/postres" element={<DessertsSection />} />
        <Route path="/cremas" element={<CreamsSection />} />
        <Route path="/bebidas" element={<DrinksSection />} />
        <Route path="/nuestra-historia" element={<Nosotros />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import NavbarComponent from "./Components/Navbar/Navbar";
import SaladSection from "./Components/Menu/SaladSection";
import DessertsSection from "./Components/Menu/DessertsSection";
import CreamsSection from "./Components/Menu/CreamsSection";
import DrinksSection from "./Components/Menu/DrinksSection";
import Contactanos from "./Components/Menu/Contactanos";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.scss";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Clientes from "./pages/Clientes";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ensaladas" element={<SaladSection />} />
        <Route path="/postres" element={<DessertsSection />} />
        <Route path="/cremas" element={<CreamsSection />} />
        <Route path="/bebidas" element={<DrinksSection />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>
      <header>{/* NavBar */}</header>
      <main></main>
      <footer>{/* footer */}</footer>
    </BrowserRouter>
  );
}

export default App;

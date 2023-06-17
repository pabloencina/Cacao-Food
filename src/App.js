import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import NavbarComponent from "./Components/Navbar/Navbar";
import SaladSection from "./Components/Menu/SaladSection";
import DessertsSection from "./Components/Menu/DessertsSection";
import CreamsSection from "./Components/Menu/CreamsSection";
import DrinksSection from "./Components/Menu/DrinksSection";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/ensaladas" element={<SaladSection />} />
        <Route path="/postres" element={<DessertsSection />} />
        <Route path="/cremas" element={<CreamsSection />} />
        <Route path="/bebidas" element={<DrinksSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

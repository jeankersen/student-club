import { BrowserRouter, Routes, Route } from "react-router-dom";


import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Accueil from "./pages/Accueil.jsx";
import Projet from "./pages/Projet.jsx";
import Commanditaires from "./pages/Commanditaires.jsx";
import Histoire from "./pages/Histoire.jsx";
import Competitions from "./pages/Competitions.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/commanditaires" element={<Commanditaires />} />
        <Route path="/histoire" element={<Histoire />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

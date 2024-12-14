import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

import data from "./data/data";
import NotFound404 from "./pages/NotFound404";
import Contacts from "./pages/contacts/Contacts";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

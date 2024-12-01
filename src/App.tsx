import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
    </BrowserRouter>
  );
}

export default App;

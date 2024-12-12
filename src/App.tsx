import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import { Home } from "./components/home/Home";
import data from "./data/data";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home data={data} />
    </BrowserRouter>
  );
}

export default App;

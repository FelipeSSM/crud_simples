import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Funcionarios from "./components/Funcionarios";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
function App() {
  return (
    <div className="App">
      <h1>Meu Frontend</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/funcionarios">Cadastro de Funcionarios</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/funcionarios" element={<Funcionarios />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

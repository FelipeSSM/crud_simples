import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Funcionarios from "./components/Funcionarios";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
function App() {
  return (
    <div className="App">
      <h1>Meu Frontend</h1>
      <BrowserRouter>
        <Nav variant="tabs">
          <Nav.Link as={Link} to="/">
            Pagina Inicial
          </Nav.Link>
          <Nav.Link as={Link} to="/funcionarios">
            Cadastro de Funcionarios
          </Nav.Link>
          <Nav.Link as={Link} to="/sobre">
            Sobre
          </Nav.Link>
        </Nav>

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

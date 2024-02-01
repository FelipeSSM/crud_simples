import React from "react";
import { Table } from "react-bootstrap";
class Usuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:1234/usuario")
      .then((response) => response.json())
      .then((dados) => {
        this.setState({ usuarios: dados });
      });
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Cpf</th>
            <th>Endereço</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {this.state.usuarios.map((usuario) => (
            <tr>
              <td> {usuario.NOME_USUARIO}</td>
              <td> {usuario.EMAIL_USUARIO}</td>
              <td> {usuario.CPF_USUARIO}</td>
              <td> {usuario.ENDERECO_USUARIO}</td>
              <td>Atualizar, Excluir</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Usuarios;

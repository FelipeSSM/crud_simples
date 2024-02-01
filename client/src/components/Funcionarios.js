import React from "react";
import { Table } from "react-bootstrap";
class Funcionarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: [],
    };
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
          <tr>
            <td>Felipe</td>
            <td>Felipe20@email.com</td>
            <td>15478544203</td>
            <td>Rua tal 420 tres fodacezoes</td>
            <td>Atualizar, Excluir</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Funcionarios;

import React from "react";
import { Table } from "react-bootstrap";
class Funcionarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      funcionarios: [
        {
          ID_USUARIO: 1,
          NOME_USUARIO: "Felipe",
          EMAIL_USUARIO: "email@email.com",
          CPF_USUARIO: "15456233854",
          ENDERECO_USUARIO: "RUA RAFAEL, 120, TRES CORACOES",
          STATUS_USUARIO: "ATIVO",
        },
        {
          ID_USUARIO: 2,
          NOME_USUARIO: "Rafael",
          EMAIL_USUARIO: "email2@email2.com",
          CPF_USUARIO: "12345678987",
          ENDERECO_USUARIO: "RUA FELIPE, 120, TRES CORACOES",
          STATUS_USUARIO: "ATIVO",
        },
        {
          ID_USUARIO: 2,
          NOME_USUARIO: "Rafael",
          EMAIL_USUARIO: "email2@email2.com",
          CPF_USUARIO: "12345678987",
          ENDERECO_USUARIO: "RUA FELIPE, 120, TRES CORACOES",
          STATUS_USUARIO: "ATIVO",
        },
      ],
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
          {this.state.funcionarios.map((funcionario) => (
            <tr>
              <td> {funcionario.NOME_USUARIO}</td>
              <td> {funcionario.EMAIL_USUARIO}</td>
              <td> {funcionario.CPF_USUARIO}</td>
              <td> {funcionario.ENDERECO_USUARIO}</td>
              <td>Atualizar, Excluir</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Funcionarios;

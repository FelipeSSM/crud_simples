import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
class Usuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "",
      cep: "",
    };
  }

  componentDidMount() {
    this.buscarUsuarios();
  }

  buscarUsuarios = () => {
    fetch("http://localhost:1234/usuario")
      .then((response) => response.json())
      .then((dados) => {
        this.setState({ usuarios: dados });
      });
  };

  deletarUsuario = (id) => {
    fetch("http://localhost:1234/usuario/" + id, { method: "DELETE" }).then(
      (response) => {
        if (response.ok) {
          this.buscarUsuarios();
        }
      }
    );
  };

  cadastrarUsuario = (usuario) => {
    fetch("http://localhost:1234/usuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    }).then((response) => {
      if (response.ok) {
        this.buscarUsuarios();
      }
    });
  };

  atualizaNome = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };

  atualizaEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  atualizaCpf = (e) => {
    this.setState({
      cpf: e.target.value,
    });
  };

  atualizaEndereco = (e) => {
    this.setState({
      endereco: e.target.value,
    });
  };

  atualizaCidade = (e) => {
    this.setState({
      cidade: e.target.value,
    });
  };

  atualizaEstado = (e) => {
    this.setState({
      estado: e.target.value,
    });
  };

  atualizaCep = (e) => {
    this.setState({
      cep: e.target.value,
    });
  };

  submit = () => {
    const usuario = {
      NOME_USUARIO: this.state.nome,
      EMAIL_USUARIO: this.state.email,
      CPF_USUARIO: this.state.cpf,
      ENDERECO_USUARIO: `${this.state.endereco}, ${this.state.cidade}, ${this.state.estado}, ${this.state.cep}`,
    };

    console.log(usuario);
    this.cadastrarUsuario(usuario);
  };

  renderTabela() {
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
              <td>
                Atualizar,
                <Button
                  variant="danger"
                  onClick={() => this.deletarUsuario(usuario.ID_USUARIO)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  renderForm() {
    return (
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="name"
              placeholder="Digite seu nome aqui!"
              value={this.state.nome}
              onChange={this.atualizaNome}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email aqui!"
              value={this.state.email}
              onChange={this.atualizaEmail}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              placeholder="XXXXXXXXX-XX"
              value={this.state.cpf}
              onChange={this.atualizaCpf}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEndereco">
          <Form.Label>Endereco</Form.Label>
          <Form.Control
            placeholder="Rua, Numero"
            value={this.state.endereco}
            onChange={this.atualizaEndereco}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCidade">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              value={this.state.cidade}
              onChange={this.atualizaCidade}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEstado">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              defaultValue="RJ"
              value={this.state.estado}
              onChange={this.atualizaEstado}
            >
              <option>AC</option>
              <option>AL</option>
              <option>AP</option>
              <option>AM</option>
              <option>BA</option>
              <option>CE</option>
              <option>DF</option>
              <option>ES</option>
              <option>GO</option>
              <option>MA</option>
              <option>MT</option>
              <option>MS</option>
              <option>MG</option>
              <option>PA</option>
              <option>PB</option>
              <option>PR</option>
              <option>PE</option>
              <option>PI</option>
              <option>RJ</option>
              <option>RN</option>
              <option>RS</option>
              <option>RO</option>
              <option>RR</option>
              <option>SC</option>
              <option>SP</option>
              <option>SE</option>
              <option>TO</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCep">
            <Form.Label>CEP</Form.Label>
            <Form.Control value={this.state.cep} onChange={this.atualizaCep} />
          </Form.Group>
        </Row>

        <Button variant="primary" type="button" onClick={this.submit}>
          Enviar
        </Button>
      </Form>
    );
  }

  render() {
    return (
      <div>
        <br />
        <Button
          variant="primary"
          className="button-novo"
          onClick={this.abrirModalInserir}
        >
          Cadastrar Usuario
        </Button>
        {this.renderTabela()}
        {this.renderForm()}
      </div>
    );
  }
}

export default Usuarios;

import React from "react";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
class Usuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      usuarios: [],
      usuariosDesativados: [],
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "",
      cep: "",
      modalAberto: false,
      filtro: "",
    };
  }

  componentDidMount() {
    this.buscarUsuarios(this.state.filtro);
  }

  buscarUsuarios = (valor) => {
    this.setState({
      filtro: valor,
    });

    if (valor === "") {
      valor = "null";
    }

    fetch("http://localhost:1234/usuario/filtro/" + valor)
      .then((response) => response.json())
      .then((dados) => {
        this.setState({ usuarios: dados });
      });

    fetch("http://localhost:1234/usuario/desativados")
      .then((response) => response.json())
      .then((dados2) => {
        this.setState({ usuariosDesativados: dados2 });
      });
  };

  deletarUsuario = (id) => {
    fetch("http://localhost:1234/usuario/" + id, { method: "DELETE" }).then(
      (response) => {
        if (response.ok) {
          this.buscarUsuarios(this.state.filtro);
        }
      }
    );
  };

  ativarUsuario = (id) => {
    fetch("http://localhost:1234/usuario/ativar/" + id, {
      method: "PUT",
    }).then((response) => {
      if (response.ok) {
        this.buscarUsuarios(this.state.filtro);
      }
    });
  };

  desativarUsuario = (id) => {
    fetch("http://localhost:1234/usuario/desativar/" + id, {
      method: "PUT",
    }).then((response) => {
      if (response.ok) {
        this.buscarUsuarios(this.state.filtro);
      }
    });
  };

  carregarDados = (id) => {
    fetch("http://localhost:1234/usuario/" + id, { method: "GET" })
      .then((response) => response.json())
      .then((usuario) => {
        const arrayEndereco = usuario[0].ENDERECO_USUARIO.split(",");

        this.setState({
          id: usuario[0].ID_USUARIO,
          nome: usuario[0].NOME_USUARIO,
          email: usuario[0].EMAIL_USUARIO,
          cpf: usuario[0].CPF_USUARIO,
          endereco: arrayEndereco[0],
          cidade: arrayEndereco[1],
          estado: arrayEndereco[2],
          cep: arrayEndereco[3],
        });
        this.abrirModal();
      });
  };

  cadastrarUsuario = (usuario) => {
    fetch("http://localhost:1234/usuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    }).then((response) => {
      if (response.ok) {
        this.buscarUsuarios(this.state.filtro);
      }
    });
  };

  atualizarUsuario = (usuario) => {
    fetch("http://localhost:1234/usuario/" + usuario.ID_USUARIO, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    }).then((response) => {
      if (response.ok) {
        this.buscarUsuarios(this.state.filtro);
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
    if (this.state.id === 0) {
      const usuario = {
        NOME_USUARIO: this.state.nome,
        EMAIL_USUARIO: this.state.email,
        CPF_USUARIO: this.state.cpf,
        ENDERECO_USUARIO: `${this.state.endereco}, ${this.state.cidade}, ${this.state.estado}, ${this.state.cep}`,
      };
      this.cadastrarUsuario(usuario);
    } else {
      const usuario = {
        ID_USUARIO: this.state.id,
        NOME_USUARIO: this.state.nome,
        EMAIL_USUARIO: this.state.email,
        CPF_USUARIO: this.state.cpf,
        ENDERECO_USUARIO: `${this.state.endereco}, ${this.state.cidade}, ${this.state.estado}, ${this.state.cep}`,
      };
      this.atualizarUsuario(usuario);
    }
    this.fecharModal();
  };

  reset = () => {
    this.setState({
      id: 0,
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "",
      cep: "",
    });
    this.abrirModal();
  };

  fecharModal = () => {
    this.setState({
      modalAberto: false,
    });
  };

  abrirModal = () => {
    this.setState({
      modalAberto: true,
    });
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
                <Button
                  variant="secondary"
                  onClick={() => this.carregarDados(usuario.ID_USUARIO)}
                >
                  Atualizar
                </Button>
                ,
                <Button
                  variant="warning"
                  onClick={() => this.desativarUsuario(usuario.ID_USUARIO)}
                >
                  Desativar
                </Button>
                ,
                <Button
                  variant="danger"
                  onClick={() => this.deletarUsuario(usuario.ID_USUARIO)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
          ,
          {this.state.usuariosDesativados.map((usuario) => (
            <tr>
              <td style={{ backgroundColor: "gray" }}>
                {" "}
                {usuario.NOME_USUARIO + " (DESATIVADO)"}
              </td>
              <td style={{ backgroundColor: "gray" }}>
                {" "}
                {usuario.EMAIL_USUARIO}
              </td>
              <td style={{ backgroundColor: "gray" }}>
                {" "}
                {usuario.CPF_USUARIO}
              </td>
              <td style={{ backgroundColor: "gray" }}>
                {" "}
                {usuario.ENDERECO_USUARIO}
              </td>
              <td style={{ backgroundColor: "gray" }}>
                ,
                <Button
                  variant="warning"
                  onClick={() => this.ativarUsuario(usuario.ID_USUARIO)}
                >
                  Ativar Usuario
                </Button>
                ,
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

  filtro(ev) {
    this.buscarUsuarios(ev);
  }

  render() {
    console.log(this.state.filtro);
    return (
      <div>
        <Modal show={this.state.modalAberto} onHide={this.fecharModal}>
          <Modal.Header closeButton>
            <Modal.Title>Dados do Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridNome">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="name"
                    value={this.state.id}
                    readOnly={true}
                  />
                </Form.Group>

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
                  <Form.Control
                    value={this.state.cep}
                    onChange={this.atualizaCep}
                  />
                </Form.Group>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.fecharModal}>
              Fechar
            </Button>
            <Button variant="primary" type="button" onClick={this.submit}>
              Enviar
            </Button>
          </Modal.Footer>
        </Modal>

        <br />
        <Button variant="warning" type="button" onClick={this.reset}>
          Novo
        </Button>
        <input
          type="text"
          value={this.state.filtro}
          onChange={(ev) => this.filtro(ev.target.value)}
        ></input>
        {this.renderTabela()}
      </div>
    );
  }
}

export default Usuarios;

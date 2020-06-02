import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_color.svg";
import axios from "axios";
import api from "@services";

import { Form, Container } from "./styles";

export class SignInComponent extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    // if (!email || !password) {
    //   this.setState({ error: "Preencha e-mail e senha para continuar!" });
    // } else {
    //  try {
    //const response = await api.post("/sessions", { email, password });
     //   this.props("/listDragon");
    //  } catch (err) {
    //    this.setState({
     //     error:
     //       "Houve um problema com o login, verifique suas credenciais. :-("
     //   });
     // }
   // }
  };

  render() {
    return (
      <Container>
        <Form>
          <img src={Logo} alt="Woop logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button onClick={window.location.href = "/listDragon"}>Entrar</button>
          <hr />
          {/* <Link to="/signup">Criar conta grátis</Link> */}
        </Form>
      </Container>
    );
  }
}
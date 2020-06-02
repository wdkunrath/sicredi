import React, {  Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_color.svg";
import { Form, Container } from "./styles";

export class SignUpComponent extends Component{   
  // handleSignUp = async (e) => {  
  //   e.preventDefault();    
  //   const db = new Dexie('FormDatabase');
  //   const [names, setNames] = useState({ username:'', email: '', password: '' })
  //   const setName = id => value => {
    
  //     db.formData.put({ id, value })
      
  //     setNames(prevNames => ({ ...prevNames, [id]: value }))
  //   }
    
  //   useEffect(
  //     () => {
  //       db.version(1).stores({ formData: 'id,value' })
    
  //       db.transaction('rw', db.formData, async () => {
  //         const dbUsername = await db.formData.get('username')
  //         const dbEmail = await db.formData.get('email')
  //         const dbPassword = await db.formData.get('password')
    
  //         if (!dbUsername) await db.formData.add({ id: 'username', value: '' })
  //         if (!dbEmail) await db.formData.add({ id: 'email', value: '' })
  //         if (!dbPassword) await db.formData.add({ id: 'password', value: '' })
    
  //         setNames({
  //           username: dbUsername ? dbUsername.value: '',
  //           email: dbEmail ? dbEmail.value : '',
  //           lastname: dbPassword ? dbPassword.value : ''
  //         })
  //       }).catch(e => {
  //         console.log(e.stack || e)
  //       })
    
  //       return () => db.close()
  //     },
  //     [db]
  //   )
  
  //   setName('username')('')
  //   setName('email')('')
  //   setName('password')('')    
  // }

  rende() {  
    return (
      <Container>
        <Form>
          <img src={Logo} alt="Woop logo" />
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
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
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}
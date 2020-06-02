import React, { Component } from "react";
import axios from "axios";
import { ContainerInterna, Buscar , Cadastrar, Table, Icon} from "./styles";
import Modal from 'react-awesome-modal';
import { ModalDragon } from "@components";
import { API} from '@services';
import Logo from "../assets/logo_color.svg";
import Delete from "../assets/delete.svg";
import Edit from "../assets/edit.svg";
import View from "../assets/view.svg";

export class ListaDragonComponent extends Component {
  constructor(props) {
      super(props)
      this.state = {
          visible : false,
          status : '',
          idDragonOp: '',
          dragon: [],
      }

      const api = new API();
  }
  
  openModal(status,id) {
    this.setState({
        visible : true,
        status:{status},
        idDragonOp:{id}
    }) 
  }

  closeModal() {
      this.setState({
          visible : false
      });
  }

  handleSubmitClick = () => {
    const busca = this._request.value

    this.setState({ isLoadingTable: true }, () =>
      this.getRequest(busca).then(() =>
        this.setState({ isLoadingTable: false }, () => {
          this.resultElement.current.scrollIntoView({
            behavior: 'smooth'
          })
        })
      )
    )
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      this.handleSubmitClick()
    }
  } 

  componentDidMount(){
    axios.get(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon`)
    .then(resp => { 
      const dragon = resp.data;      
      this.setState ({dragon})            
    });
  }
  
  render() {

    const listDragon = this.state.dragon.sort(function(a, b) {
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
      }).map((dragons, i) => {
      return(
        <tr key={i}>
          <td>{dragons.name}</td>
          <td>{dragons.type}</td>
          <td>
            <Icon>
              <a type="button" value="Open" onClick={() => this.openModal("visualisar", `${dragons.id}`)}><img src={View} alt="View" /></a>
              <a type="button" value="Open" onClick={() => this.openModal("editar", `${dragons.id}`)}><img src={Edit} alt="Edit"/></a>
              <a type="button" value="Open" onClick={() => this.openModal("deletar", `${dragons.id}`)} ><img src={Delete} alt="Delete" /></a> 
            </Icon>
          </td>
        </tr>  
      )    
    });  

    return (
        <ContainerInterna>
          <Buscar>  
            <img src={Logo} alt="Woop logo" />        
            <input
              type="text"
              placeholder="Digite sua busca"
              onChange={e => this.setState({ busca: e.target.value })}
            />
            <ul>
              <li>
                <button onClick={() => {
                    if (this._request.value) {
                      this.handleSubmitClick()
                    } else {
                      alert('Nada foi encontrada')
                    }
                  }}
                  type="button">
                  Buscar
                </button>
              </li>
              <li><Cadastrar title="Cadastrar" onClick={() => this.openModal("cadastrar", null)}>+</Cadastrar></li>
            </ul>
          </Buscar> 
          <Table>
            <tr>
              <th>Dragon's Name</th>
              <th>Elemental Type</th>
              <th></th>
            </tr>
            {listDragon}            
        </Table>   
        <Modal 
          visible={this.state.visible}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()} 
          closeModal="teste"        
        >          
          <ModalDragon
            id= {this.state.idDragonOp}
            value = {this.state.status} 
            dragons = {this.state.dragon}
          />              
        </Modal>
                          
      </ContainerInterna>      
    );
  }
}

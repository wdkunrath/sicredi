import  React from 'react';
import axios from "axios";
import { Section,FormModal, ContainerInterna} from "./styles";

export function ModalDragon(props,closeModal){     
    const state = {
        status: props.value.status,
        idDragon:props.id.id,  
        name:'',
        type:''
    }
    const [name,setName] = React.useState(state.name)
    const [type,setType] = React.useState(state.type)

    const setN = (event) => {
        setName(event.target.value)
    }
    const setT = (event) => {
        setType(event.target.value)
    }
    const id = state.idDragon;
    const status = state.status;  
    
    function cadastrar(){
        axios({
            method: 'post',
            url: `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon`,
            data: {
                name:state.name,
                type: state.type,
            }
        });
    }
    
    function deletar(id){
        axios({
            method: 'delete',
            url: `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`
        });
        setTimeout(() => {
            window.location.reload();
        }, 800)
    }

    function editar(id){   
        axios({
            method: 'put',
            url: `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`,
            data: {
                name:state.name,
                type: state.type,
            }
        });
    }

    const dados = axios({
        method: 'get',
        url: `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`,
        responseType: 'json',
        responseEncoding: 'utf8'
    }).then((response) => {
        return response.data;
    })

    return (
        <ContainerInterna>
            <Section>
            <h1>{state.status === "editar" ? 'Editar': state.status === "deletar" ? 'Deletar': state.status === "cadastrar" ? 'Cadastrar':'Visualisar'}</h1>
            <FormModal onSubmit={status == 'editar'? () => editar(id) : ()=> cadastrar()}>
                {state.status === "editar"  || state.status === "cadastrar" || state.status === "visualisar" ? ( 
                    <>
                    {state.status === "visualisar" ? (
                        <div>
                            <label htmlFor="name">Name</label>    
                            <p>{name}</p>
                            <label htmlFor="type">Type</label>  
                            <p>{type}</p>   
                            <label htmlFor="visualisar">Data de Criação</label>  
                            <p></p> {/*{createdAt}*/} 
                        </div>        
                    ) : (
                        <div>
                            <label htmlFor="name">Name</label>    
                            <input
                                name ="name"
                                id="name"
                                type="text"
                                value={name} 
                                onChange={(e) => setN(e)}
                            />
                            <label htmlFor="type">Type</label>  
                            <input
                                name ="type"
                                id ="type"
                                type="text"
                                value={type}
                                onChange={(e) => setT(e)}
                            />   
                            <label htmlFor="visualisar" title={status === "visualisar"? 'visualisar' : 'editar'}>Data de Criação</label>  
                            <input
                                defaultValue=''
                                title={status === "visualisar"? 'visualisar' : 'editar'}
                                id ="visualisar"
                                type="text"
                                readOnly={true}
                            />                                                                               
                            <button type="submit" title={status === "visualisar"? 'visualisar' : 'editar'}>{status === "editar" ? 'Editar': 'Cadastrar'}</button>  
                        </div>
                    )}
                </>
            ):(
               <div>
                   <p>Deseja deletar?</p>
                   <button type="button" onClick={()=> deletar(id)}>Excluir</button>
                </div>
            )}
            </FormModal>              
            {/* <a href="javascript:void(0);" onClick={closeModal}>Close</a> */}
            </Section>
        </ContainerInterna>
    ) 
}

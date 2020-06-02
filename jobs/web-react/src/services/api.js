import { UserTrackingService } from "@services";

export class API extends UserTrackingService{
  constructor(){
     super('dragon'); 
  }

  async detalhar(id, config) {
    const data = await super.get(`/${id}`, config)
    return data
  }
 
  async listar(){
    return  super.get('');
  }  

  cadastrar(json) {
    return super.post('', {
      name: json.name,
      type: json.type
    })
  }

  deletar(id) {
    return super.delete(`${id}`).then(response => {
      console.log(response)
    })  
  }

  editar(json) {
    console.log(json)
    const dados = super.put(`/${json.id}`, {
      name: json.name,
      type: json.type
    }).then(res =>{
      return res.data;
    })
  }
}
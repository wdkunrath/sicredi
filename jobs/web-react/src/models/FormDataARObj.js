export class FormDataARObj {
  constructor(Obj) {
    if (Obj) {
      this._ar = Obj
    } else {
      this._ar = {
        acsSubsequentes: [],
        cnpj: '',
        contato: {
          celular: '',
          email: '',
          emailConfirmacao: '',
          telefone: ''
        },
        endereco: {
          bairro: '',
          cep: '',
          cidade: '',
          complemento: '',
          logradouro: '',
          numero: '',
          pais: 'Brasil',
          uf: ''
        },
        id: '',
        nomeFantasia: '',
        nomeITI: '',
        nomeResponsavel: '',
        razaoSocial: '',
        sequencial: null,
        sigla: '',
        status: '',
        tipo: '',
        urlComercioEletronico: ''
      }
    }
    this.postAR = () => {
      let ar = {
        acsSubsequentes: this._ar.acsSubsequentes,
        cnpj: this._ar.cnpj,
        contato: {
          celular: this._ar.contato.celular,
          email: this._ar.contato.email,
          emailConfirmacao: this._ar.contato.emailConfirmacao,
          telefone: this._ar.contato.telefone
        },
        endereco: {
          bairro: this._ar.endereco.bairro,
          cep: this._ar.endereco.cep,
          cidade: this._ar.endereco.cidade,
          complemento: this._ar.endereco.complemento,
          logradouro: this._ar.endereco.logradouro,
          numero: this._ar.endereco.numero,
          pais: 'Brasil',
          uf: this._ar.endereco.uf
        },
        nomeFantasia: this._ar.nomeFantasia,
        nomeITI: this._ar.nomeITI,
        nomeResponsavel: this._ar.nomeResponsavel,
        razaoSocial: this._ar.razaoSocial,
        sigla: this._ar.sigla,
        tipo: this._ar.tipo,
        urlComercioEletronico: this._ar.urlComercioEletronico
      }

      return ar
    }
    this.patchAR = () => {
      let ar = this._ar

      return ar
    }
    this.schemaAR = () => {
      return {
        acsSubsequentes: this._ar.acsSubsequentes,
        cnpj: this._ar.cnpj,
        celular: this._ar.contato.celular,
        email: this._ar.contato.email,
        emailConfirmacao: this._ar.contato.emailConfirmacao,
        telefone: this._ar.contato.telefone,
        nomeITI: this._ar.nomeITI,
        bairro: this._ar.endereco.bairro,
        cep: this._ar.endereco.cep,
        cidade: this._ar.endereco.cidade,
        complemento: this._ar.endereco.complemento,
        uf: this._ar.endereco.uf,
        logradouro: this._ar.endereco.logradouro,
        numero: this._ar.endereco.numero,
        pais: 'Brasil',
        nomeFantasia: this._ar.nomeFantasia,
        nomeResponsavel: this._ar.nomeResponsavel,
        razaoSocial: this._ar.razaoSocial,
        status: this._ar.status,
        tipo: this._ar.tipo,
        sigla: this._ar.sigla,
        urlComercioEletronico: this._ar.urlComercioEletronico
      }
    }
    this.schemaConverter = (schema) => {
      this._ar.acsSubsequentes = schema.acsSubsequentes;
      this._ar.cnpj = schema.cnpj;
      this._ar.contato.celular = schema.celular;
      this._ar.contato.email = schema.email;
      this._ar.contato.emailConfirmacao = schema.emailConfirmacao;
      this._ar.contato.telefone = schema.telefone;
      this._ar.nomeITI = schema.nomeITI;
      this._ar.endereco.bairro = schema.bairro;
      this._ar.endereco.cep = schema.cep;
      this._ar.endereco.cidade = schema.cidade;
      this._ar.endereco.complemento = schema.complemento;
      this._ar.endereco.uf = schema.uf;
      this._ar.endereco.logradouro = schema.logradouro;
      this._ar.endereco.numero = schema.numero;
      this._ar.endereco.pais = schema.pais;
      this._ar.idExterno = schema.idExterno;
      this._ar.nomeFantasia = schema.nomeFantasia;
      this._ar.nomeResponsavel = schema.nomeResponsavel;
      this._ar.razaoSocial = schema.razaoSocial;
      this._ar.status = schema.status;
      this._ar.urlAc = schema.urlAc;
    }
  }
  get ar() {
    return this._ar
  }
  set ar(newValue) {
    this._ac = newValue
  }
}

FormDataARObj.transform = (array) => array.map((el) => new FormDataARObj(el))

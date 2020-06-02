export class FormDataAC2Obj {
  constructor(Obj) {
    if (Obj) {
      this._ac = Obj
    } else {
      this._ac = {
        acIntermediaria: {
          id: ''
        },
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
        idExterno: '',
        motivo: '',
        nomeFantasia: '',
        nomeITI: '',
        nomeResponsavel: '',
        razaoSocial: '',
        sequencial: null,
        status: '',
        urlAc: ''
      }
    }
    this.postAC = () => {
      let ac = {
        acIntermediaria: this._ac.acIntermediaria,
        cnpj: this._ac.cnpj,
        contato: {
          celular: this._ac.contato.celular,
          email: this._ac.contato.email,
          emailConfirmacao: this._ac.contato.emailConfirmacao,
          telefone: this._ac.contato.telefone
        },
        nomeITI: this._ac.nomeITI,
        endereco: {
          bairro: this._ac.endereco.bairro,
          cep: this._ac.endereco.cep,
          cidade: this._ac.endereco.cidade,
          complemento: this._ac.endereco.complemento,
          uf: this._ac.endereco.uf,
          logradouro: this._ac.endereco.logradouro,
          numero: this._ac.endereco.numero,
          pais: 'Brasil'
        },
        idExterno: this._ac.idExterno,
        nomeFantasia: this._ac.nomeFantasia,
        nomeResponsavel: this._ac.nomeResponsavel,
        razaoSocial: this._ac.razaoSocial,
        urlAc: this._ac.urlAc
      }

      return ac
    }
    this.patchAC = () => {
      return { ...this._ac }
    }
    this.schemaAC = () => {
      return {
        acIntermediaria: this._ac.acIntermediaria.id,
        cnpj: this._ac.cnpj,
        celular: this._ac.contato.celular,
        email: this._ac.contato.email,
        emailConfirmacao: this._ac.contato.emailConfirmacao,
        telefone: this._ac.contato.telefone,
        nomeITI: this._ac.nomeITI,
        bairro: this._ac.endereco.bairro,
        cep: this._ac.endereco.cep,
        cidade: this._ac.endereco.cidade,
        complemento: this._ac.endereco.complemento,
        uf: this._ac.endereco.uf,
        logradouro: this._ac.endereco.logradouro,
        numero: this._ac.endereco.numero,
        pais: 'Brasil',
        idExterno: this._ac.idExterno,
        nomeFantasia: this._ac.nomeFantasia,
        nomeResponsavel: this._ac.nomeResponsavel,
        razaoSocial: this._ac.razaoSocial,
        status: this._ac.status,
        urlAc: this._ac.urlAc
      }
    }
    this.schemaConverter = (schema) => {
      this._ac.acIntermediaria.id = schema.acIntermediaria;
      this._ac.cnpj = schema.cnpj;
      this._ac.contato.celular = schema.celular;
      this._ac.contato.email = schema.email;
      this._ac.contato.emailConfirmacao = schema.emailConfirmacao;
      this._ac.contato.telefone = schema.telefone;
      this._ac.nomeITI = schema.nomeITI;
      this._ac.endereco.bairro = schema.bairro;
      this._ac.endereco.cep = schema.cep;
      this._ac.endereco.cidade = schema.cidade;
      this._ac.endereco.complemento = schema.complemento;
      this._ac.endereco.uf = schema.uf;
      this._ac.endereco.logradouro = schema.logradouro;
      this._ac.endereco.numero = schema.numero;
      this._ac.endereco.pais = schema.pais;
      this._ac.idExterno = schema.idExterno;
      this._ac.nomeFantasia = schema.nomeFantasia;
      this._ac.nomeResponsavel = schema.nomeResponsavel;
      this._ac.razaoSocial = schema.razaoSocial;
      this._ac.status = schema.status;
      this._ac.urlAc = schema.urlAc;
    }
  }
  get ac() {
    return this._ac
  }
  get acIntermediaria() {
    return this._acIntermediaria
  }
  set ac(newValue) {
    this._ac = newValue
  }
  set acIntermediaria(newValue) {
    this._acIntermediaria = newValue
  }
}

FormDataAC2Obj.transform = (array) => array.map((el) => new FormDataAC2Obj(el))

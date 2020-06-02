export class FormDataUnidadeObj {
  constructor(Obj) {
    if (Obj) {
      this._unidade = Obj
    } else {
      this._unidade = {
        autoridadeRegistro: {
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
        nomeFantasia: '',
        nomeResponsavel: '',
        razaoSocial: '',
        sequencial: null,
        status: ''
      }
    }
    this.postUnidade = () => {
      const unidade = {
        cnpj: this._unidade.cnpj,
        nomeResponsavel: this._unidade.nomeResponsavel,
        nomeFantasia: this._unidade.nomeFantasia,
        razaoSocial: this._unidade.razaoSocial,
        contato: {
          celular: this._unidade.contato.celular,
          email: this._unidade.contato.email,
          emailConfirmacao: this._unidade.contato.emailConfirmacao,
          telefone: this._unidade.contato.telefone
        },
        endereco: {
          bairro: this._unidade.endereco.bairro,
          cep: this._unidade.endereco.cep,
          cidade: this._unidade.endereco.cidade,
          complemento: this._unidade.endereco.complemento,
          uf: this._unidade.endereco.uf,
          logradouro: this._unidade.endereco.logradouro,
          numero: this._unidade.endereco.numero,
          pais: 'Brasil'
        },
        autoridadeRegistro: {
          id: this._unidade.autoridadeRegistro.id
        }
      }

      return unidade
    }
    this.patchUnidade = () => {
      return this._unidade
    }
    this.schemaUnidade = () => {
      return {
        cnpj: this._unidade.cnpj,
        status: this._unidade.status,
        celular: this._unidade.contato.celular,
        email: this._unidade.contato.email,
        emailConfirmacao: this._unidade.contato.emailConfirmacao,
        telefone: this._unidade.contato.telefone,
        bairro: this._unidade.endereco.bairro,
        cep: this._unidade.endereco.cep,
        cidade: this._unidade.endereco.cidade,
        complemento: this._unidade.endereco.complemento,
        logradouro: this._unidade.endereco.logradouro,
        numero: this._unidade.endereco.numero,
        pais: this._unidade.endereco.pais,
        uf: this._unidade.endereco.uf,
        autoridadeRegistro: this._unidade.autoridadeRegistro.id,
        nomeFantasia: this._unidade.nomeFantasia,
        nomeResponsavel: this._unidade.nomeResponsavel,
        razaoSocial: this._unidade.razaoSocial
      }
    }
    this.schemaConverter = (schema) => {
        this._unidade.cnpj = schema.cnpj
        this._unidade.status = schema.status
        this._unidade.contato.celular = schema.celular
        this._unidade.contato.email = schema.email
        this._unidade.contato.emailConfirmacao = schema.emailConfirmacao
        this._unidade.contato.telefone = schema.telefone
        this._unidade.endereco.bairro = schema.bairro
        this._unidade.endereco.cep = schema.cep
        this._unidade.endereco.cidade = schema.cidade
        this._unidade.endereco.complemento = schema.complemento
        this._unidade.endereco.logradouro = schema.logradouro
        this._unidade.endereco.numero = schema.numero
        this._unidade.endereco.pais = schema.pais
        this._unidade.endereco.uf = schema.uf
        this._unidade.autoridadeRegistro.id = schema.autoridadeRegistro
        this._unidade.nomeFantasia = schema.nomeFantasia
        this._unidade.nomeResponsavel = schema.nomeResponsavel
        this._unidade.razaoSocia = schema.razaoSocia
    }
  }

  get unidade() {
    return this._unidade
  }
  set unidade(newValue) {
    this._unidade = newValue
  }
}

FormDataUnidadeObj.transform = (array) =>
  array.map((el) => new FormDataUnidadeObj(el))

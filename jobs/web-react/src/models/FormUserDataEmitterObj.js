export class FormUserDataEmitterObj {
  constructor(Obj) {
    if (Obj) {
      this._solicitacao = Obj
    } else {
      this._solicitacao = {
        agenteRegistro: {
          cpf: '',
          nome: ''
        },
        autoridadeRegistro: {
          cnpj: '',
          id: '',
          nomeFantasia: '',
          sigla: ''
        },
        cliente: {
          contato: {
            celular: '',
            email: '',
            emailConfirmacao: '',
            telefone: ''
          },
          dadosAdicionais: {
            indicioFraude: '',
            indicioFraudeObs: '',
            titular: ''
          },
          endereco: {
            bairro: '',
            cep: '',
            cidade: '',
            complemento: '',
            estado: '',
            logradouro: '',
            numero: '',
            pais: ''
          },
          nome: '',
          pessoaFisica: {
            cei: '',
            cpf: '',
            dataNascimento: '',
            documentoIdentificacao: {
              numero: '',
              orgaoEmissor: '',
              uf: ''
            },
            tituloEleitor: {
              numero: '',
              zona: '',
              secao: '',
              cidade: '',
              uf: ''
            }
          },
          representante: {
            nome: '',
            cpf: '',
            rg: '',
            dataNascimento: '',
            documentoIdentificacao: '',
            orgaoEmissor: '',
            ufDocumento: ''
          },
          pessoaJuridica: {
            cnpj: '',
            nomeFantasia: '',
            razaoSocial: ''
          },
          responsavel: {
            cei: '',
            cidadeTitulo: '',
            cpf: '',
            dataNascimento: '',
            documentoIdentificacao: '',
            estadoTitulo: '',
            nisPisPasepNit: '',
            nome: '',
            orgaoEmissor: '',
            rg: '',
            secao: '',
            tituloEleitor: '',
            ufDocumento: '',
            zona: ''
          }
        },
        codigoPedido: '',
        dataHora: '',
        documentos: [],
        numeroSolicitacao: '',
        pessoaFisica: '',
        produto: {
          codigo: '',
          nome: '',
          validadeDias: ''
        },
        sequencia: null,
        sequenciaSolicitacao: null,
        status: '',
        unidade: {
          id: '',
          nomeUnidade: ''
        }
      }
    }
    this.schemaEmitter = () => {
      return this._solicitacao
    }
    this.patchSolicitacao = () => {
      return { ...this._solicitacao }
    }
  }
  customerPFPJ() {
    return {
      cliente: {
        contato: {
          celular: '',
          email: '',
          emailConfirmacao: '',
          telefone: ''
        },
        dadosAdicionais: {
          indicioFraude: 'NAO',
          indicioFraudeObs: '',
          titularIncapaz: 'CAPAZ'
        },
        endereco: {
          bairro: '',
          cep: '',
          cidade: '',
          complemento: '',
          uf: '',
          logradouro: '',
          numero: '',
          pais: ''
        },
        nome: '',
        pessoaFisica: {
          cei: '',
          cpf: '',
          dataNascimento: '',
          representante: {
            nome: '',
            cpf: '',
            rg: '',
            dataNascimento: '',
            documentoIdentificacao: {
              numero: '',
              orgaoEmissor: '',
              uf: ''
            }
          }
        },
        pessoaJuridica: {
          cnpj: '',
          nomeFantasia: '',
          razaoSocial: '',
          responsavel: {
            cpf: '',
            dataNascimento: '',
            documentoIdentificacao: {
              numero: '',
              orgaoEmissor: '',
              uf: ''
            },
            nisPisPasepNit: '',
            nome: ''
          }
        }
      }
    }
  }
  get solicitacao() {
    return this._solicitacao
  }
  set solicitacao(newValue) {
    this._solicitacao = newValue
  }
}
FormUserDataEmitterObj.transform = (array) => array.map((el) => new FormUserDataEmitterObj(el))

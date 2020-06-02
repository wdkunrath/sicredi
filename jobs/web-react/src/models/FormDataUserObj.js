export class FormDataUserObj {
  constructor(Obj) {
    if (Obj) {
      this._user = Obj
    } else {
      this._user = {
        agenteRegistro: {
          anoConclusao: '',
          cnpjEmpregador: '',
          dataConclusao: '',
          dataNascimento: '',
          endereco: {
            bairro: '',
            cep: '',
            cidade: '',
            complemento: '',
            logradouro: '',
            numero: '',
            pais: '',
            uf: ''
          },
          entidadeTreinamento: '',
          escolaridade: '',
          idExternoHawa: '',
          instituicaoEnsino: '',
          modalidadeTreinamento: '',
          nomeMae: '',
          nomePai: '',
          numeroCTPS: '',
          rg: {
            numero: '',
            orgaoEmissor: '',
            uf: ''
          },
          serialNumberCertificado: '',
          serieCTPS: '',
          tituloEleitor: {
            cidade: '',
            numero: '',
            secao: '',
            uf: '',
            zona: ''
          }
        },
        cargo: '',
        contato: {
          celular: '',
          email: '',
          emailConfirmacao: '',
          telefone: ''
        },
        cpf: '',
        id: '',
        nome: '',
        nomeSocial: '',
        perfil: '',
        status: '',
        vinculo: {
          id: '',
          tipo: ''
        }
      }
    }
    this.postUser = () => {
      if (this._user.perfil === 'AGR') {
        return {
          agenteRegistro: {
            anoConclusao: this._user.agenteRegistro.anoConclusao,
            cnpjEmpregador: this._user.agenteRegistro.cnpjEmpregador,
            dataConclusao: this._user.agenteRegistro.dataConclusao,
            dataNascimento: this._user.agenteRegistro.dataNascimento,
            endereco: {
              bairro: this._user.agenteRegistro.endereco.bairro,
              cep: this._user.agenteRegistro.endereco.cep,
              cidade: this._user.agenteRegistro.endereco.cidade,
              complemento: this._user.agenteRegistro.endereco.complemento,
              logradouro: this._user.agenteRegistro.endereco.logradouro,
              numero: this._user.agenteRegistro.endereco.numero,
              pais: this._user.agenteRegistro.endereco.pais,
              uf: this._user.agenteRegistro.endereco.uf
            },
            entidadeTreinamento: this._user.agenteRegistro.entidadeTreinamento,
            escolaridade: this._user.agenteRegistro.escolaridade,
            idExternoHawa: this._user.agenteRegistro.idExternoHawa,
            instituicaoEnsino: this._user.agenteRegistro.instituicaoEnsino,
            modalidadeTreinamento: this._user.agenteRegistro.modalidadeTreinamento,
            nomeMae: this._user.agenteRegistro.nomeMae,
            nomePai: this._user.agenteRegistro.nomePai,
            numeroCTPS: this._user.agenteRegistro.numeroCTPS,
            rg: {
              numeroRG: this._user.agenteRegistro.rg.numeroRG,
              orgaoEmissor: this._user.agenteRegistro.rg.orgaoEmissor,
              uf: this._user.agenteRegistro.rg.uf
            },
            serialNumberCertificado: this._user.agenteRegistro.serialNumberCertificado,
            serieCTPS: this._user.agenteRegistro.serieCTPS,
            tituloEleitor: {
              cidade: this._user.agenteRegistro.tituloEleitor.cidade,
              numero: this._user.agenteRegistro.tituloEleitor.numero,
              secao: this._user.agenteRegistro.tituloEleitor.secao,
              uf: this._user.agenteRegistro.tituloEleitor.uf,
              zona: this._user.agenteRegistro.tituloEleitor.zona
            }
          },
          cargo: this._user.cargo,
          contato: {
            celular: this._user.contato.celular,
            email: this._user.contato.email,
            emailConfirmacao: this._user.contato.emailConfirmacao,
            telefone: this._user.contato.telefone
          },
          cpf: this._user.cpf,
          nome: this._user.nome,
          nomeSocial: this._user.nomeSocial,
          perfil: this._user.perfil,
          vinculo: {
            id: this._user.vinculo.id,
            tipo: this._user.vinculo.tipo
          }
        }
      } else {
        return {
          cargo: this._user.cargo,
          contato: {
            celular: this._user.contato.celular,
            email: this._user.contato.email,
            emailConfirmacao: this._user.contato.emailConfirmacao,
            telefone: this._user.contato.telefone
          },
          cpf: this._user.cpf,
          nome: this._user.nome,
          nomeSocial: this._user.nomeSocial,
          perfil: this._user.perfil,
          vinculo: {
            id: this._user.vinculo.id,
            tipo: this._user.vinculo.tipo
          }
        }
      }
    }
    this.patchUser = () => {
      return { ...this._user }
    }
    this.schemaAGRUser = () => {
      return {
        anoConclusao: this._user.agenteRegistro.anoConclusao,
        cnpjEmpregador: this._user.agenteRegistro.cnpjEmpregador,
        dataConclusao: this._user.agenteRegistro.dataConclusao,
        dataNascimento: this._user.agenteRegistro.dataNascimento,
        bairro: this._user.agenteRegistro.endereco.bairro,
        cep: this._user.agenteRegistro.endereco.cep,
        cidade: this._user.agenteRegistro.endereco.cidade,
        complemento: this._user.agenteRegistro.endereco.complemento,
        logradouro: this._user.agenteRegistro.endereco.logradouro,
        numero: this._user.agenteRegistro.endereco.numero,
        pais: this._user.agenteRegistro.endereco.pais,
        uf: this._user.agenteRegistro.endereco.uf,
        entidadeTreinamento: this._user.agenteRegistro.entidadeTreinamento,
        escolaridade: this._user.agenteRegistro.escolaridade,
        idExternoHawa: this._user.agenteRegistro.idExternoHawa,
        instituicaoEnsino: this._user.agenteRegistro.instituicaoEnsino,
        modalidadeTreinamento: this._user.agenteRegistro.modalidadeTreinamento,
        nomeMae: this._user.agenteRegistro.nomeMae,
        nomePai: this._user.agenteRegistro.nomePai,
        numeroCTPS: this._user.agenteRegistro.numeroCTPS,
        numeroRG: this._user.agenteRegistro.rg.numero,
        orgaoEmissor: this._user.agenteRegistro.rg.orgaoEmissor,
        ufRG: this._user.agenteRegistro.rg.uf,
        serialNumberCertificado: this._user.agenteRegistro.serialNumberCertificado,
        serieCTPS: this._user.agenteRegistro.serieCTPS,
        cidadeTitulo: this._user.agenteRegistro.tituloEleitor.cidade,
        numeroTitulo: this._user.agenteRegistro.tituloEleitor.numero,
        secao: this._user.agenteRegistro.tituloEleitor.secao,
        ufTitulo: this._user.agenteRegistro.tituloEleitor.uf,
        zona: this._user.agenteRegistro.tituloEleitor.zona,
        cargo: this._user.cargo,
        celular: this._user.contato.celular,
        email: this._user.contato.email,
        emailConfirmacao: this._user.contato.emailConfirmacao,
        telefone: this._user.contato.telefone,
        status: this._user.status,
        cpf: this._user.cpf,
        nome: this._user.nome,
        nomeSocial: this._user.nomeSocial,
        perfil: this._user.perfil,
        vinculoId: this._user.vinculo.id,
        vinculoTipo: this._user.vinculo.tipo
      }
    }
    this.schemaCommonUser = () => {
      return {
        cpf: this._user.cpf,
        nome: this._user.nome,
        nomeSocial: this._user.nomeSocial,
        cargo: this._user.cargo,
        status: this._user.status,
        telefone: this._user.contato.telefone,
        celular: this._user.contato.celular,
        email: this._user.contato.email,
        emailConfirmacao: this._user.contato.emailConfirmacao,
        vinculoId: this._user.vinculo.id,
        vinculoTipo: this._user.vinculo.tipo,
        perfil: this._user.perfil
      }
    }
    this.schemaConverter = (schema) => {
      if (schema.perfil !== 'AGR') {
        this._user.cpf = schema.cpf
        this._user.nome = schema.nome
        this._user.cargo = schema.cargo
        this._user.status = schema.status
        this._user.contato.telefone = schema.telefone
        this._user.contato.celular = schema.celular
        this._user.contato.email = schema.email
        this._user.contato.emailConfirmacao = schema.emailConfirmacao
        this._user.vinculo.id = schema.vinculoId
        this._user.vinculo.tipo = schema.vinculoTipo
        this._user.perfil = schema.perfil
      } else {
        this._user.agenteRegistro.anoConclusao = schema.anoConclusao
        this._user.agenteRegistro.cnpjEmpregador = schema.cnpjEmpregador
        this._user.agenteRegistro.dataConclusao = schema.dataConclusao
        this._user.agenteRegistro.dataNascimento = schema.dataNascimento
        this._user.agenteRegistro.endereco.bairro = schema.bairro
        this._user.agenteRegistro.endereco.cep = schema.cep
        this._user.agenteRegistro.endereco.cidade = schema.cidade
        this._user.agenteRegistro.endereco.complemento = schema.complemento
        this._user.agenteRegistro.endereco.logradouro = schema.logradouro
        this._user.agenteRegistro.endereco.numero = schema.numero
        this._user.agenteRegistro.endereco.pais = schema.pais
        this._user.agenteRegistro.endereco.uf = schema.uf
        this._user.agenteRegistro.entidadeTreinamento = schema.entidadeTreinamento
        this._user.agenteRegistro.escolaridade = schema.escolaridade
        this._user.agenteRegistro.idExternoHawa = schema.idExternoHawa
        this._user.agenteRegistro.instituicaoEnsino = schema.instituicaoEnsino
        this._user.agenteRegistro.modalidadeTreinamento = schema.modalidadeTreinamento
        this._user.agenteRegistro.nomeMae = schema.nomeMae
        this._user.agenteRegistro.nomePai = schema.nomePai
        this._user.agenteRegistro.numeroCTPS = schema.numeroCTPS
        this._user.agenteRegistro.rg.numero = schema.numeroRG
        this._user.agenteRegistro.rg.orgaoEmissor = schema.orgaoEmissor
        this._user.agenteRegistro.rg.uf = schema.ufRG
        this._user.agenteRegistro.serialNumberCertificado = schema.serialNumberCertificado
        this._user.agenteRegistro.serieCTPS = schema.serieCTPS
        this._user.agenteRegistro.tituloEleitor.cidade = schema.cidadeTitulo
        this._user.agenteRegistro.tituloEleitor.numero = schema.numeroTitulo
        this._user.agenteRegistro.tituloEleitor.secao = schema.secao
        this._user.agenteRegistro.tituloEleitor.uf = schema.ufTitulo
        this._user.agenteRegistro.tituloEleitor.zona = schema.zona
        this._user.cargo = schema.cargo
        this._user.contato.celular = schema.celular
        this._user.contato.email = schema.email
        this._user.contato.emailConfirmacao = schema.emailConfirmacao
        this._user.contato.telefone = schema.telefone
        this._user.cpf = schema.cpf
        this._user.nome = schema.nome
        this._user.nomeSocial = schema.nomeSocial
        this._user.perfil = schema.perfil
        this._user.vinculo.id = schema.vinculoId
        this._user.vinculo.tipo = schema.vinculoTipo
      }
    }
  }
  get user() {
    return this._user
  }
  set user(newValue) {
    this._user = newValue
  }
}
FormDataUserObj.transform = (array) => array.map((el) => new FormDataUserObj(el))

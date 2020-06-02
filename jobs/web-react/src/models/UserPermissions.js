export class UserPermissions {
  constructor(Obj) {
    if (Obj) {
      this._user = Obj.usuario
      this._permissions = {
        dashboard: this.correctJSON(Obj.permissoes.dashboard),
        emissao: this.correctJSON(Obj.permissoes.emissao),
        cadastro: this.correctJSON(Obj.permissoes.cadastro),
        relatorios: this.correctJSON(Obj.permissoes.relatorios),
        plataformaEad: this.correctJSON(Obj.permissoes.plataformaEAD),
        renovacaoOnline: this.correctJSON(Obj.permissoes.renovacaoOnline),
        manuais: this.correctJSON(Obj.permissoes.manuais),
        ac1: this.correctJSON(Obj.permissoes.ac1),
        ac2: this.correctJSON(Obj.permissoes.ac2),
        consultar: this.correctJSON(Obj.permissoes.consultar),
        revogar: this.correctJSON(Obj.permissoes.revogar),
        AR: this.correctJSON(Obj.permissoes.ar),
        Unidade: this.correctJSON(Obj.permissoes.unidade),
        Usuarios: this.correctJSON(Obj.permissoes.usuarios),
        configuracoes: this.correctJSON(Obj.permissoes.configuracoes),
        Maquina: this.correctJSON(Obj.permissoes.maquina),
        Permissoes: this.correctJSON(Obj.permissoes.permissoes),
        verificar: this.correctJSON(Obj.permissoes.verificar),

        login: {
          visualizar: true,
          alterar: false,
          excluir: false
        },
        notFound: {
          visualizar: true,
          alterar: false,
          excluir: false
        },
        permissionDenied: {
          visualizar: true,
          alterar: false,
          excluir: false
        }
      }
    }
  }
  getPropriety(string) {
    switch (true) {
      case string === 'Dashboard':
        return this.permissions.dashboard.visualizar
      case string === 'Emissão':
        return this.permissions.emissao.visualizar
      case string === 'Cadastro':
        return this.permissions.cadastro.visualizar
      case string === 'Relatórios':
        return this.permissions.relatorios.visualizar
      case string === 'Plataforma EAD':
        return this.permissions.plataformaEad.visualizar
      case string === 'Renovação Online':
        return this.permissions.renovacaoOnline.visualizar
      case string === 'Manuais':
        return this.permissions.renovacaoOnline.visualizar
      case string === 'AC1':
        return this.permissions.renovacaoOnline.visualizar
      case string === 'AC2':
        return this.permissions.renovacaoOnline.visualizar
      case string === 'AC Raiz':
        return this.permissions.renovacaoOnline.visualizar
      case string === 'Consultar':
        return this.permissions.renovacaoOnline.visualizar
        case string === 'Revogar':
          return this.permissions.renovacaoOnline.visualizar
      case string === 'AR':
        return this.permissions.manuais.visualizar
      case string === 'Unidade':
        return this.permissions.manuais.visualizar
      case string === 'Usuarios':
        return this.permissions.manuais.visualizar
      case string === 'Configurações':
        return this.permissions.configuracoes.visualizar
      case string === 'Login':
        return this.permissions.login.visualizar
      case string === '404':
        return this.permissions.notFound.visualizar
      case string === 'Permission Denied':
        return this.permissions.permissionDenied.visualizar
      case string === 'Teste PSBIO':
        return this.permissions.psbio.visualizar
      case string === 'Maquina':
        return this.permissions.maquina.visualizar
        case string === 'Permissoes':
          return this.permissions.permissoes.visualizar
      case string === 'Verificar':
        return this.permissions.manuais.verificar
      default:
        console.error('String não cadastrada')
    }
  }
  correctJSON(json) {
    let resp = {}

    if (json) {
      resp.visualizar = json.visualizar || json.alterar || json.excluir ? true : false
      resp.alterar = json.alterar ? true : false
      resp.excluir = json.excluir ? true : false
    } else {
      resp.visualizar = false
      resp.alterar = false
      resp.excluir = false
    }

    return resp
  }
  get user() {
    return this._user
  }
  get permissions() {
    return this._permissions
  }
}

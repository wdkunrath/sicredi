import { UserPermissions } from '@models'
import userMock from '../mocks/userMock'

// TODO: remover mock
let cachedUser = new UserPermissions(userMock)

const MAQUINA_SESSION_KEY = 'MAQUINA'
const USUARIO_SESSION_KEY = 'USUARIO'
const TOKEN_SESSION_KEY = 'TOKEN'

export class SessionService {
  get maquina() {
    return window.sessionStorage.getItem(MAQUINA_SESSION_KEY)
  }

  set maquina(value) {
    window.sessionStorage.setItem(MAQUINA_SESSION_KEY, value)
  }

  get token() {
    return window.sessionStorage.getItem(TOKEN_SESSION_KEY)
  }

  set token(value) {
    window.sessionStorage.setItem(TOKEN_SESSION_KEY, value)
  }

  get usuario() {
    return window.sessionStorage.getItem(USUARIO_SESSION_KEY)
  }

  set usuario(value) {
    window.sessionStorage.setItem(USUARIO_SESSION_KEY, value)
  }

  get userTrackingData() {
    return {
      maquina: this.maquina,
      usuario: this.usuario
    }
  }

  // TODO: validar estrutura retornada aqui
  get session() {
    return cachedUser
  }
  comparaAgr(cpf) {
    const cpfToken = this.token
    return cpf === atob(cpfToken)
  }
  initialize(token) {
    this.maquina = token.header_maquina
    this.usuario = token.header_usuario
    this.token = token.cpf
  }

  // TODO: validar regra de verificação de autenticação
  isAuthenticated() {
    return !!this.token
  }
}

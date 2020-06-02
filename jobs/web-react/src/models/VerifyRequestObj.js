export class VerifyRequestObj {
  constructor(Obj) {
    if (Obj) {
      this._solicitacao = Obj
    } else {
      this._solicitacao = {
        id: '',
        codigoPedido: '',
        status: '',
        tipoCertificado: '',
        nomeProduto: '',
        nomeAr: '',
        data: '',
        verificador: ''
      }
    }
  }

  get solicitacao() {
    return this._solicitacao
  }

  set status(newStatus) {
    this._solicitacao.status = newStatus;
  }

  set verificador (newVerificador) {
      this._solicitacao.verificador = newVerificador;
  }
}

VerifyRequestObj.transform = (array) =>
  array.map((el) => new VerifyRequestObj(el))

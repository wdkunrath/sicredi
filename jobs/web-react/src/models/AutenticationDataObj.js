export class AutenticationDataObj {
  constructor(Obj) {
    this._maquina = {
      mac: "",
      nomeHost: "",
      osName: "",
    };
    this._pem = "";
  }

  get maquina() {
    return this._maquina;
  }
  set osName(newValue) {
    this._maquina.osName = newValue;
  }
  set mac(newValue) {
    this._maquina.mac = newValue;
  }
  set nomeHost(newValue) {
    this._maquina.nomeHost = newValue;
  }
  get pem() {
    return this._pem;
  }
  set pem(newValue) {
    this._pem = newValue;
  }
  postObj() {
    let postObj = {
      maquina: this.maquina,
      pem: this.pem,
    };

    return postObj;
  }
}

export class FormDataMaquinaObj {
  constructor(Obj) {
    if (Obj) {
      this._maquina = Obj
    } else {
      this._maquina = {
        certificado: '',
        autoridadeRegistro: {
          id: ''
        },
        identificacao: '',
        mac: '',
        memoria: '',
        nomeHost: '',
        numeroSerie: '',
        osName: '',
        patrimonio: '',
        processador: '',
        sistemaOperacional: '',
        status: ''
      }
    }
    this.postMaquina = () => {
      const maquina = {
        autoridadeRegistro: {
          id: this._maquina.autoridadeRegistro.id
        },
        identificacao: this._maquina.identificacao,
        certificado: this._maquina.certificado,
        mac: this._maquina.mac,
        memoria: this._maquina.memoria,
        nomeHost: this._maquina.nomeHost,
        numeroSerie: this._maquina.numeroSerie,
        osName: this._maquina.osName,
        patrimonio: this._maquina.patrimonio,
        processador: this._maquina.processador,
        sistemaOperacional: this._maquina.sistemaOperacional
      }

      return maquina
    }
    this.patchMaquina = () => {
      return this._maquina
    }
    this.schemaMaquina = () => {
      return {
        certificado: this._maquina.certificado,
        autoridadeRegistro: this._maquina.autoridadeRegistro.id,
        identificacao: this._maquina.identificacao,
        mac: this._maquina.mac,
        memoria: this._maquina.memoria,
        nomeHost: this._maquina.nomeHost,
        numeroSerie: this._maquina.numeroSerie,
        osName: this._maquina.osName,
        patrimonio: this._maquina.patrimonio,
        processador: this._maquina.processador,
        sistemaOperacional: this._maquina.sistemaOperacional,
        status: this._maquina.status
      }
    }
    this.schemaConverter = (schema) => {
      this._maquina.certificado = schema.certificado;
      this._maquina.autoridadeRegistro.id = schema.autoridadeRegistro;
      this._maquina.identificacao = schema.identificacao;
      this._maquina.mac = schema.mac;
      this._maquina.memoria = schema.memoria;
      this._maquina.nomeHost = schema.nomeHost;
      this._maquina.numeroSerie = schema.numeroSerie;
      this._maquina.osName = schema.osName;
      this._maquina.patrimonio = schema.patrimonio;
      this._maquina.processador = schema.processador;
      this._maquina.sistemaOperacional = schema.sistemaOperacional;
      this._maquina.status = schema.status;
    }
  }

  get maquina() {
    return this._maquina
  }

  set maquina(newValue) {
    this._maquina = newValue
  }
}

FormDataMaquinaObj.transform = (array) =>
  array.map((el) => new FormDataMaquinaObj(el))

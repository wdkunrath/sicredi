import * as Yup from 'yup'
export const schemaFormMaquina = Yup.object({
  certificado: Yup.string()
    .trim()
    .required('Campo obrigatório'),
  mac: Yup.string()
    .trim()
    .min(17, 'Digite um MAC válido')
    .required('Campo obrigatório'),
  memoria: Yup.string()
    .trim()
    .min(3, 'Digite o tipo de memória')
    .required('Campo obrigatório'),
  nomeHost: Yup.string()
    .trim()
    .min(3, 'O nome do host deve ter pelo menos 3 letras')
    .required('Campo obrigatório'),
  numeroSerie: Yup.string()
    .min(3, 'O número de série deve ter no mínimo três caracteres')
    .required('Campo obrigatório'),
  patrimonio: Yup.string()
    .trim()
    .min(3, 'O número do patrimônio deve ter no mínimo três caracteres')
    .required('Campo obrigatório'),
  processador: Yup.string()
    .trim()
    .min(3, 'Digite o tipo de processador')
    .required('Campo obrigatório'),
  sistemaOperacional: Yup.string()
    .trim()
    .min(3, 'Nome do sistema operacional muito curto')
    .required('Campo obrigatório'),
  osName: Yup.string()
    .trim()
    .min(3, 'Digite um nome maior')
    .required('Campo obrigatório'),
  autoridadeRegistro: Yup.string().required('Campo obrigatório')
})

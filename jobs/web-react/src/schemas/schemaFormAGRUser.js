import * as Yup from 'yup'
import Moment from 'moment'

export const schemaFormAGRUser = Yup.object().shape({
  cpf: Yup.string()
    .trim()
    .min(14, 'CPF deve ter no mínimo 11 dígitos')
    .required('Campo obrigatório'),
  nome: Yup.string()
    .allString('Digite somente letras')
    .when('perfil', {
      is: 'AGR',
      then: Yup.string().required('Campo obrigatório'),
      otherwise: Yup.string().notRequired()
    }),
  telefone: Yup.string()
    .trim()
    .min(13, 'Telefone deve ter no mínimo 10 dígitos')
    .required('Campo obrigatório'),
  celular: Yup.string()
    .trim()
    .min(14, 'Celular deve ter no mínimo 11 dígitos'),
  email: Yup.string()
    .required('Campo obrigatório')
    .email('E-mail inválido'),
  emailConfirmacao: Yup.string()
    .required('Campo obrigatório')
    .oneOf([Yup.ref('email')], 'E-mails diferentes'),
  serialNumberCertificado: Yup.string().required('Campo obrigatório'),
  perfil: Yup.string().required('Campo obrigatório'),
  cargo: Yup.string().required('Campo obrigatório'),
  anoConclusao: Yup.string().required('Campo obrigatório'),
  cnpjEmpregador: Yup.string()
    .trim()
    .min(18, 'CNPJ deve ter no mínimo 14 dígitos')
    .required('Campo obrigatório'),
  dataConclusao: Yup.date()
    .required('Campo obrigatório')
    .past()
    .transform((cv, ov) => {
      return Moment(ov, 'DD/MM/YYYY', true).toDate()
    }),
  dataNascimento: Yup.date()
    .required('Campo obrigatório')
    .birthdate()
    .transform((cv, ov) => {
      return Moment(ov, 'DD/MM/YYYY', true).toDate()
    }),
  bairro: Yup.string()
    .required('Campo obrigatório')
    .max(20, 'Bairro deve ter no máximo 20 dígitos')
    .allString('Digite somente letras'),
  cep: Yup.string()
    .trim()
    .min(9, 'CEP inválido')
    .required('Campo obrigatório'),
  cidade: Yup.string()
    .required('Campo obrigatório')
    .max(20, 'Cidade deve ter no máximo 20 dígitos')
    .allString('Digite somente letras'),
  complemento: Yup.string().max(15, 'Complemento deve ter no máximo 15 dígitos'),
  logradouro: Yup.string().required('Campo obrigatório'),
  numero: Yup.string().required('Campo obrigatório'),
  pais: Yup.string()
    .required('Campo obrigatório')
    .allString('Digite somente letras'),
  uf: Yup.string()
    .required('Campo obrigatório')
    .allString('Digite somente letras'),
  entidadeTreinamento: Yup.string().required('Campo obrigatório'),
  escolaridade: Yup.string().required('Campo obrigatório'),
  idExternoHawa: Yup.string().required('Campo obrigatório'),
  instituicaoEnsino: Yup.string().required('Campo obrigatório'),
  modalidadeTreinamento: Yup.string().required('Campo obrigatório'),
  nomeMae: Yup.string()
    .required('Campo obrigatório')
    .allString('Digite somente letras'),
  nomePai: Yup.string()
    .required('Campo obrigatório')
    .allString('Digite somente letras'),
  numeroCTPS: Yup.string().required('Campo obrigatório'),
  numeroRG: Yup.string().required('Campo obrigatório'),
  orgaoEmissor: Yup.string().required('Campo obrigatório'),
  ufRG: Yup.string().required('Campo obrigatório'),
  serieCTPS: Yup.string().required('Campo obrigatório'),
  cidadeTitulo: Yup.string()
    .required('Campo obrigatório')
    .allString('Digite somente letras'),
  numeroTitulo: Yup.string().required('Campo obrigatório'),
  secao: Yup.string().required('Campo obrigatório'),
  ufTitulo: Yup.string().required('Campo obrigatório'),
  zona: Yup.string().required('Campo obrigatório'),
  vinculoTipo: Yup.string().required('Campo obrigatório'),
  vinculoId: Yup.string().required('Campo obrigatório')
})

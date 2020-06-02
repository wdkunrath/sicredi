import * as Yup from 'yup'
export const schemaFormUnidade = Yup.object().shape({
  cnpj: Yup.string()
    .trim()
    .min(18, 'CNPJ deve ter no mínimo 14 dígitos')
    .required('Campo obrigatório'),
  celular: Yup.string()
    .trim()
    .min(14, 'Celular deve ter no mínimo 11 dígitos'),
  email: Yup.string()
    .required('Campo obrigatório')
    .email('E-mail inválido'),
  emailConfirmacao: Yup.string()
    .required('Campo obrigatório')
    .oneOf([Yup.ref('email')], 'Confirmação de e-mail não corresponde ao e-mail informado'),
  telefone: Yup.string()
    .trim()
    .min(13, 'Telefone deve ter no mínimo 10 dígitos')
    .required('Campo obrigatório'),
  bairro: Yup.string()
    .required('Campo obrigatório')
    .max(20, 'Bairro deve ter no máximo 20 dígitos')
    .allString('Digite somente letras'),
  cep: Yup.string()
    .trim()
    .min(9, 'CEP inválido')
    .required('Campo obrigatório'),
  complemento: Yup.string().max(15, 'Complemento deve ter no máximo 15 dígitos'),
  cidade: Yup.string()
    .required('Campo obrigatório')
    .max(20, 'Cidade deve ter no máximo 20 dígitos')
    .allString('Digite somente letras'),
  logradouro: Yup.string().required('Campo obrigatório'),
  numero: Yup.string()
    .required('Campo obrigatório')
    .min(1)
    .max(8, 'Número deve ter no máximo 8 dígitos'),
  pais: Yup.string()
    .required('Campo obrigatório')
    .allString('Digite somente letras'),
  uf: Yup.string().required('Campo obrigatório'),
  autoridadeRegistro: Yup.string().required('Campo obrigatório'),
  nomeFantasia: Yup.string().required('Campo obrigatório'),
  nomeResponsavel: Yup.string()
    .required('Campo obrigatório')
    .allString('Digite somente letras'),
  razaoSocial: Yup.string().required('Campo obrigatório')
})

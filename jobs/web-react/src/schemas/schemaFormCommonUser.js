import * as Yup from 'yup'
export const schemaFormCommonUser = Yup.object().shape({
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
  nomeSocial: Yup.string(),
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
  perfil: Yup.string().required('Campo obrigatório'),
  cargo: Yup.string().required('Campo obrigatório'),
  vinculoTipo: Yup.string().required('Campo obrigatório'),
  vinculoId: Yup.string().required('Campo obrigatório')
})

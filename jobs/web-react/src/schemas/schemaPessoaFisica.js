import * as Yup from 'yup'
import Moment from 'moment'
export const schemaPessoaFisica = Yup.object({
  cliente: Yup.object().shape({
    //Novo objeto do back end para o representante, movido para dentro de cliente
    representante: Yup.object()
      .nullable()
      .shape({
        setRep: Yup.boolean(),
        cpf: Yup.string()
          .when('setRep', {
            is: true,
            then: Yup.string().cpf().required()
          })
          .when('setRep', {
            is: false,
            then: Yup.string()
          }),
        nome: Yup.string()
          .when('setRep', {
            is: true,
            then: Yup.string()
              .required()
              .max(20)
          })
          .when('setRep', {
            is: false,
            then: Yup.string().max(20)
          }),
        dataNascimento: Yup.date()
          .when('setRep', {
            is: true,
            then: Yup.date().birthdate().required().transform((cv, ov) => {
              return Moment(ov, 'DD/MM/YYYY', true).toDate();
            })
          })
          .when('setRep', {
            is: false,
            then: Yup.date().birthdate().transform((cv, ov) => {
              return Moment(ov, 'DD/MM/YYYY', true).toDate();
            })
          }),
        documentoIdentificacao: Yup.object().shape({
          set: Yup.boolean(),
          // *self
          numero: Yup.string()
            .when('set', {
              is: true,
              then: Yup.string().allNumber('Digite apenas números')
                .required()
                .max(15)
            })
            .when('set', {
              is: false,
              then: Yup.string().max(12).allNumber('Digite apenas números')
            }),
          orgaoEmissor: Yup.string()
            .when('set', {
              is: true,
              then: Yup.string().allString('Digite o orgão emissor')
                .required()
                .max(4)
            })
            .when('set', {
              is: false,
              then: Yup.string().max(4).allString('Digite o orgão emissor')
            }),
          uf: Yup.string()
            .when('set', {
              is: true,
              then: Yup.string().allString('Digite a sigla do estado')
                .required().min(2)
                .max(2)
            })
            .when('set', {
              is: false,
              then: Yup.string().max(2).allString('Digite a sigla do estado')
            })
        })
      }),
    ind: Yup.boolean(),
    nomeSocial: Yup.string().allString('Digite o nome social'),
    dadosAdicionais: Yup.object()
      .nullable()
      .shape({
        indicioFraude: Yup.string().nullable(),
        indicioFraudeObs: Yup.string()
          .when('setFraude', {
            is: true,
            then: Yup.string()
              .required()
              .max(1024)
          })
          .nullable(),
        setFraude: Yup.boolean().default(false),
        titularIncapaz: Yup.string().when('set', {
          is: true,
          then: Yup.string().required()
        })
      }),
    contato: Yup.object().shape({
      celular: Yup.string(),
      email: Yup.string()
        .required()
        .email(),
      emailConfirmacao: Yup.string()
        .email()
        .oneOf([Yup.ref('email')], 'Emails diferentes')
        .required(),
      telefone: Yup.string()
        .required()
        .matches(/^\(\d{2}\) \d{4}-\d{4}$/, 'Digite o telefone corretamente')
    }),
    endereco: Yup.object().shape({
      bairro: Yup.string().required().allString('Digite o bairro')
        .max(20),
      cep: Yup.string().matches(/^\d{5}-\d{3}$/, 'Digite o CEP corretamente').required(),
      cidade: Yup.string().allString('Digite a cidade')
        .required()
        .max(20),
      complemento: Yup.string()
        .max(15),
      logradouro: Yup.string()
        .required()
        .max(40),
      numero: Yup.string()
        .required()
        .max(8),
      pais: Yup.string().allString('Digite o Pais')
        .required()
        .max(20),
      uf: Yup.string().allString('Digite a sigla do estado')
        .required().
        min(2)
        .max(2)
    }),
    nome: Yup.string()
      .required().allString('Uau! seu nome é o primeiro que vejo com um número')
      .max(64)
      .when('set', {
        is: true,
        then: Yup.string().required()
      }),
    nomeSocial: Yup.string().max(64),
    pessoaFisica: Yup.object().shape({
      cpf: Yup.string().cpf().required(),
      cei: Yup.string().matches(
        /^\d{2}.\d{3}.\d{5}\/\d{2}$/,
        'Digite todos os números do Cei'
      ),
      dataNascimento: Yup.date().required().birthdate().transform((cv, ov) => {
        return Moment(ov, 'DD/MM/YYYY', true).toDate();
      }),
      documentoIdentificacao: Yup.object()
        .shape({
          set: Yup.boolean(),
          // *self
          numero: Yup.string()
            .when('set', {
              is: true,
              then: Yup.string().allNumber('Digite apenas números')
                .required().
                max(15)
            })
            .when('set', {
              is: false,
              then: Yup.string().allNumber('Digite apenas números')
            }),
          orgaoEmissor: Yup.string()
            .when('set', {
              is: true,
              then: Yup.string().allString('Digite o orgão emissor')
                .required()
                .max(4)
            })
            .when('set', {
              is: false,
              then: Yup.string().allString('Digite o orgão emissor')
            }),
          uf: Yup.string()
            .when('set', {
              is: true,
              then: Yup.string()
                .required().allString('Digite a sigla do estado')
                .min(2)
                .max(2)
            })
            .when('set', {
              is: false,
              then: Yup.string().allString('Digite a sigla do estado')
            })
        })
        .nullable(),
      nisPisPasepNit: Yup.string().matches(
        /^\d{3}.\d{5}.\d{2}-\d{1}$/,
        'Digite todos os números do Nis'
      ),
      tituloEleitor: Yup.object()
        .nullable()
        .shape({
          set: Yup.boolean(),
          cidade: Yup.string()
            .max(20)
            .when('set', {
              is: true,
              then: Yup.string()
                .required()
                .max(20)
            }).allString('Digite a cidade')
            .when('set', {
              is: false,
              then: Yup.string().allString('Digite a cidade')
            }),
          numero: Yup.number()
            .when('set', {
              is: true,
              then: Yup.number()
                .required().test('numero', 'Digite os 12 números do título', val => val && val.toString().length === 12)
            })
            .when('set', {
              is: false,
              then: Yup.number()
            }),
          secao: Yup.number()
            .when('set', {
              is: true,
              then: Yup.number()
                .required()
            })
            .when('set', {
              is: false,
              then: Yup.number()
            }),
          uf: Yup.string()
            .max(2)
            .when('set', {
              is: true,
              then: Yup.string().allString('Digite a sigla do estado')
                .required()
            })
            .when('set', {
              is: false,
              then: Yup.string().allString('Digite a sigla do estado')
            }),
          zona: Yup.string()
            .when('set', {
              is: true,
              then: Yup.string().allNumber('Digite apenas números')
                .required()
            })
            .when('set', {
              is: false,
              then: Yup.string()
            })
        })
    })
  })
})

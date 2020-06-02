import * as Yup from 'yup'
export const schemaEmitterPessoaFisica = Yup.object({
  cliente: Yup.object({
    nome: Yup.string().trim().min(3, 'Digite pelo menos três letras').required('Campo obrigatório'),
    contato: Yup.object({
      email: Yup.string()
        .email('Email inválido')
        .required('Campo obrigatório'),
      celular: Yup.string().trim()
        .min(4, 'Digite um telefone maior')
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      emailConfirmacao: Yup.string()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório')
        .oneOf([Yup.ref('email')], 'Emails diferentes'),
      telefone: Yup.string()
        .trim()
        .min(4, 'Digite um telefone maior')
        .required('Campo obrigatório')
        .typeError('Campo obrigatório')
    }),
    endereco: Yup.object({
      bairro: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      cep: Yup.string()
        .trim()
        .min(8, 'Digite todos os números do CEP')
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      cidade: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      complemento: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      uf: Yup.string()
        .trim().min(2, 'Digite a sigla do estado')
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      logradouro: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      numero: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      pais: Yup.string()
        .trim()
        .required('Campo obrigatório')
    }),
    pessoaFisica: Yup.object({
      cei: Yup.string()
        .trim()
        .typeError('Campo obrigatório').
        min(12, 'Digite os números do CEI'),
      cpf: Yup.number()
        .required('Campo obrigatório')
        .
        test('cpf', 'Digite os 11 números do cpf', val => val && val.toString().length === 11)
        .typeError('Digite apenas números'),
      dataNascimento: Yup.string()
        .trim()
        .min(10, 'Digite a data de nascimento corretamente')
        .required('Campo obrigatório'),
      nisPisPasepNit: Yup.number(),
      documentoIdentificacao: Yup.object({
        isd: Yup.boolean(),
        numero: Yup.number()
          .when('isd', {
            is: true,
            then: Yup.number().required('Digite também o número do rg').typeError('Digite um número')
              .
              test('rg', 'Digite os 10 números do rg', val => val && val.toString().length === 10)
          }).when('isd', {
            is: false,
            then: Yup.number()
          }),
        orgaoEmissor: Yup.string()
          .when('isd', {
            is: true,
            then: Yup.string().required('Digite também o orgão emissor').typeError('Digite o rg')
          }).when('isd', {
            is: false,
            then: Yup.string()
          }),
        uf: Yup.string()
          .when('isd', {
            is: true,
            then: Yup.string().required('Digite também o estado').typeError('Digite o estado')
          }).when('isd', {
            is: false,
            then: Yup.string()
          }),
      }),
      tituloEleitor: Yup.object({
        ist: Yup.boolean(),
        numero: Yup.number()
          .when('ist', {
            is: true,
            then: Yup.number().required('Digite também o número do título').typeError('Digite um número').
              test('numero', 'Digite os 12 números do título', val => val && val.toString().length === 12)
          }).when('ist', {
            is: false,
            then: Yup.number()
          }),
        zona: Yup.number().when('ist', {
          is: true,
          then: Yup.number().required('Digite também a zona').typeError('Digite um número'),
        }).when('ist', {
          is: false,
          then: Yup.number()
        }),
        secao: Yup.number().when('ist', {
          is: true,
          then: Yup.number().required('Digite também a secao').typeError('Digite um número'),
        }).when('ist', {
          is: false,
          then: Yup.number()
        }),
        cidade: Yup.string().when('ist', {
          is: true,
          then: Yup.string().required('Digite também a cidade').typeError('Campo obrigatório'),
        }).when('ist', {
          is: false,
          then: Yup.string()
        }),
        uf: Yup.string().when('ist', {
          is: true,
          then: Yup.string().required('Digite também o estado').typeError('Campo obrigatório'),
        }).when('ist', {
          is: false,
          then: Yup.string()
        }),
      }),
      representante: Yup.object({
        isr: Yup.boolean(),
        cpf: Yup.string().when('isr', {
          is: true,
          then: Yup.string()
            .matches(/[0-9]+/gi, "Digite os 11 números do Cpf")
            .min(11, 'Digite os 11 números do Cpf')
            .required('Digite o cpf').typeError('Digite apenas números')
        }).when('isr', {
          is: false,
          then: Yup.string().nullable()
        }),
        dataNascimento: Yup.string()
          .when('isr', {
            is: true,
            then: Yup.string()
              .trim()
              .min(10, 'Digite a data de nascimento')
              .required('Digite a data de nascimento').typeError('Campo obrigatório').nullable()
          }).when('isr', {
            is: false,
            then: Yup.string().nullable()
          }),
        documentoIdentificacao: Yup.string().when('isr', {
          is: true,
          then: Yup.string()
            .matches(/[0-9]+/gi, 'Digite o documento de identificação do representante')
            .min(11, 'Digite o documento de identificação do representante')
            .required('Digite o documento de identificação do representante').typeError('Digite o documento de identificação do representante')
        }).when('isr', {
          is: false,
          then: Yup.string().nullable()
        }),
        nome: Yup.string().when('isr', {
          is: true,
          then: Yup.string().required('Digite o nome do representante').typeError('Campo obrigatório')
            .min(3, 'Digite pelo menos três caracteres').nullable(),
        }).when('isr', {
          is: false,
          then: Yup.string().nullable()
        }),
        orgaoEmissor: Yup.string().when('isr', {
          is: true,
          then: Yup.string().required('Digite o orgão emissor do documento').typeError('Campo obrigatório').nullable(),
        }).when('isr', {
          is: false,
          then: Yup.string().nullable()
        }),
        rg: Yup.string().when('isr', {
          is: true,
          then: Yup.string()
            .matches(/[0-9]+/gi, 'Digite o rg representante')
            .min(10, 'Digite o rg representante')
            .required('Digite o rg representante').typeError('Digite o rg representante')
        }).when('isr', {
          is: false,
          then: Yup.string().nullable()
        }),
        ufDocumento: Yup.string().when('isr', {
          is: true,
          then: Yup.string().required('Digite o estado').typeError('Digite o estado').min(2, 'Digite a sigla do estado').nullable(),
        }).when('isr', {
          is: false,
          then: Yup.string().nullable()
        }),
      })
    })
  })
})
export const schemaEmitterPessoaJuridica = Yup.object({
  cliente: Yup.object({
    pessoaJuridica: Yup.object({
      cnpj: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      nomeFantasia: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      razaoSocial: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      responsavel: Yup.object({
        cei: Yup.string()
          .trim()
          .required('Campo obrigatório')
          .typeError('Campo obrigatório'),
        cidadeTitulo: Yup.string()
          .trim()
          .required('Campo obrigatório')
          .typeError('Campo obrigatório'),
        cpf: Yup.string()
          .min(13, 'Digite todos os números do cpf')
          .required('Campo obrigatório')
          .typeError('Digite todos os números do cpf'),
        dataNascimento: Yup.string()
          .trim()
          .min(3, 'Digite a data de nascimento')
          .required('Campo obrigatório')
          .typeError('Campo obrigatório'),
        documentoIdentificacao: Yup.string()
          .trim()
          .required('Campo obrigatório')
          .typeError('Campo obrigatório'),
        estadoTitulo: Yup.string()
          .trim()
          .required('Campo obrigatório')
          .typeError('Campo obrigatório'),
        nisPisPasepNit: Yup.string()
          .trim()
          .required('Campo obrigatório')
          .typeError('Campo obrigatório'),
        nome: Yup.string()
          .trim()
          .min(3, 'Digite pelo menos 3 letras')
          .required('Campo obrigatório')
          .typeError('Campo obrigatório'),
        orgaoEmissor: Yup.string()
          .trim()
          .required('Campo obrigatório')
          .typeError('Campo obrigatório'),
        rg: Yup.string()
          .trim()
          .required('Campo obrigatório')
          .typeError('Campo obrigatório'),
        secao: Yup.string()
          .trim()
          .required('Campo obrigatório')
          .typeError('Campo obrigatório'),
        tituloEleitor: Yup.string()
          .trim()
          .required('Campo obrigatório')
          .typeError('Campo obrigatório'),
        ufDocumento: Yup.string()
          .trim()
          .required('Campo obrigatório')
          .typeError('Campo obrigatório'),
        zona: Yup.string()
          .trim()
          .required('Campo obrigatório')
          .typeError('Campo obrigatório')
      })
    }).nullable(true),
    contato: Yup.object({
      celular: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      email: Yup.string()
        .required('Campo obrigatório')
        .email('Email inválido'),
      emailConfirmacao: Yup.string()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório')
        .oneOf([Yup.ref('email')], 'Emails diferentes'),
      telefone: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório')
    }),
    endereco: Yup.object({
      bairro: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      cep: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      cidade: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      complemento: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      estado: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      logradouro: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      numero: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      pais: Yup.string()
        .trim()
        .required('Campo obrigatório')
    }),
    representante: Yup.object({
      cpf: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      dataNascimento: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      documentoIdentificacao: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      nome: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      orgaoEmissor: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      rg: Yup.string()
        .trim()
        .required('Campo obrigatório')
        .typeError('Campo obrigatório'),
      ufDocumento: Yup.string()
        .trim()
        .required('Campo obrigatório')
    })
  }),
  codigoPedido: Yup.string()
    .trim()
    .required('Campo obrigatório')
    .typeError('Campo obrigatório'),
  dataHora: Yup.string()
    .trim()
    .required('Campo obrigatório')
    .typeError('Campo obrigatório'),
  produto: Yup.object({
    codigo: Yup.string()
      .trim()
      .required('Campo obrigatório')
      .typeError('Campo obrigatório'),
    nome: Yup.string()
      .trim()
      .required('Campo obrigatório')
      .typeError('Campo obrigatório'),
    validadeDias: Yup.string()
      .trim()
      .required('Campo obrigatório')
      .typeError('Campo obrigatório')
  })
})
  .nullable(true)
  .typeError('Campo obrigatório')

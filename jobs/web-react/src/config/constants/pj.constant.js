export const defaultObjetPJRep = [
  {
    label: 'Nome',
    nome: 'representante.nome',
    view: 'nome',
    size: 3,
    maxValue: 64
  },
  {
    label: 'Cpf',
    nome: 'representante.cpf',
    size: 2,
    view: 'cpf',
    format: '###.###.###-##'
  },
  {
    label: 'Data de nascimento',
    format: '##/##/####',
    nome: 'representante.dataNascimento',
    view: 'dataNascimento',
    size: 3
  },
  {
    label: 'Documento identificação',
    nome: 'representante.documentoIdentificacao.numero',
    view: 'numero',
    size: 2,
    maxValue: 12
  },
  {
    label: 'Orgão emissor',
    nome: 'representante.documentoIdentificacao.orgaoEmissor',
    view: 'orgaoEmissor',
    size: 2,
    maxValue: 4
  },
  {
    label: 'Estado',
    nome: 'representante.documentoIdentificacao.uf',
    view: 'uf',
    size: 1,
    maxValue: 2
  },
  {
    label: 'Logradouro',
    nome: 'representante.endereco.logradouro',
    view: 'logradouro',
    size: 3,
    maxValue: 64
  },
  {
    label: 'Número',
    nome: 'representante.endereco.numero',
    view: 'numero',
    size: 1,
    maxValue: 8
  },
  {
    label: 'Complemento',
    nome: 'representante.endereco.complemento',
    view: 'complemento',
    size: 3,
    maxValue: 64
  },
  {
    label: 'Bairro',
    nome: 'representante.endereco.bairro',
    view: 'bairro',
    size: 2,
    maxValue: 20
  },
  {
    label: 'Cep',
    nome: 'representante.endereco.cep',
    mask: 'cep',
    size: 2,
    view: 'cep',
    format: '#####-###'
  },
  {
    label: 'Cidade',
    nome: 'representante.endereco.cidade',
    size: 3,
    view: 'cidade',
    maxValue: 64
  },
  {
    label: 'Estado',
    nome: 'representante.endereco.uf',
    size: 1,
    view: 'uf',
    maxValue: 2
  },
  {
    label: 'País',
    nome: 'representante.endereco.pais',
    size: 2,
    view: 'pais',
    maxValue: 20
  }
]

export const defaultObjetPJ = [
  {
    label: 'Nome',
    nome: 'cliente.nome',
    size: 3,
    maxValue: 64
  },
  {
    label: 'Cnpj',
    nome: 'cliente.pessoaJuridica.cnpj',
    format: '##.###.###/####-##',
    size: 3
  },
  {
    label: 'Razão social',
    nome: 'cliente.pessoaJuridica.razaoSocial',
    size: 3,
    maxValue: 64
  },
  {
    label: 'Logradouro',
    nome: 'cliente.endereco.logradouro',
    size: 3,
    maxValue: 64
  },
  {
    label: 'Número',
    nome: 'cliente.endereco.numero',
    size: 3,
    maxValue: 10
  },
  {
    label: 'Complemento',
    nome: 'cliente.endereco.complemento',
    size: 3,
    maxValue: 64
  },
  {
    label: 'Bairro',
    nome: 'cliente.endereco.bairro',
    size: 3,
    maxValue: 64
  },
  {
    label: 'Cep',
    nome: 'cliente.endereco.cep',
    mask: 'cep',
    size: 3,
    format: '#####-###'
  },
  {
    label: 'Cidade',
    nome: 'cliente.endereco.cidade',
    size: 3,
    maxValue: 64
  },
  {
    label: 'Estado',
    nome: 'cliente.endereco.uf',
    size: 3,
    maxValue: 2
  },
  {
    label: 'País',
    nome: 'cliente.endereco.pais',
    size: 2,
    maxValue: 20
  },
  {
    label: 'Telefone',
    nome: 'cliente.contato.telefone',
    mask: 'tel',
    format: '(##) ####-####',
    size: 2
  },
  {
    label: 'Celular',
    nome: 'cliente.contato.celular',
    size: 2,
    format: '(##) #####-####'
  },
  {
    label: 'Nome',
    nome: 'cliente.pessoaJuridica.responsavel.nome',
    size: 3,
    maxValue: 64
  },
  {
    label: 'Cpf',
    nome: 'cliente.pessoaJuridica.responsavel.cpf',
    size: 3,
    format: '###.###.###-##'
  },
  {
    label: 'E-mail',
    nome: 'cliente.contato.email',
    size: 3,
    maxValue: 64
  },
  {
    label: 'E-mail confirmação',
    nome: 'cliente.contato.emailConfirmacao',
    size: 3,
    maxValue: 64
  },
  {
    label: 'Data de nascimento',
    nome: 'cliente.pessoaJuridica.responsavel.dataNascimento',
    format: '##/##/####',
    size: 2
  },
  {
    label: 'Documento identificação',
    nome: 'cliente.pessoaJuridica.responsavel.documentoIdentificacao.numero',
    size: 3,
    maxValue: 12
  },
  {
    label: 'Orgão emissor',
    nome: 'cliente.pessoaJuridica.responsavel.documentoIdentificacao.orgaoEmissor',
    size: 2,
    maxValue: 4
  },
  {
    label: 'Estado',
    nome: 'cliente.pessoaJuridica.responsavel.documentoIdentificacao.uf',
    size: 1,
    maxValue: 2
  },
  {
    label: 'nis/Pis/Pasep/Nit',
    format: '###.#####.##-#',
    nome: 'cliente.pessoaJuridica.responsavel.nisPisPasepNit',
    mask: 'nis',
    size: 4
  }
]
export function mask(value, type) {
  value = value.replace(/\D/g, '')
  if (type === 'cep') {
    value = value.replace(/(\d{5})/, '$1-')
  } else if (type == 'nis') {
    value = value.replace(/(\d{3})(\d{5})(\d{2})/, '$1.$2.$3-')
  } else if (type === 'tel') {
    value = value.replace(/^(\d{2})(\d{4})/g, '($1) $2-')
  } else if (type === 'cpf') {
    value = value.replace(/(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-')
  } else if (type == 'cnpj') {
    value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4-')
  } else if (type == 'cel') {
    value = value.replace(/^(\d{2})(\d{5})/g, '($1) $2-')
  }
  return value
}

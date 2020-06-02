const userMock = {
  usuario: {
    cpf: "03611985074",
    nome: "João da silva",
    telefone: "51999999999",
    email: "joao.silva@acertsis.com.br",
    status: "ATIVO",
    perfil: "user_1",
    categoria: "PF",
  },
  permissoes: {
    dashboard: {
      visualizar: true,
      alterar: true,
      excluir: true,
    },
    emissao: {
      visualizar: true,
      alterar: true,
      excluir: true,
    },
    cadastro: {
      visualizar: true,
      alterar: true,
      excluir: true,
    },
    relatorios: {
      // visualizar: true,
      // alterar: true,
      // excluir: true
    },
    plataformaEAD: {
      visualizar: true,
      alterar: true,
      excluir: true,
    },
    renovacaoOnline: {
      visualizar: true,
      alterar: true,
      excluir: true,
    },
    manuais: {
      visualizar: true,
      alterar: true,
      excluir: true,
    },
    configuracoes: {
      visualizar: true,
      alterar: true,
      excluir: true,
    },
  },
};

export default userMock;

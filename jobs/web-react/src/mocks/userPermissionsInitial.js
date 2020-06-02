const userPermissionsInitial = {
    usuario: {
      cpf:"",
      nome:"",
      telefone:"",
      email:"",
      status:"",
      perfil:""
    },
    permissoes: {
      dashboard: {
        visualizar: false,
        alterar: false,
        excluir: false
      },
      emissao: {
        visualizar: false,
        alterar: false,
        excluir: false
      },
      cadastro: {
        visualizar: false,
        alterar: false,
        excluir: false
      },
      relatorios: {
        visualizar: false,
        alterar: false,
        excluir: false
      },
      plataformaEAD: {
        visualizar: false,
        alterar: false,
        excluir: false
      },
      renovacaoOnline: {
        visualizar: false,
        alterar: false,
        excluir: false
      },
      manuais: {
        visualizar: false,
        alterar: false,
        excluir: false
      },
      configuracoes: {
        visualizar: false,
        alterar: false,
        excluir: false
      }
    }
  };

export default userPermissionsInitial;
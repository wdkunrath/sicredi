import React from 'react'
import PropTypes from 'prop-types'
import { Drawer } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import CloseIcon from '@material-ui/icons/Close'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import GetAppIcon from '@material-ui/icons/GetApp'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import PageviewIcon from '@material-ui/icons/Pageview'
import SidebarNav from './SidebarNav/SidebarNav'

const Sidebar = (props) => {
  const { open, variant, onClose } = props

  const itensNav = [
    {
      name: 'cadastro',
      label: 'Cadastro',
      icon: <PersonAddIcon></PersonAddIcon>,
      items: [
        { name: 'ac1', label: 'AC 1' },
        { name: 'ac2', label: 'AC 2' },
        { name: 'ar', label: 'AR' },
        { name: 'unidade', label: 'Unidade' },
        { name: 'usuarios', label: 'Usuário' },
        { name: 'maquina', label: 'Máquina' },
        { name: 'permissoes', label: 'Permissões'},
      ]
    },
    {
      name: 'consultar',
      label: 'Consulta',
      icon: <PageviewIcon></PageviewIcon>
    },
  
    {
      name: 'verificar',
      label: 'Verificação',
      icon: <VerifiedUserIcon></VerifiedUserIcon>
    },
  ]

  return (
    <Drawer
      anchor="left"
      classes={{ paper: 'drawer-sidebar' }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <button onClick={onClose} className="btnClose">
        <CloseIcon></CloseIcon>
      </button>

      <SidebarNav items={itensNav} />
    </Drawer>
  )
}
Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
}
export default Sidebar

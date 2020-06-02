import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Tooltip } from '@material-ui/core'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import clsx from 'clsx';
const Header = props => {
  const { className, onSidebarOpen, ...rest } = props
  return (
    <AppBar {...rest} className={clsx('header', className)}>
      <Toolbar>
      <Tooltip title="Abrir Menu" aria-label="menu">
        <IconButton className="menu-icon" color="inherit" onClick={onSidebarOpen}>
          <MenuIcon />
        </IconButton>
        </Tooltip>
        <Tooltip title="Sair" aria-label="logout">
        <IconButton className="logof-icon" color="inherit" style={{position:'absolute',right:'2%'}}>
          <ExitToAppRoundedIcon />
        </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

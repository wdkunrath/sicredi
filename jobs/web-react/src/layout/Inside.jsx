import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { SessionService } from '@services'
import Header from '../common/template/Header'
import Footer from '../common/template/Footer'
import Sidebar from '../common/template/Sidebar'

export default function Inside({ children }) {
  const service = new SessionService()
  const authenticated = service.isAuthenticated()

  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <>
      {!authenticated && <Redirect to="/login" />}
      <Header onSidebarOpen={() => setOpenSidebar(true)} />

      <div className={clsx({ container: true })}>
        <Sidebar onClose={() => setOpenSidebar(false)} open={openSidebar} />
        <main>{children}</main>
      </div>

      <Footer></Footer>
    </>
  )
}

Inside.propTypes = {
  children: PropTypes.node
}

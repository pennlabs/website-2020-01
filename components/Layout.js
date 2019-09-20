import React from 'react'

import Head from './Head'
import Header from './Header'
import Footer from './Footer'

export default ({ children }) => (
  <>
    <Head />
    <body>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 42px' }}>{children}</div>
      <Footer />
    </body>
  </>
)

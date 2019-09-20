import React from 'react'

import Head from './Head'
import Header from './Header'
import Footer from './Footer'

export default ({ children }) => (
  <>
    <Head />
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  </>
)

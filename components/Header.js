import React, { useState } from 'react'
import Link from 'next/link'

import '../styles/styles.sass'

const Header = () => {
  const [active, setActive] = useState(false)

  return (
    <div>
      <nav className="navbar is-info" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img
                src="/static/img/beaker-only.png"
                alt="Penn Labs"
                width="auto"
                height="100"
              />
            </a>
          </Link>
          <button
            className="button navbar-burger is-info"
            onClick={() => setActive(!active)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={active ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <Link href="/apply"> 
              <a className="navbar-item">
                Apply
              </a>
            </Link>
            <Link href="/members"> 
              <a className="navbar-item">
                Members
              </a>
            </Link>
            <Link  href="/products">
              <a className="navbar-item">
                Products
              </a>
            </Link>
            <Link href="/resources">
              <a className="navbar-item" >
                Resources
              </a>
            </Link>
            <Link href="https://medium.com/@pennappslabs">
              <a className="navbar-item">
                Blog
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
